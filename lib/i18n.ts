"use client";

import { useTranslations } from "next-intl";

export function useLocale() {
  return useTranslations();
}
