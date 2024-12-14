import Link from "next/link";

export default function Footer() {
	return (
		<footer>
			<nav aria-label="Legal Links">
				<ul className="flex flex-col md:flex-row md:gap-6">
					<li>
						<Link href="/privacy-policy">Privacy Policy</Link>
					</li>
					<li>
						<Link href="/legal-notice">Legal Notice</Link>
					</li>
				</ul>
			</nav>
		</footer>
	);
}
