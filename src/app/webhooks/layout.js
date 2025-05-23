import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/webhooks/Header/Header";
import { NavBar } from "@/components/webhooks/NavBar/NavBar";
import { Footer } from "@/components/webhooks/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "API Selection",
  description: "Interface para gerenciamento de todas as APIs do LP",
  icons: {
    icon: "/images/favicon.ico"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} h-screen flex flex-col antialiased`}>
        <Header />
        <NavBar />
        <main className="h-auto flex flex-grow justify-center bg-white font-verdana">
        <section className="flex flex-col w-full max-w-4/5">
            {children}
          </section>
        </main>
        <Footer />
      </body>
    </html>
  );
}
