'use client';
import { useFormState } from "react-dom"
import LogoutButton from "./LogoutButton"
import { authAction } from "@/app/_lib/actions/authActions"

function LogoutForm() {

    const [state, action] = useFormState(authAction, { msg: "" });

  return (
    <form action={action}>
        <input type="hidden" name="formType" value="signout"></input>
        <LogoutButton />
    </form>
  )
}

export default LogoutForm