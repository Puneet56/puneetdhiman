const ProjectItem = (props) => {
	return (
		<div className='card-crystal text-white flex flex-col items-center justify-center m-4 mx-auto transform hover:scale-105 transition-all w-11/12'>
			<p className='text-xl font-bold p-4 pt-0 mx-auto  hover:text-indigo-800 cursor-pointer'>
				<a href={props.data.link} target='_blank' rel='noreferrer'>
					{props.data.name}
				</a>
			</p>
			<p className='p-4 pt-0'>{props.data.description}</p>
			<div className='flex flex-row justify-center items-center'>
				<a href={props.data.link} className='btn'>
					Open
				</a>
				<a href={props.data.code} className='btn'>
					View Code
				</a>
			</div>
		</div>
	);
};

export default ProjectItem;
