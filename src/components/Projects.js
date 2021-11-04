import ProjectItem from './ProjectItem';

const Projects = () => {
	let data = [
		{
			name: 'Social-Snap',
			description: [
				'A Social Media App',
				'User Login Functionality',
				'Create and See Posts with image upload also',
				'Follow, Unfollow User. Upload Profile Pictures',
				'Backend using Express & MongoDB',
			],
			link: 'https://socialsnap.netlify.app/',
			code: 'https://github.com/Puneet56/social-snap-full',
			stack: ['MERN', 'JWT'],
		},
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
			name: "CRUD'dle",
			description: [
				"App to Fulfill all your CRUD'dling desires",
				'Create, Read, Update and Delete Demonstartion',
				'Animations using Framer-Motion',
			],
			link: 'https://cruddle.netlify.app/',
			code: 'https://github.com/Puneet56/curd-dle',
			stack: ['react', 'framer-motion', 'CRUD'],
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
			<div className='flex flex-row flex-wrap justify-center items-center w-full'>
				{data.map((project) => (
					<ProjectItem data={project} key={project.name} />
				))}
			</div>
		</>
	);
};

export default Projects;
