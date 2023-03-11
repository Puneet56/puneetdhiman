import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SocialLinks from '@/components/SocialLinks';

function App() {
	return (
		<div className="relative flex flex-col items-center justify-center overflow-x-hidden">
			<SocialLinks iconSizeClass="w-6 h-6" className="absolute left-4 top-4" />
			<HeroSection />
			{/* <Projects /> */}
			<Footer />
		</div>
	);
}

export default App;
