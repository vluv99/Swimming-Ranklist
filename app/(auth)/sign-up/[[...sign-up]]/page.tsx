import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import { ThemedSignUp } from "@/components/clerk-themed-components";

export default function SignUpPage() {
  return (
    <>
      <ClerkLoaded>
        <ThemedSignUp path="/sign-up" />
      </ClerkLoaded>
      <ClerkLoading>
        <Loader2 className="animate-spin text-muted-foreground" />
      </ClerkLoading>
    </>
  );
}
