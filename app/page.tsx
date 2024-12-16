import TextLink from "@/components/TextLink";
import MatterEngine from "@/components/MatterEngine";

export default function Home() {
	return (
		<div className="flex flex-col gap-4 md:min-h-[calc(100dvh-6rem)] md:justify-between">
			<header>
				<h1 className="text-2xl text-darkgray dark:text-lightgray">Benjamin Pfleghaar.</h1>
				<p className="text-2xl">Web Developer with a strong back&shy;ground in UX Design. Open to new projects starting January 2025.</p>
			</header>
			<main>
				<MatterEngine />
			</main>
			<footer>
				<nav aria-label="Legal Links">
					<ul className="flex flex-col md:flex-row md:gap-6">
						<li>
							<TextLink href="/privacy-policy">Privacy Policy</TextLink>
						</li>
						<li>
							<TextLink href="/legal-notice">Legal Notice</TextLink>
						</li>
					</ul>
				</nav>
			</footer>
		</div>
	);
}
