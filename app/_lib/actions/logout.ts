"use server";

import { cookies } from "next/headers";
import { auth } from "firebase-admin";

export async function logout() {
  const token = cookies().get("session")?.value;
  if(!token) {
    return true;
  }
  const decodedClaims = await auth().verifySessionCookie(token, true);
  await auth().revokeRefreshTokens(decodedClaims.uid);
  cookies().delete("session");

  return true;
}
