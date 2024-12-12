import styles from "./page.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Engine from "@/components/Engine";

export default function Home() {
	return (
		<>
			<main className={styles.main}>
				<Header />
				<Footer />
				<Engine />
			</main>
		</>
	);
}
