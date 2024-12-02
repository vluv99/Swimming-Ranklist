"use client";
import { dark } from "@clerk/themes";
import { SignIn, SignUp, UserButton } from "@clerk/nextjs";
import { useIsDarkTheme } from "@/providers/themeProvider";

export function ThemedUserButton() {
  const { isDarkTheme } = useIsDarkTheme();

  return (
    <UserButton
      appearance={{
        baseTheme: isDarkTheme ? dark : undefined,
      }}
    />
  );
}

export function ThemedSignUp({ path }: { path: string | undefined }) {
  const { isDarkTheme } = useIsDarkTheme();

  return (
    <SignUp
      path={path}
      appearance={{
        baseTheme: isDarkTheme ? dark : undefined,
      }}
    />
  );
}

export function ThemedSignIn({ path }: { path: string | undefined }) {
  const { isDarkTheme } = useIsDarkTheme();

  return (
    <SignIn
      path={path}
      appearance={{
        baseTheme: isDarkTheme ? dark : undefined,
      }}
    />
  );
}
