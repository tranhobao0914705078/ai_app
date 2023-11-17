"use client";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
    Sheet, 
    SheetContent, 
    SheetTrigger
} from "@/components/ui/sheet";
import SliderBar from "./sliderbar";
import { useEffect, useState } from "react";


const MobileSliderBar = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, [])
    if(!isMounted){
        return null;
    }
    return ( 
        <Sheet>
            <SheetTrigger>
                {/* khi kích thước màn hình nhỏ hơn 768px thì mới hiển button menu */}
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
                <SliderBar />
            </SheetContent>
        </Sheet>
    );
}
 
export default MobileSliderBar;