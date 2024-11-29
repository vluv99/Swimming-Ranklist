import { ReactNode, Suspense } from "react";
import { Header } from "@/components/header";

type Props = {
  children: ReactNode;
};

export function MainLayout({ children }: Props) {
  return (
    <>
      <Suspense>
        <Header />
        <main className="px-3 lg:px-14">{children}</main>
      </Suspense>
    </>
  );
}

export default MainLayout;
