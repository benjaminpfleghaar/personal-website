import Link from "next/link";
import styles from "@/styles/footer.module.css";

export default function Footer() {
	return (
		<footer>
			<nav aria-label="Legal Links">
				<ul className={styles.list}>
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
