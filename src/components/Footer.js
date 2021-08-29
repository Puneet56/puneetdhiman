import SocialLinks from './SocialLinks';

const Footer = () => {
	return (
		<>
			<footer className=''>
				<div className='container flex items-center justify-center mx-auto p-8'>
					<p className='text-xl md:text-3xl font-normal text-gray-400'>
						Say Hi!-
					</p>
					<SocialLinks size='w-8 h-8' />
				</div>
			</footer>
		</>
	);
};

export default Footer;
