"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import {
  Form,
} from "@/components/ui/form"
import { toast } from "sonner"
import FormField from "./FormField"
import { useRouter } from "next/navigation"


const authFormSchema = (type : FormType) =>{ 
    return z.object ({
    name : type === "sign-up" ? z.string().min(2) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(6),
})
}

const AuthForm = ( {type} : {type : FormType}) => {
    const formSchema = authFormSchema(type)
    const router = useRouter()
      
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    try{
        if(type === "sign-up"){
            toast.success("Account created successfully! , Please sign in.")
            router.push("/sign-in")
            console.log("Sign Up", values)
        } else {
            toast.success("Signed in successfully!")
            router.push("/")
            console.log("Sign In", values)
        }

    } catch(error){
        console.log(error)
        toast.error("Something went wrong, please try again later.")
    }
  }

   const isSignIn = type === "sign-in"
    return (
        <div className="card-border lg:min-w-[566px]">
                <div className="flex flex-col gap-3 card py-14 px-10">
                    <div className="flex flex-row gap-2 justify-center">
                        <Image src="/logo.svg" alt="Logo" width={32} height={38} />
                        <h2 className="primary-text-100">PrepWise</h2>
                    </div>

                    <h4>Practice job intervies with AI</h4>
                <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">

            {!isSignIn && 
            <FormField control={form.control} name="name" label="Name" placeholder="Your name" /> }
            <FormField control={form.control} name="email" label="Email" placeholder="Your email" type="email" />
            <FormField control={form.control} name="password" label="Password" placeholder="Your password" type="password" />
        

            <Button type="submit" className="btn">{isSignIn ? "Sign In" : "Create an account"}</Button>
        </form> 
        </Form>

        <p className="text-center text-sm text-muted-foreground mt-4">
            {isSignIn ? "Don't have an account?" : "Already have an account?"} 
            <Link href={isSignIn ? "/sign-up" : "/sign-in"} className="font-bolds text-user-primary ml-1 ">
                {isSignIn ? " Sign Up" : " Sign In"}
            </Link>
        </p>
    </div>
        </div>
    )
}

export default AuthForm