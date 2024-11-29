import { Loader2 } from "lucide-react";
import { ClerkLoaded, ClerkLoading, SignIn } from "@clerk/nextjs";
import { AuthLayout } from "@/app/(auth)/_components/auth-layout";

export default function SignInPage() {
  return (
    // <AuthLayout>
    <>
      <ClerkLoaded>
        <SignIn path="/sign-in" />
      </ClerkLoaded>
      <ClerkLoading>
        <Loader2 className="animate-spin text-muted-foreground" />
      </ClerkLoading>
    </>
    // </AuthLayout>
  );
}
