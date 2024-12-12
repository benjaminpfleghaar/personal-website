import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
	return (
		<footer>
			<nav>
				<ul className={styles.list}>
					<li>
						<Link href="/" className={styles.link} title="Go to Privacy Policy">
							Privacy Policy
						</Link>
					</li>
					<li>
						<Link href="/" className={styles.link} title="Go to Legal Notice">
							Legal Notice
						</Link>
					</li>
				</ul>
			</nav>
		</footer>
	);
}
