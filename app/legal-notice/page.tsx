import Link from "next/link";
import { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
	title: "Legal Notice - Benjamin Pfleghaar",
};

export default function LegalNotice() {
	return (
		<main className={styles.main}>
			<header>
				<Link href="/" className={styles.link}>
					Home
				</Link>
				<h1 className={styles.headline}>Legal Notice</h1>
			</header>
			<section className={styles.section}>
				<p className={styles.paragraph}>
					Benjamin Pfleghaar
					<br />
					Wildermuthstra&szlig;e 1<br />
					74189 Weinsberg
				</p>
				<h2 className={styles.headline}>Kontakt</h2>
				<p className={styles.paragraph}>
					Telefon: +49 (0) 152 27630824
					<br />
					E-Mail: info@benjaminpfleghaar.com
				</p>
				<h2 className={styles.headline}>Umsatzsteuer-ID</h2>
				<p className={styles.paragraph}>
					Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a Umsatzsteuergesetz:
					<br />
					DE266651766
				</p>
				<h2 className={styles.headline}>Angaben zur Berufs&shy;haftpflicht&shy;versicherung</h2>
				<p className={styles.paragraph}>
					Name und Sitz des Versicherers:
					<br />
					Beispiel Versicherung AG
					<br />
					Musterweg 10
					<br />
					90210 Musterstadt
				</p>
				<p className={styles.paragraph}>
					Geltungsraum der Versicherung:
					<br />
					Deutschland
				</p>
				<h2 className={styles.headline}>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h2>
				<p className={styles.paragraph}>Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
				<p className={styles.paragraph}>Quelle: https://www.e-recht24.de</p>
			</section>
		</main>
	);
}
