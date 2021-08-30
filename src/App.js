import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import SocialLinks from './components/SocialLinks';

function App() {
	return (
		<div className='flex flex-col items-center justify-center overflow-x-hidden relative'>
			<SocialLinks size='w-6 h-6' styles='absolute left-4 top-4' />
			<HeroSection />
			<Projects />
			<Footer />
		</div>
	);
}

export default App;
