import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex flex-col gap-8 sm:min-h-[calc(100dvh-6rem)] sm:justify-between">
			<header>
				<h1 className="text-2xl text-darkgray dark:text-lightgray">404</h1>
				<p className="text-2xl">This page could not be found.</p>
			</header>
			<footer>
				<nav aria-label="Legal Links">
					<ul className="flex flex-col sm:flex-row sm:gap-6">
						<li>
							<Link href="/" className="link">
								Home
							</Link>
						</li>
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
