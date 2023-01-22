import HeroSection from "@/components/hero-section";
import YourComponent from "@/components/p5-sketch";
import { Inter } from "@next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Puneet Dhiman</title>
				<meta name="description" content="Puneet Dhiman- Portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="bg-gray-700 text-white">
				<HeroSection />
				<YourComponent />
			</main>
		</>
	);
}