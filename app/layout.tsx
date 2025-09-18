import "./globals.css";
import { Metadata } from "next";
import { Geist } from "next/font/google";

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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body className={`${geistSans.className} antialiased`}>{children}</body>
		</html>
	);
}
