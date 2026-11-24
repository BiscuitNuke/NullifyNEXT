import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL("https://nullify.one"),
    title: "Nullify.one",
    description: "A research project on using machine learning to spot bad traffic on small networks. Not a company. No product yet.",
    icons: { icon: "/favicon-64.png", apple: "/apple-touch-icon.png" },
};

export const viewport: Viewport = { themeColor: "#ffffff", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
