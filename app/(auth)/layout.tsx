import { ReactNode } from "react";
import Image from "next/image";

type Props = {
  children: ReactNode;
};

function AuthLayout({ children }: Props): ReactNode {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl text-[#2E2A47]">Welcome back!</h1>
          <p className="text-base text-[#7E8CA0] w-3/4 justify-self-center">
            Log in or Create an account to check out the Hungarian Swimming
            Records between 2000 - 2024.
          </p>
          <div className="flex items-center justify-center mt-8">
            {children}
          </div>
        </div>
      </div>
      <div className="h-full bg-blue-600 hidden lg:flex items-center justify-center">
        <Image
          src="/swimming.svg"
          alt="logo"
          width={300}
          height={300}
          className="scale-x-[-1]"
        ></Image>
      </div>
    </div>
  );
}

export default AuthLayout;
