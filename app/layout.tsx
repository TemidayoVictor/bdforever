import type { ReactNode } from "react";
import './globals.css'
import { Inter } from 'next/font/google'

interface RootLayoutProps {
    children: ReactNode;
}

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Temidayo & Olubunmi - Wedding Website',
    description: 'Join us as we celebrate our love story on June 13, 2026 in Akure, Ondo State',
    icons: {
        icon: "/img5.jpg",
    },
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
        <body className={inter.className}>{children}</body>
        </html>
    );
}