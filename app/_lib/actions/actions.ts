"use server";

import { auth, db } from "../firebase/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { redirect } from "next/navigation";
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

  let success = false;

  if (formType === "login") {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

      const docRef = await getDoc(doc(db, "users", response.user.uid));

      if (docRef.exists()) {
        if (docRef.data().type !== userType) {
          const errorMsg = `Giriş yaptığınız kullanıcı ${
            userType === "isarayan" ? "iş veren" : "iş arayan"
          } olarak kayıt edilmiş. Lütfen ${
            userType === "isarayan" ? "iş veren" : "iş arayan"
          } olarak giriş yapınız.`;
          return { msg: errorMsg };
        }
      } else {
        return { msg: "An unexpected error happened! Please try again." };
      }

      const serverResponse = await fetch(`${process.env.URL}/api/login`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${await response.user.getIdToken()}`,
        },
      });

      if (serverResponse.status === 200) {
        success = true;
      }
    } catch (err) {
      return { msg: err.message };
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
    }
  }

  if (success) {
    redirect("dashboard");
  }
};
