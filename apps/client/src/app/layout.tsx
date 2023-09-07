import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Layout } from "../modules/Layout";
import { AppProvider } from "../core/context/app-provider";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Mite-Kure",
  description: "ああぁぁぁぁぁぁぁぁ　見てくれ！",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <link
        href="favicon/apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        href="favicon/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="favicon/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      <link href="favicon/site.webmanifest" rel="manifest" />
      <meta content="#da532c" name="msapplication-TileColor" />
      <meta content="#ffffff" name="theme-color" />
      <body>
        <Analytics />
        <Providers>
          <AppProvider>
            <Layout>{children}</Layout>
          </AppProvider>
        </Providers>
      </body>
    </html>
  );
}
