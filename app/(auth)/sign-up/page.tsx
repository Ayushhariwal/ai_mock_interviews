import AuthForm from "@/components/AuthForm"
import React from "react"

const page = () => {
    return (
        <AuthForm type="sign-up" />
        //both sign-up and sign-in pages will be treated differently as according to the authentication type of the user
    )
}

export default page