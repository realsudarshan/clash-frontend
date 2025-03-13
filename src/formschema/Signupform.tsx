"use client"

import { z } from "zod"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
  import { Button } from "@/components/ui/button"
import Link from "next/link"
import axios from "axios"
import { useRouter } from "next/navigation"
 

const formSchema = z.object({
    email: z.string().email(),
    username:z.string().min(2).max(15),
    password: z.string().
        min(8, "Password must be at least 8 characters")
        .max(100, "Password must be no more than 100 characters")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/\d/, "Password must contain at least one number")
        .regex(/[^a-zA-Z0-9]/, "Password must contain at least one special character"),

})
export function SignupForm() {
  const router=useRouter()  
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username:"",
        email: "",
        password:""
      },
    })
   
    // 2. Define a submit handler.
   async function onSubmit(values: z.infer<typeof formSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      try {
        const response=await axios.post(`${process.env.NEXT_PUBLIC_BACKENDURI}/api/auth/register`,values);
        router.push("/login")
      } catch (error) {
        console.error(error)
        
      }
    }
    return  (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
           <div className="w-full flex justify-end ">
            <Link href="/login">
      <Button variant={"link"} className="text-sm text-red-400">Login page </Button>
    </Link>
    </div>
            <div className="mt-4 flex justify-center"> 
              <Button type="submit" variant={"destructive"} className="rounded-xl">Signup</Button>
            </div>
          </form>
        </Form>
      );
      

  }