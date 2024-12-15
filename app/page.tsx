import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Engine from "@/components/Engine";

export default function Home() {
	return (
		<main className="flex min-h-dvh max-w-screen-sm flex-col gap-3 p-8 md:justify-between md:p-12">
			<Header />
			<Engine />
			<Footer />
		</main>
	);
}
