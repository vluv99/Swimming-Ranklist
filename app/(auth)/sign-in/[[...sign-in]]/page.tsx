import { Loader2 } from "lucide-react";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { ThemedSignIn } from "@/components/clerk-themed-components";

export default function SignInPage() {
  return (
    <>
      <ClerkLoaded>
        <ThemedSignIn path="/sign-in" />
      </ClerkLoaded>
      <ClerkLoading>
        <Loader2 className="animate-spin text-muted-foreground" />
      </ClerkLoading>
    </>
  );
}
