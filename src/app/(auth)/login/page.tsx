import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { LoginForm } from "@/formschema/loginform";
  
function login() {
    return ( <>
    <div className=" w-full h-screen flex bg-slate-800 justify-center items-center">
    <Card className="w-3/4 lg:w-1/4">
  <CardHeader className="text-3xl">
    <CardTitle>Login</CardTitle>
  </CardHeader>
  <CardContent>
  <LoginForm/>
  </CardContent>

</Card>
    
    </div>

    </> );
}

export default login;