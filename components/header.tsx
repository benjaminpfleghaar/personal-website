import styles from "./header.module.css";

export default function Header() {
	return (
		<header>
			<h1 className={styles.headline}>Benjamin Pfleghaar.</h1>
			<h2 className={styles.subline}>
				German based Web Developer with a strong background in UX Design.
				<br />
				Currently open to new projects starting January 2025.
			</h2>
		</header>
	);
}
