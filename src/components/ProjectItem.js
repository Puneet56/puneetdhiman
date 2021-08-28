const ProjectItem = (props) => {
	return (
		<div className='card-crystal text-white flex flex-col items-center justify-center m-6 transform hover:scale-105 transition-all w-11/12'>
			<p className='text-xl font-bold p-4 pt-0 mx-auto hover:text-purple-800 cursor-pointer'>
				<a href={props.data.link} target='_blank' rel='noreferrer'>
					{props.data.name}
				</a>
			</p>
			<p className='p-4 pt-0'>{props.data.description}</p>
			<div className='flex flex-row justify-center items-center'>
				<a href={props.data.link} className='mx-3'>
					Open
				</a>
				<a href={props.data.code} className='px-3 '>
					View Code
				</a>
			</div>
		</div>
	);
};

export default ProjectItem;
