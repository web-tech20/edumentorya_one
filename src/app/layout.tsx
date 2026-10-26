import { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/ui/AppShell";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

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
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`} data-theme="light" suppressHydrationWarning>
      <body className="overflow-x-hidden bg-surface-canvas text-petrol selection:bg-primary/10">
        <ThemeProvider>
          <AppShell>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
