import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className={styles.main}>
			<h1 className="font-bold bg-red-400">Hello world</h1>
		</main>
	);
}
