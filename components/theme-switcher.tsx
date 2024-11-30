"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useState } from "react";
import { useIsDarkTheme } from "@/providers/themeProvider";
import { Button } from "@/components/ui/button";

export function ThemeSwitcher() {
  const { toggleColorMode, isDarkTheme } = useIsDarkTheme();

  const classes = "size-8 text-white";
  return (
    <div>
      <Button
        variant="ghost"
        size="icon"
        className="hover:bg-blue-400/10"
        onClick={toggleColorMode}
      >
        {!isDarkTheme || (
          <SunIcon className={classes} onClick={toggleColorMode} />
        )}
        {isDarkTheme || (
          <MoonIcon className={classes} onClick={toggleColorMode} />
        )}
      </Button>
    </div>
  );
}
