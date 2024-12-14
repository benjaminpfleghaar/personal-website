import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Engine from "@/components/Engine";
import styles from "@/styles/home.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			<Header />
			<Engine />
			<Footer />
		</main>
	);
}
