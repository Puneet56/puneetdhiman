let text = ['D', 'E', 'V', 'E', 'L', 'O', 'P', 'E', 'R'];

const HeroSection = () => {
	return (
		<div className="mt-16 flex items-center justify-center">
			<span className="text-3xl font-bold text-white md:text-7xl">{'<'}</span>
			<span className="text-3xl font-bold text-white md:text-7xl">{'/'}</span>
			{text.map((letter, index) => (
				<span
					key={index}
					className="animate-pop text-4xl text-white md:text-7xl"
					style={{
						animationDelay: `${index * 0.07}s`,
					}}
				>
					{letter}
				</span>
			))}
			<span className="text-3xl font-bold text-white md:text-7xl">{'>'}</span>
		</div>
	);
};

export default HeroSection;
