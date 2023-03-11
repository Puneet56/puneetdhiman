import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ProjectsList from '@/components/ProjectsList';
import SocialLinks from '@/components/SocialLinks';

function App() {
	return (
		<>
			<SocialLinks iconSizeClass="w-6 h-6" className="absolute left-4 top-4" />
			<HeroSection />
			<ProjectsList />
			<Footer />
		</>
	);
}

export default App;
