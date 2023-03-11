import SlideShow from './SlideShow';

const HeroSection = () => {
	return (
		<div className="relative flex min-h-screen flex-col items-center justify-center overflow-x-hidden md:flex-row">
			<div className="my-flip absolute right-0 -top-0">
				<img src={'/assets/svg-cropped.png'} alt="blob"></img>
			</div>
			<div className="relative mt-10 flex h-5/6 w-full flex-col items-start justify-center md:mt-0">
				<p className="ml-8 mt-12 text-3xl text-gray-100 sm:text-4xl md:mx-10 md:mt-28 md:text-5xl">
					Hey,
				</p>
				<p className="ml-8 mb-1.5 text-5xl text-white sm:text-6xl md:mx-10 md:text-7xl">
					I'm Puneet
				</p>
				<p className="m-1.5 ml-8 text-xl text-gray-100 sm:text-2xl md:mx-10 md:text-3xl">
					Tech Enthusiast
				</p>
				<p className="m-1.5 ml-8 text-xl text-gray-100 sm:text-2xl md:mx-10 md:text-3xl">
					Love Building Things
				</p>
				<div
					className="min-h-4 mt-8 ml-10 flex h-16 w-36 transform cursor-pointer items-center justify-center
													rounded-full bg-gradient-to-tr from-blue-600 to-pink-700 p-1 shadow-md 
													transition hover:scale-90 md:h-20 md:w-48 md:p-1.5"
				>
					<a
						href="https://www.linkedin.com/in/puneet-dhiman/"
						target="_blank"
						rel="noreferrer"
						className="flex h-full w-full items-center justify-center rounded-full bg-mycolor text-lg font-bold text-white"
					>
						Connect
					</a>
				</div>
			</div>
			<SlideShow />
		</div>
	);
};

export default HeroSection;
