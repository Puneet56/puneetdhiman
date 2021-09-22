const ProjectItem = (props) => {
	return (
		<div className='relative card-crystal text-white min-h-50 flex flex-col items-center justify-start m-4 mx-auto transform hover:scale-105 transition-all w-11/12'>
			<p className='text-xl font-bold p-4 pt-0 mx-auto mt-4 hover:text-indigo-800 cursor-pointer'>
				<a href={props.data.link} target='_blank' rel='noreferrer'>
					{props.data.name}
				</a>
			</p>
			<div className='p-4 pt-0 text-center'>
				{props.data.description.map((item) => (
					<h3 key={item} className='text-center'>
						{item}
					</h3>
				))}
			</div>
			<div className='absolute bottom-20 flex flex-row justify-center items-center'>
				<a
					href={props.data.link}
					className='btn'
					target='_blank'
					rel='noreferrer'
				>
					Open
				</a>
				<a
					href={props.data.code}
					className='btn'
					target='_blank'
					rel='noreferrer'
				>
					View Code
				</a>
			</div>
			<div className='absolute bottom-5 mt-4 w-11/12 flex items-center justify-center '>
				{props.data.stack.map((item) => (
					<h3
						key={item}
						className='bg-opacity-30 bg-gray-500 p-1 m-2 rounded-full'
					>
						#{item}
					</h3>
				))}
			</div>
		</div>
	);
};

export default ProjectItem;
