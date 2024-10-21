import { Inter } from "next/font/google";

import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "portfolio",
  description: "Front-end Developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body
        className={`antialiased bg-primarylight dark:bg-primary`}
        id="parent"
      >
        <div
          id="up"
          className="main-container relative z-10 overflow-hidden bg-seconderylight dark:bg-secondery border-2 border-borderlight dark:border-border   mx-auto px-4 sm:px-16  "
        >
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
