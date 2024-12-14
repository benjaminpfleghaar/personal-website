import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Engine from "@/components/Engine";

export default function Home() {
	return (
		<main className="flex flex-col md:justify-between gap-3 max-w-screen-sm min-h-dvh p-8 md:p-12">
			<Header />
			<Engine />
			<Footer />
		</main>
	);
}
