import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Legal Notice - Benjamin Pfleghaar",
};

export default function LegalNotice() {
	return (
		<>
			<header className="mb-4">
				<Link href="/" className="link">
					Home
				</Link>
				<h1>Legal Notice</h1>
			</header>
			<main className="flex flex-col gap-4">
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
				<h2>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h2>
				<p>Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
				<p>Quelle: https://www.e-recht24.de</p>
			</main>
		</>
	);
}
