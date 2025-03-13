import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { ForgetPasswordForm } from "@/formschema/ForgetPasswordForm";
  
function Forget_Password() {
    return (<div className="w-full h-screen bg-slate-900 flex  justify-center items-center ">
    <Card className="w-3/4 lg:w-1/4">
        <CardHeader>
          <CardTitle className="text-xl lg:text-2xl">Recover Password</CardTitle>
         
        </CardHeader>
        <CardContent>
          <ForgetPasswordForm/>
        </CardContent>
      </Card>
      </div>
        );
}

export default Forget_Password;