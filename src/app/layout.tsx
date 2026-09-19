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

export const metadata = {
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
      <body className="bg-surface-canvas text-petrol selection:bg-primary/10">
        <Sidebar />
        <div className="flex flex-col min-h-screen md:pl-[280px] transition-[padding] duration-300">
          <TopNav />
          <main className="flex-1 pt-24 pb-12">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
