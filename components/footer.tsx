import Link from "next/link";

export default function Footer() {
	return (
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
	);
}
