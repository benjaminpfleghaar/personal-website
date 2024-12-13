import styles from "./header.module.css";

export default function Header() {
	return (
		<header>
			<h1 className={styles.headline}>Benjamin Pfleghaar.</h1>
			<p className={styles.paragraph}>German based Web Developer with a strong background in UX Design. Currently open to new projects starting January 2025.</p>
		</header>
	);
}
