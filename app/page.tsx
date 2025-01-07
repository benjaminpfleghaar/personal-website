import Link from "next/link";
import MatterEngine from "./engine";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function Home() {
	const getCurrentMonthAndYear = () => {
		const date = new Date();
		return `${months[(date.getMonth() + 1) % 12]} ${date.getFullYear()}`;
	};

	return (
		<div className="flex flex-col gap-4 sm:min-h-[calc(100dvh-6rem)] sm:justify-between">
			<header>
				<h1 className="text-2xl text-darkgray dark:text-lightgray">Benjamin Pfleghaar.</h1>
				<p className="text-2xl">Web Developer with a strong back&shy;ground in UX Design. Open to new pro&shy;jects starting {getCurrentMonthAndYear()}.</p>
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
