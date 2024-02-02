"use client";

import { useState, useEffect } from "react";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";
import { authAction } from "@/app/lib/actions";
import { loginTypes } from "@/app/login/page";
import styles from "./authForm.module.css";

interface AuthProps {
  type: loginTypes;
}

export type formType = 'login' | 'signup'

function AuthForm(props: AuthProps) {
  // destruct props
  const { type } = props;

  // states
  const [formType, setFormType] = useState<formType>('login');
  const [state, formAction] = useFormState(authAction, '');

  // methods
  const changeFormType = () => {
    setFormType((prev) => (prev === "login" ? "signup" : "login"));
  };
  
  // useEffects
  useEffect(() => {
    if(state?.msg === 'success') {
      toast.success(state.msg);
      return;
    }
    if(state?.msg) {
      let errMsg = state.msg;
      errMsg = errMsg?.slice(errMsg.indexOf('/')+1);
      toast.error(errMsg);
    }
    
  }, [state]);

  return (
    <div className={styles.container}>
      <form action={formAction} className={styles.form}>
        <h1>{formType === "login" ? "Giriş Yap" : "Kayıt Ol"}</h1>
        <div className={styles.inputContainer}>
          <input 
            type="hidden"
            name="formType"
            value={formType}
          />
          <input
            type="text"
            name="email"
            placeholder="Eposta Adresiniz.."
            className={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Şifre.."
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.btn}>
          {formType === "login" ? "Giriş Yap" : "Kayıt Ol"}
        </button>
        <div className={styles.signupInfo}>
          {formType === "login"
            ? "Henüz hesabınız yok mu? "
            : "Hesabınız var mı? "}
          <span onClick={() => changeFormType()}>
            {formType === "login" ? "Hemen Kayıt Olun!" : "Giriş Yap"}
          </span>
        </div>
      </form>
    </div>
  );
}

export default AuthForm;
