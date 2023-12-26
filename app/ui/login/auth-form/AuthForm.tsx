'use client';

import { useState } from "react";
import { loginTypes } from "@/app/login/page";
import styles from './authForm.module.css';

interface AuthProps {
  type: loginTypes; 
}

function AuthForm(props: AuthProps) {

  // destruct props
  const { type } = props;

  // states
  const [formType, setFormType] = useState<'login' | 'signup'>('login');

  // methods
  const changeFormType = () => {
    setFormType(prev => prev === 'login' ? 'signup' : 'login');
  }

  return (
    <div className={styles.container}>
      <h1>{formType === 'login' ? 'Giriş Yap' : 'Kayıt Ol'}</h1>
      <div className={styles.inputContainer}>
        <input type="text" name="email" placeholder="Eposta Adresiniz.." className={styles.input}/>
        <input type="password" name="password" placeholder="Şifre.." className={styles.input}/>
      </div>
      <button className={styles.btn}>{formType === 'login' ? 'Giriş Yap' : 'Kayıt Ol'}</button>
      <div className={styles.signupInfo}>
        {formType === 'login' ? 'Henüz hesabınız yok mu? ' : 'Hesabınız var mı? '}<span onClick={() => changeFormType()}>{formType === 'login' ? 'Hemen Kayıt Olun!' : 'Giriş Yap'}</span>
      </div>
    </div>
  )
}

export default AuthForm;