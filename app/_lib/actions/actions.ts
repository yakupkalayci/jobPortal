"use server";

import { auth, db } from "../firebase/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { redirect, permanentRedirect } from "next/navigation";
import { formType } from "@/app/_components/auth-form/AuthForm";
import { loginTypes } from "@/app/(public)/login/page";

export const authAction = async (prevState: any, formData: FormData) => {
  const userType =
    (formData.get("userType") as loginTypes) === "default"
      ? "isarayan"
      : formData.get("userType");
  const formType = formData.get("formType") as formType;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  let success;

  if (formType === "login") {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

      const docRef = await getDoc(doc(db, "users", response.user.uid));

      if (docRef.exists()) {
        if (docRef.data().type === userType) {
          success = true;
        }
      }

      const errorMsg = `Giriş yaptığınız kullanıcı ${
        userType === "isarayan" ? "iş veren" : "iş arayan"
      } olarak kayıt edilmiş. Lütfen ${
        userType === "isarayan" ? "iş veren" : "iş arayan"
      } olarak giriş yapınız.`;
      return { msg: errorMsg };
    } catch (err) {
      return { msg: err.message };
    } finally {
      if (success) {
        redirect("dashboard");
      }
    }
  }
  if (formType === "signup") {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await setDoc(doc(db, "users", response.user.uid), {
        type: userType,
      });

      success = true;
    } catch (err) {
      return { msg: err.code };
    } finally {
      if (success) {
        redirect("dashboard");
      }
    }
  }
};
