"use server";
import { auth, db } from "../firebase/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { redirect } from "next/navigation";
import { formType } from "@/app/_components/auth-form/AuthForm";
import { loginTypes } from "@/app/(public)/login/page";
import { login } from "./login";
import { logout } from "./logout";

export const authAction = async (prevState: any, formData: FormData) => {
  const userTypeFormData = formData.get("userType") as loginTypes;
  let userType =
    userTypeFormData === "default" || userTypeFormData === "isarayan"
      ? "employee"
      : "employer";
  const formType = formData.get("formType") as formType;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  let successLogin = false;
  let successLogout = false;

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

      const isLogged = await login(await response.user.getIdToken());
      if (isLogged) {
        successLogin = true;
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

      const isLogged = await login(await response.user.getIdToken());
      if (isLogged) {
        successLogin = true;
      }
    } catch (err) {
      return { msg: err.code };
    }
  }

  if (formType === "signout") {
    try {
      const response = await signOut(auth);

      const isLogouted = await logout();

      if (isLogouted) {
        successLogout = true;
      }
    } catch (err) {
      console.log(err);
    }
  }

  if (successLogin) {
    redirect("dashboard");
  }
  if (successLogout) {
    redirect(`${process.env.URL}`);
  }
};
