"use server";
import { auth } from "firebase-admin";
import { cookies } from "next/headers";
import { customInitApp } from "../firebase/firebase-admin";

export async function login(token: string) {
  customInitApp();
  const decodedToken = await auth().verifyIdToken(token);

  if (decodedToken) {
    //Generate session cookie
    const expiresIn = 60 * 60 * 24 * 5 * 1000;
    const sessionCookie = await auth().createSessionCookie(token, {
      expiresIn,
    });
    const options = {
      name: "session",
      value: sessionCookie,
      maxAge: expiresIn,
      httpOnly: true,
      secure: true,
    };

    //Add the cookie to the browser
    cookies().set(options);

    return true;
  }

  return false;
}
