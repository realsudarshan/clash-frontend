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
import { useRouter,useSearchParams } from "next/navigation" 
import axios, { AxiosError } from "axios"
import { useToast } from "@/hooks/use-toast"



const formSchema = z.object({
    email: z.string().email(),
    password: z.string().
        min(8, "Password must be at least 8 characters")
        .max(100, "Password must be no more than 100 characters")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/\d/, "Password must contain at least one number")
        .regex(/[^a-zA-Z0-9]/, "Password must contain at least one special character"),

})
export function LoginForm() {
  const { toast } = useToast()
  const searchParams = useSearchParams(); // Use search params to access URL query
  const verified = searchParams.get("verified");
  const router=useRouter(); 
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        email: "",
        password:""
      },
    })
    
   
    // 2. Define a submit handler.
 
 async function onSubmit(values: z.infer<typeof formSchema>) {
  try {
   
const response=await axios.post(`${process.env.NEXT_PUBLIC_BACKENDURI}/api/auth/login`,values);

  }
  catch (error) {
    if (error instanceof AxiosError && error.response && error.response.data) {
      toast( error.response.data );
    } else if (error instanceof Error) {
      console.log("General error:", error.message);
    } else {
      console.log("An unexpected error occurred:", error);
    }
  }
 }
    return  (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
           
            <Link href="/forget_password">
      <Button variant={"link"} className="text-sm text-red-400 w-full">Forget password?</Button>
    </Link>
    <Link href="/signup">
      <Button variant={"link"} className="text-sm text-red-400 w-full">Signup page</Button>
    </Link>
  
            <div className="mt-4 flex justify-center"> 
              <Button type="submit" variant={"destructive"} className="rounded-xl">Login</Button>
            </div>
          </form>
        </Form>
      );
      

  }