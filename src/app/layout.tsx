import { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/ui/Sidebar";
import { TopNav } from "@/components/ui/TopNav";

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
        <div className="flex-1 flex flex-col min-h-screen transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] md:pl-[var(--sidebar-width,280px)]">
          <TopNav />
          <main className="flex-1 pt-20 md:pt-24 pb-12 px-4 md:px-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
