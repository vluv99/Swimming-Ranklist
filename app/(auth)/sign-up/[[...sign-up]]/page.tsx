import { ClerkLoaded, ClerkLoading, SignUp } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import { AuthLayout } from "@/app/(auth)/_components/auth-layout";

export default function SignUpPage() {
  return (
    // <AuthLayout>
    <>
      <ClerkLoaded>
        <SignUp path="/sign-up" />
      </ClerkLoaded>
      <ClerkLoading>
        <Loader2 className="animate-spin text-muted-foreground" />
      </ClerkLoading>
    </>
    // </AuthLayout>
  );
}
