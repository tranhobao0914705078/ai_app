"use client"
import { Card } from "@/components/ui/card";
import { useUser } from "@clerk/nextjs";
import { ArrowRight, LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";
import routes from "@/store/routes"
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

type Route = {
    label: string,
    icon: LucideIcon,
    href: string,
    color?: string,
    bgColor?: string
}

const DashboardPage = () => {
    const {user} = useUser();
    const [fullname, setFullname] = useState<string | null>(null)
    const [tools, setTools] = useState<Route[]>([]);
    const [test, setTest] = useState<Route[]>([]);
    const router = useRouter();
    useEffect(() => {
        if(user){
            setFullname(user?.fullName)
        }
    }, [user])
    useEffect(() => {
        if(routes != null){
            setTools(routes)
        }
    }, [routes])

    useEffect(() => {
        const filterRouter = tools.filter((item) => item.href !== "/dashboard");
        setTest(filterRouter);
    }, [tools])
    console.log(test);
    return(
        <div>
            <div className="mb-8 space-x-8">
                <h2 className="font-bold text-2xl text-center">
                    Welcome To AI Platform: <span className="underline">{fullname}</span>
                </h2>
                <h3 className="font-bold text-2xl text-center">
                    Explore The Power Of AI
                </h3>
                <p className="text-muted-foreground 
                    font-light text-center md:text-lg text-sm">
                    Chat with the smartest AI - Experience the power of AI
                </p>
            </div>
            <div className="px-4 md:px-20 lg:px-32 space-y-4">
                {tools.map((tool) => (
                    tool.href !== '/dashboard' && (
                        <Card
                            onClick={() => router.push(tool.href)}
                            key={tool.href}
                            className=
                            {cn("p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer")}
                        >
                            <div className="flex gap-x-4 items-center">
                                <div className={cn("p-2 w-fit rounded-sm", tool.bgColor)}>
                                    <tool.icon className={cn("w-8 h-8", tool.color)}/>
                                </div>
                                <div className="font-semibold">
                                    {tool.label}
                                </div>
                            </div>
                            <ArrowRight className="w-5 h-5"/>
                        </Card>
                    )
                ))}
            </div>
        </div>
    )
}

export default DashboardPage;