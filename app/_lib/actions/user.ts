"use server";
import { auth } from "firebase-admin";
import { customInitApp } from "../firebase/firebase-admin";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { cookies } from "next/headers";

export async function getUser() {
  customInitApp();
  const token = cookies().get("session")?.value;
  if (!token) return false;

  const decodedClaims = await auth().verifySessionCookie(token);

  const { uid, email, phone_number, picture } = decodedClaims;
  
  const docRef = await getDoc(doc(db, "users", uid));

  if (!docRef.exists()) return false;

  const userType = docRef.data().type;

  return { uid, email, phone_number, picture, userType };
}
