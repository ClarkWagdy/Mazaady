import { NextIntlClientProvider, Locale, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import Header from "../../../components/Header/Header";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  // if (!hasLocale(routing.locales, locale)) {
  //   notFound();
  // }

 let messages;
 try {
   messages = (await import(`../../../public/locales/${locale}/common.json`))
     .default;
 } catch (error) {
   notFound();
 } 

  return (
    <html lang={locale}>
      <Header />
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
