import "./globals.css";
import { Geist } from "next/font/google";
import { Metadata, Viewport } from "next";

const geistSans = Geist({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		template: "%s - Benjamin Pfleghaar",
		default: "Benjamin Pfleghaar",
	},
	description: "Web Developer with a strong background in UX Design",
	openGraph: {
		title: "Benjamin Pfleghaar",
		siteName: "Benjamin Pfleghaar",
	},
};

export const viewport: Viewport = {
	themeColor: "cornflowerblue",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body className={`${geistSans.className} antialiased`}>{children}</body>
		</html>
	);
}
