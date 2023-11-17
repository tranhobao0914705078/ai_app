import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
    return ( 
        <div className="h-screen flex flex-col justify-center items-center text-2xl font-bold text-gray-600">
            <div className="text-center mb-6">
                Welcome To Landing Page (Unprotected)  
            </div>
            <div className="space-y-6">
                <Link href="sign-in">
                    <Button className="btn mr-2 w-200">Login</Button>
                </Link>
                <Link href="sign-up">
                    <Button className="btn w-200">Register</Button>
                </Link>
            </div>
        </div>
     );
}
 
export default LandingPage;