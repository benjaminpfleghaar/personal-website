import Link from "next/link";
import { Metadata } from "next";
import styles from "@/styles/legal.module.css";

export const metadata: Metadata = {
	title: "Legal Notice - Benjamin Pfleghaar",
};

export default function LegalNotice() {
	return (
		<main className={styles.main}>
			<header>
				<Link href="/">Home</Link>
				<h1>Legal Notice</h1>
			</header>
			<section className={styles.section}>
				<p>
					Benjamin Pfleghaar
					<br />
					Wildermuthstra&szlig;e 1<br />
					74189 Weinsberg
				</p>
				<h2>Kontakt</h2>
				<p>
					Telefon: +49 (0) 152 27630824
					<br />
					E-Mail: info@benjaminpfleghaar.com
				</p>
				<h2>Umsatzsteuer-ID</h2>
				<p>
					Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a Umsatzsteuergesetz:
					<br />
					DE266651766
				</p>
				<h2>Angaben zur Berufs&shy;haftpflicht&shy;versicherung</h2>
				<p>
					Name und Sitz des Versicherers:
					<br />
					Beispiel Versicherung AG
					<br />
					Musterweg 10
					<br />
					90210 Musterstadt
				</p>
				<p>
					Geltungsraum der Versicherung:
					<br />
					Deutschland
				</p>
				<h2>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h2>
				<p>Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
				<p>Quelle: https://www.e-recht24.de</p>
			</section>
		</main>
	);
}
