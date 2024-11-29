import Link from "next/link";
import Image from "next/image";

export function HeaderLogo() {
  return (
    <Link href="/">
      <div className="items-center hidden lg:flex">
        <Image src="/swimming.svg" alt="logo" width={36} height={36} />
        <p className="font-semibold text-white text-2xl ml-2.5">
          Swimming Ranklist
        </p>
      </div>
    </Link>
  );
}