import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
	return (
		<footer>
			<nav aria-label="Legal Links">
				<ul className={styles.list}>
					<li>
						<Link href="/" className={styles.link}>
							Privacy Policy
						</Link>
					</li>
					<li>
						<Link href="/" className={styles.link}>
							Legal Notice
						</Link>
					</li>
				</ul>
			</nav>
		</footer>
	);
}
