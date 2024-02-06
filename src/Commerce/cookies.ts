"use server"

import {cookies} from "next/headers";

const TOKEN_COOKIE_NAME = "clToken"

export async function getTokenFromCookies() {
  const hasToken = cookies().has(TOKEN_COOKIE_NAME)
  if (hasToken) {
    return cookies().get(TOKEN_COOKIE_NAME)
  }

  return undefined
}

export async function setTokenInCookies(accessToken: string, expires: Date) {
  cookies().set(TOKEN_COOKIE_NAME, accessToken, {
    expires
  })
}