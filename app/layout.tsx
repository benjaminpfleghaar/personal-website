import "@/styles/globals.css";
import { Metadata } from "next";
import { Geist } from "next/font/google";

const geistSans = Geist({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Benjamin Pfleghaar",
	description: "Web Developer with a strong background in UX Design",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body className={geistSans.className}>{children}</body>
		</html>
	);
}
