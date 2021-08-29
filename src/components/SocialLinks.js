import facebook from '../assets/facebook.svg';
import github from '../assets/github.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';

const SocialLinks = (props) => {
	let data = [
		{ name: facebook, link: '/' },
		{ name: github, link: '/' },
		{ name: instagram, link: '/' },
		{ name: linkedin, link: '/' },
	];

	return (
		<div
			className={`flex flex-row items-center justify-around w-56 h-12 ${props.styles} `}
		>
			{data.map((element) => (
				<a
					href={element.link}
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
