import facebook from '../assets/facebook.svg';
import github from '../assets/github.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';

const SocialLinks = (props) => {
	let data = [
		{ name: facebook, link: 'https://www.facebook.com/puneet.dhiman.127/' },
		{ name: github, link: 'https://github.com/Puneet56' },
		{ name: instagram, link: 'https://www.instagram.com/puneet.dhiman.127/' },
		{
			name: linkedin,
			link: 'https://www.linkedin.com/in/puneet-dhiman-9b29a0175/',
		},
	];

	return (
		<div
			className={`flex flex-row items-center justify-around w-56 h-12 ${props.styles} `}
		>
			{data.map((element) => (
				<a
					href={element.link}
					target='_blank'
					rel='noreferrer'
					className='transform transition-all hover:scale-125'
				>
					<img
						className={`${props.size}`}
						src={element.name}
						alt={element.name}
					></img>
				</a>
			))}
		</div>
	);
};

export default SocialLinks;
