let data = [
	{
		name: 'Facebook',
		link: 'https://www.facebook.com/puneet.dhiman.127/',
		image: './assets/facebook.svg',
	},
	{
		name: 'Github',
		link: 'https://github.com/Puneet56',
		image: './assets/github.svg',
	},
	{
		name: 'Instagram',
		link: 'https://www.instagram.com/puneet.dhiman.127/',
		image: './assets/instagram.svg',
	},
	{
		name: 'Linkedin',
		link: 'https://www.linkedin.com/in/puneet-dhiman/',
		image: './assets/linkedin.svg',
	},
];

const SocialLinks = (props: { iconSizeClass?: string; className?: string }) => {
	return (
		<div
			className={`z-30 flex h-12 w-56 flex-row items-center justify-around ${props.className} `}
		>
			{data.map(element => (
				<a
					href={element.link}
					target="_blank"
					rel="noreferrer"
					key={element.name}
					className="transform transition-all hover:scale-125"
				>
					<img
						src={element.image}
						alt={element.name}
						className={props.iconSizeClass}
					/>
				</a>
			))}
		</div>
	);
};

export default SocialLinks;
