import CustomProvider from "./CustomProvider";
import Provider from "./Provider";
import "./globals.css";
import { Roboto } from "next/font/google"; // Import Roboto

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] }); // Configure Roboto font

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
      <body className={roboto.className}>
        {" "}
        {/* Use roboto class */}
        <Provider>
          <CustomProvider>{children}</CustomProvider>
        </Provider>
      </body>
    </html>
  );
}
