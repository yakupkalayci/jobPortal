"use client";
import { authAction } from "@/app/_lib/actions/authActions";
import { logout } from "@/app/_lib/actions/logout";
import { useFormState } from "react-dom";

function Dashboard() {

  const [state, formAction] = useFormState(authAction, { msg: "" });


  return (
    <div>
      Dashboard
      <form action={formAction}>
        <input type="hidden" name="formType" value="signout" />
        <button>Logout</button> 
      </form>
    </div>
  );
}

export default Dashboard;
