import blob from '../assets/svg-cropped.png';
import SlideShow from './SlideShow';
import resume from '../assets/PuneetdhimanResume.pdf';

const HeroSection = () => {
	return (
		<>
			<div className='min-h-screen w-screen overflow-x-hidden flex items-center justify-center flex-col md:flex-row -z-40'>
				<div className='absolute right-0 -top-0 my-flip'>
					<img src={blob} alt='blob'></img>
				</div>
				<div className='w-full h-5/6 flex justify-center items-start flex-col relative mt-10 md:mt-0'>
					<p className='ml-8 mt-12 md:mx-10 md:mt-28 text-gray-100 text-3xl md:text-5xl sm:text-4xl'>
						Hey,
					</p>
					<p className='ml-8 mb-1.5 md:mx-10 text-white text-5xl md:text-7xl sm:text-6xl'>
						I'm Puneet
					</p>
					<p className='m-1.5 ml-8 md:mx-10 text-gray-100 text-xl md:text-3xl sm:text-2xl'>
						Tech Enthusiast
					</p>
					<p className='m-1.5 ml-8 md:mx-10 text-gray-100 text-xl md:text-3xl sm:text-2xl'>
						Love Building Things
					</p>
					<div className='flex'>
						<div
							className='mt-8 ml-10 rounded-full
				 bg-gradient-to-tr from-blue-600 to-pink-700 min-h-4 h-16 w-36 md:h-20 md:w-48 flex items-center justify-center md:p-1.5 p-1 shadow-md transform transition hover:scale-90'
						>
							<a
								href='https://www.linkedin.com/in/puneet-dhiman-9b29a0175/'
								target='_blank'
								rel='noreferrer'
								className='text-white text-lg
						 font-bold bg-mycolor rounded-full w-full h-full flex items-center justify-center'
							>
								Connect
							</a>
						</div>
						<div
							className='mt-8 ml-10 rounded-full
				 bg-gradient-to-tr from-blue-600 to-pink-700 min-h-4 h-16 w-36 md:h-20 md:w-48 flex items-center justify-center md:p-1.5 p-1 shadow-md transform transition hover:scale-90'
						>
							<a
								href={resume}
								target='_blank'
								rel='noreferrer'
								className='text-white text-lg
						 font-bold bg-mycolor rounded-full w-full h-full flex items-center justify-center'
							>
								See Resume
							</a>
						</div>
					</div>
				</div>
				<SlideShow />
			</div>
		</>
	);
};

export default HeroSection;
