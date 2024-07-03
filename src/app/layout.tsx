import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "./Components/Header";
import { Toaster } from "react-hot-toast";
import Providers from "@/providers/tansatck-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en" data-theme="dark">
                <body className={inter.className}>
                    <Providers>
                        <Header />
                        {children}
                        <Toaster />
                    </Providers>
                </body>
            </html>
        </ClerkProvider>
    );
}
