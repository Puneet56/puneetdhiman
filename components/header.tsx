import tw from 'tailwind-styled-components';

const LinkItem = tw.li`hover:text-yellow-500 cursor-pointer
`;

const links = [
	{
		name: 'Work',
		href: '/work',
	},
	{
		name: 'Blog',
		href: '/blog',
	},
	{
		name: 'Projects',
		href: '/projects',
	},
	{
		name: 'Contact',
		href: '/contact',
	},
];

const Header = () => {
	return (
		<div className="flex items-center justify-around px-8 py-4">
			<h1 className="text-2xl font-normal">{'{ / }'} puneetdhiman.com</h1>
			<ul className="flex flex-row gap-8">
				{links.map(link => (
					<li className="cursor-pointer hover:text-yellow-400">{link.name}</li>
				))}
			</ul>
		</div>
	);
};

export default Header;
