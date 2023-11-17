import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import MobileSliderBar from "./mobile-sliderbar";

const Navbar = () => {
    return ( 
        <div className="flex items-center p-4">
            <MobileSliderBar />
            <div className="flex w-full justify-end">
                <UserButton afterSignOutUrl="/"/>
            </div>
        </div>
    );
}
    
export default Navbar;
