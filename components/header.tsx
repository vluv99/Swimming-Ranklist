import { HeaderLogo } from "@/components/header-logo";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { ThemedUserButton } from "@/components/clerk-themed-components";
//import { LanguageSelect } from "@/components/language-select";

export function Header() {
  return (
    <header className="bg-gradient-to-b from-blue-700 to-blue-500 px-4 py-8 lg:px-14 pb-36 dark:from-slate-700 dark:to-slate-900">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full flex items-center justify-between mb-14">
          <div className="flex items-center lg:gap-x-16">
            <HeaderLogo />
          </div>
          <div className="flex justify-end items-center gap-x-2 lg:gap-x-4">
            {/*<LanguageSelect />*/}
            <ThemeSwitcher />
            <ClerkLoaded>
              <ThemedUserButton />
            </ClerkLoaded>
            <ClerkLoading>
              <Loader2 className="size-8 animate-spin text-slate-400" />
            </ClerkLoading>
          </div>
        </div>
      </div>
    </header>
  );
}
