import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Layout } from "../modules/Layout";
import { AppProvider } from "../core/context/app-provider";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Mite-Kure",
  description: "",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
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
