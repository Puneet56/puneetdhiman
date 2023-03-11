import SocialLinks from './SocialLinks';

const Footer = () => {
	return (
		<>
			<footer className="">
				<div className="container mx-auto flex items-center justify-center p-8">
					<p className="text-xl font-normal text-gray-400 md:text-3xl">
						Say Hi!-
					</p>
					<SocialLinks iconSizeClass="w-8 h-8" />
				</div>
			</footer>
		</>
	);
};

export default Footer;
