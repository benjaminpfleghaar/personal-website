import Link from "next/link";
import Engine from "@/components/Engine";

export default function Home() {
	return (
		<div className="flex flex-col gap-2 md:min-h-[calc(100dvh-96px)] md:justify-between">
			<header>
				<h1 className="text-2xl text-darkgray dark:text-lightgray">Benjamin Pfleghaar.</h1>
				<p className="text-2xl">German based Web Developer with a strong background in UX Design. Open to new projects starting January 2025.</p>
			</header>
			<main>
				<Engine />
			</main>
			<footer>
				<nav aria-label="Legal Links">
					<ul className="flex flex-col md:flex-row md:gap-6">
						<li>
							<Link href="/privacy-policy" className="text-darkgray hover:text-foreground dark:text-lightgray dark:hover:text-background">
								Privacy Policy
							</Link>
						</li>
						<li>
							<Link href="/legal-notice" className="text-darkgray hover:text-foreground dark:text-lightgray dark:hover:text-background">
								Legal Notice
							</Link>
						</li>
					</ul>
				</nav>
			</footer>
		</div>
	);
}
