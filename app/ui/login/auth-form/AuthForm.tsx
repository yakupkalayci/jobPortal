"use client";

import { useState } from "react";
import { loginTypes } from "@/app/login/page";
import styles from "./authForm.module.css";

interface AuthProps {
  type: loginTypes;
}

function AuthForm(props: AuthProps) {
  // destruct props
  const { type } = props;

  // states
  const [formType, setFormType] = useState<"login" | "signup">("login");

  // methods
  const changeFormType = () => {
    setFormType((prev) => (prev === "login" ? "signup" : "login"));
  };

  const login = () => {
    if(type === 'default' || type === 'isarayan') {
      console.log("İŞARAYAN GİRİŞİ");
    } else {
      console.log("İŞVEREN GİRİŞİ");
    }
  }

  const signup = () => {
    if(type === 'default' || type === 'isarayan') {
      console.log("İŞARAYAN KAYDI");
    } else {
      console.log("İŞVEREN KAYDI");
    }
  }

  return (
    <div className={styles.container}>
      <h1>{formType === "login" ? "Giriş Yap" : "Kayıt Ol"}</h1>
      <div className={styles.inputContainer}>
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
      <button className={styles.btn} onClick={() => formType === 'login' ? login() : signup()}>
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
    </div>
  );
}

export default AuthForm;
