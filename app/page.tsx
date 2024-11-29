import { ClerkLoaded, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <ClerkLoaded>
        <UserButton />
      </ClerkLoaded>
    </div>
  );
}
