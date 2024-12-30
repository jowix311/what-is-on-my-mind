"use server";

import { cookies } from "next/headers";
import { COOKIE_NAME } from "./some-cookies.types";

export const generateServerSideCookie = async () => {
  const cookieStore = await cookies();

  cookieStore.set({
    name: COOKIE_NAME,
    value: "Generated Server Side Cookie",
    httpOnly: true,
    path: "/",
    maxAge: 24 * 60 * 60, // 1 day
  });
};

export const generateSampleSessionCookie = async () => {
  const cookieStore = await cookies();

  cookieStore.set({
    name: "my-app_session",
    value: "Generated Session Cookie",
    httpOnly: true,
    path: "/",
    maxAge: undefined,
  });
};

export const getServerSideCookie = async () => {
  const cookieStore = await cookies();
  return cookieStore.get(COOKIE_NAME)?.value;
};
