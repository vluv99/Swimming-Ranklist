"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useState } from "react";

export function ThemeSwitcher() {
  const [isDarkMode, setDarkMode] = useState<boolean>(false);

  const classes = "size-6 text-white";
  return (
    <div>
      {!isDarkMode || <SunIcon className={classes} />}
      {isDarkMode || <MoonIcon className={classes} />}
    </div>
  );
}
