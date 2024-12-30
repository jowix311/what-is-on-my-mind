"use client";

import { Button } from "../ui/button";
import {
  generateSampleSessionCookie,
  generateServerSideCookie,
} from "./some-cookies.actions";
import { COOKIE_NAME } from "./some-cookies.types";

const generateClientSideCookie = async () => {
  document.cookie =
    "my-app_clinet_side_message=Generated Client Side Cookie; path=/; max-age=3600"; // 1 hour
};

const getServersideCookie = () => {

  return document.cookie
    .split(";")
    .filter((item) => item.trim().startsWith(`${COOKIE_NAME}=`))[0]
    ?.split("=")[1];
};

export const SomeCookies = ({
  message = "No message",
}: {
  message?: string;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div>Messaage from cookie:{getServersideCookie() || "Got nothing!"}</div>
      <Button onClick={async () => await generateServerSideCookie()}>
        Generate Server Side Cookie
      </Button>
      <Button onClick={async () => await generateSampleSessionCookie()}>
        Generate Session Cookie
      </Button>
      <Button onClick={async () => await generateClientSideCookie()}>
        Generate Client Side Cookie
      </Button>
    </div>
  );
};
