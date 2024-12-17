import Link from "next/link";
import MatterEngine from "./engine";

export default function Home() {
	return (
		<div className="flex flex-col gap-4 sm:min-h-[calc(100dvh-6rem)] sm:justify-between">
			<header>
				<h1 className="text-2xl text-darkgray dark:text-lightgray">Benjamin Pfleghaar.</h1>
				<p className="text-2xl">Web Developer with a strong back&shy;ground in UX Design. Open to new pro&shy;jects starting January 2025.</p>
			</header>
			<main>
				<MatterEngine />
			</main>
			<footer>
				<nav aria-label="Legal Links">
					<ul className="flex flex-col sm:flex-row sm:gap-6">
						<li>
							<Link href="/privacy-policy" className="link">
								Privacy Policy
							</Link>
						</li>
						<li>
							<Link href="/legal-notice" className="link">
								Legal Notice
							</Link>
						</li>
					</ul>
				</nav>
			</footer>
		</div>
	);
}
