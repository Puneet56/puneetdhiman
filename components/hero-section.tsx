const HeroSection = () => {
	return (
		<div className="flex items-center justify-around p-4">
			<div className="flex flex-col gap-4">
				<h1 className="text-7xl font-medium">Hey!</h1>
				<h2 className="text-5xl">I am Puneet</h2>
				<h2 className="text-4xl">Tech Enthusiast!</h2>
				<h2 className="text-4xl">Love building things!</h2>
			</div>
			<div className="flex items-center justify-center h-96 aspect-square">
				<div className="w-full h-full rounded-full border-2 border-solid border-gray-100"></div>
			</div>
		</div>
	);
};

export default HeroSection;
