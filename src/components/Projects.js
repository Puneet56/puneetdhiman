import ProjectItem from './ProjectItem';

const Projects = () => {
	let data = [
		{
			name: 'FireChat',
			description: [
				'Global Chat App',
				'User Login Functionality',
				'Realtime Chat Using Firebase Firestore',
			],
			link: 'https://puneet56-firechat.netlify.app/',
			code: 'https://github.com/Puneet56/FireChat',
			stack: ['react', 'firebase'],
		},
		{
			name: 'ToDo List App',
			description: [
				'Todo App to Store Tasks',
				'User Login Functionality',
				'Data Saved on Server',
			],
			link: 'https://puneet56-todo.netlify.app/',
			code: 'https://github.com/Puneet56/to-do-list',
			stack: ['react', 'express', 'neDB', 'REST'],
		},
		{
			name: 'Expense Manager',
			description: [
				'Simple App to manage expenses',
				'Firebase as Backend',
				'User Login functionality',
			],
			link: 'https://puneet56.github.io/expense-host/',
			code: 'https://github.com/Puneet56/expense-host',
			stack: ['react', 'firebase', 'REST'],
		},
	];

	return (
		<>
			<h1 className='mx-auto font-normal text-white text-6xl p-4 border-b-8 border-solid border-indigo-800 mb-3'>
				Projects
			</h1>
			<div className='flex flex-col justify-center items-center w-full md:grid md:grid-cols-2 md:grid-flow-row'>
				{data.map((project) => (
					<ProjectItem data={project} key={project.name} />
				))}
			</div>
		</>
	);
};

export default Projects;
