// hooks/useChangeLanguage.ts
"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";

export function useChangeLanguage() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const changeLanguage = (newLocale: string) => {
    if (newLocale !== currentLocale) {
 
      router.push(`/${newLocale}${pathname.replace(`/${currentLocale}`, "")}`);
    }
  };

  return { changeLanguage, currentLocale };
}
