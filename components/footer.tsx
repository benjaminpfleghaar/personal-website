import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
	return (
		<footer>
			<nav>
				<ul className={styles.list}>
					<li>
						<Link href="/" className={styles.link} title="Legal Notice">
							Legal Notice
						</Link>
					</li>
					<li>
						<Link href="/" className={styles.link} title="Privacy Policy">
							Privacy Policy
						</Link>
					</li>
				</ul>
			</nav>
		</footer>
	);
}
