import reactLogo from '../assets/react.png';
import htmlLogo from '../assets/html.png';
import p5Logo from '../assets/p5js.svg';

import { useState, useEffect, useRef } from 'react';

const SlideShow = () => {
	const images = useRef([
		{ name: reactLogo, animation: 'animate-spin' },
		{ name: htmlLogo, animation: 'animate-bounce' },
		{ name: p5Logo, animation: 'animate-pulse' },
	]);
	const [image, setImage] = useState(
		images.current[Math.floor(Math.random() * images.current.length)]
	);

	useEffect(() => {
		const timer = setInterval(() => {
			setImage(
				images.current[Math.floor(Math.random() * images.current.length)]
			);
		}, 5000);
		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div className='flex w-full h-100 flex-row items-center justify-center fade-in opacity-100 m-4'>
			<img
				src={image.name}
				alt='logo'
				className={`${image.animation} p-8 w-3/4 md:h-96 md:w-96 transition-all `}
			></img>
		</div>
	);
};

export default SlideShow;
