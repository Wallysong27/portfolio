import StarsCanvas from "@/components/main/StarBackground";
import "./globals.css";
import { Ubuntu } from "next/font/google";
// import Navbar from "@/components/Navbar/Example";

export const metadata = {
  title: "Wallyson Araujo",
  description: "Wallyson's portfolio",
};

const ubuntu = Ubuntu({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${ubuntu.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        {/* <Navbar /> */}
        <StarsCanvas />
        {children}
      </body>
    </html>
  );
}
