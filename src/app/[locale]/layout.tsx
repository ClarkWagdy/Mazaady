import { NextIntlClientProvider} from "next-intl";
import { notFound } from "next/navigation";
import "../globals.css";
import Header from "../../../components/Header/Header";
import { Nunito } from "next/font/google";
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "700"], // Adjust as needed
});
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
  } catch (error: unknown) {
    console.error(error);
    notFound();
  }

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={"bg-[#F6F4F5]  " + nunito.className}>
          <Header />
          {children}
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
