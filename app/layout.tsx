import CustomProvider from "./CustomProvider";
import Provider from "./Provider";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wave",
  description: "Wave CRM - Uptech",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <CustomProvider>{children}</CustomProvider>
        </Provider>
      </body>
    </html>
  );
}
