import { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/ui/Sidebar";
import { TopNav } from "@/components/ui/TopNav";
import { MobileTabBar } from "@/components/ui/MobileTabBar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "EDUMENTORYA ONE — Votre Mentor IA Académique",
  description: "Accompagnement, correction d'épreuves et archives universitaires.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-surface-canvas text-petrol selection:bg-primary/10 flex overflow-x-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col min-h-screen md:pl-[280px] transition-all duration-300">
          <TopNav />
          <main className="flex-1 pt-20 md:pt-24 pb-24 md:pb-12 px-4 md:px-0">
            {children}
          </main>
          <MobileTabBar />
        </div>
      </body>
    </html>
  );
}
