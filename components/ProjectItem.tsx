const ProjectItem = (props: {
	data: {
		name: string;
		description: string[];
		link: string;
		code: string;
		stack: string[];
	};
}) => {
	return (
		<div className="card-crystal relative m-4 mx-auto flex w-96 transform flex-col items-center justify-start text-white transition-all hover:scale-105 md:w-2/5">
			<p className="mx-auto mt-2 cursor-pointer px-4 pb-2 pt-0 text-xl font-bold hover:text-indigo-800">
				<a href={props.data.link} target="_blank" rel="noreferrer">
					{props.data.name}
				</a>
			</p>
			<div className="p-2 pt-0 text-center">
				{props.data.description.map(item => (
					<h3 key={item} className="text-center">
						{item}
					</h3>
				))}
			</div>
			<div className="absolute bottom-20 flex flex-row items-center justify-center">
				<a
					href={props.data.link}
					className="btn"
					target="_blank"
					rel="noreferrer"
				>
					Open
				</a>
				<a
					href={props.data.code}
					className="btn"
					target="_blank"
					rel="noreferrer"
				>
					View Code
				</a>
			</div>
			<div className="absolute bottom-5 mt-4 flex w-11/12 items-center justify-center ">
				{props.data.stack.map(item => (
					<h3
						key={item}
						className="m-2 rounded-full bg-gray-500 bg-opacity-30 p-1"
					>
						#{item}
					</h3>
				))}
			</div>
		</div>
	);
};

export default ProjectItem;
