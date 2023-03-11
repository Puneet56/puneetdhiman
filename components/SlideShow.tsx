import { useEffect, useState } from 'react';

const images = [
	{ name: 'reactLogo', animation: 'animate-spin', url: '/assets/react.png' },
	{ name: 'htmlLogo', animation: 'animate-bounce', url: '/assets/html.png' },
	{ name: 'p5Logo', animation: 'animate-pulse', url: '/assets/p5js.svg' },
	{
		name: 'firebase',
		animation: 'animate-pulse',
		url: '/assets/firebase.png',
	},
];

const SlideShow = () => {
	const [image, setImage] = useState(images[0]);

	useEffect(() => {
		const timer = setInterval(() => {
			setImage(images[Math.floor(Math.random() * images.length)]);
		}, 5000);
		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<>
			<div className="md:h-100 fade-in pointer-events-none relative m-4 flex h-80 w-80 flex-row items-center justify-center opacity-100 md:w-full">
				<img
					src={image.url}
					alt={image.name}
					className={`w-100 h-100 pointer-events-none p-8 transition-all md:h-96 md:w-96 ${image.animation}`}
				></img>
			</div>
		</>
	);
};

export default SlideShow;
