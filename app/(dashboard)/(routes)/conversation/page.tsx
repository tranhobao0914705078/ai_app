"use client"
import Heading from "@/components/heading";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";

import * as z from "zod";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";


const Conversation = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: ""
        }
    });

    
    const isLoading = form.formState.isSubmitting;
    const currentDate = new Date();

    const month = currentDate.getMonth() + 1;
    const hours = currentDate.getHours(); 
    const minutes = currentDate.getMinutes();
    const date = currentDate.getDate() + "/" + month + "/" + currentDate.getFullYear();
    const getHours  = hours + ":" + minutes;
    const getTimes = date + "-" + getHours;
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values.prompt)
    }


    return ( 
        <div>
            <Heading 
                title="Conversation"
                description="Our most advanced conversation model."
                icon={MessageSquare}
                iconColor="text-violet-500"
                bgColor="bg-violet-500/10"
            />
            <div className="px-4 lg:px-8">
                <div>
                    <Form {...form}>
                        <form 
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="rounded-lg border w-full p-4 px-3
                            md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
                        >
                            <FormField
                                name="prompt"
                                render={({field}) => (
                                    <FormItem className="col-span-12 lg:col-span-10">
                                        <FormControl className="m-0 p-0">
                                            <Input 
                                                className="outline-none
                                                border-0
                                                focus-visible:ring-0
                                                focus-visible:ring-transparent"
                                                disabled={isLoading}
                                                placeholder="Hello, How are you to day?"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <Button className="col-span-12 lg:col-span-2 w-full">
                                Generate
                            </Button>
                        </form>
                    </Form>
                </div>
                <div className="space-y-4 mt-4">
                    Message Content
                </div>
            </div>
        </div>
    );
}
 
export default Conversation;