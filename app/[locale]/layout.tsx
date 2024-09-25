import type { Metadata } from "next";

import "./../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "@/components/theme-provider";
import { Alegreya } from "next/font/google";

const alegreya = Alegreya({ subsets: ["latin"], variable: "--font-alegreya" });

export const metadata: Metadata = {
  title: "Paula Sánchez Mayor Collages | Art Gallery and Shop",
  description:
    "Discover Paula Sánchez Mayor's original collages in her online gallery. Shop unique, handcrafted art and explore exclusive pieces in this contemporary art store. Worldwide shipping available.",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={alegreya.variable}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
