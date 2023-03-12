import Image from 'next/image';
import { useEffect, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleClose = () => {
			if (menuOpen) {
				setMenuOpen(false);
			}
		};

		const listner = window.addEventListener('resize', handleClose);

		return () => {
			window.removeEventListener('resize', handleClose);
		};
	}, [menuOpen]);

	const handleMenuClick = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<header className="fade-in z-20 flex items-center justify-between py-4 text-white">
			<a
				href="/"
				className="font-text flex gap-2 px-12 text-xl font-light sm:text-2xl"
			>
				<Image
					alt="logo"
					src="https://assets.website-files.com/6319f69c5ef0f35ae3db6df0/6319f90a93c7120caa5653b3_Logo%20White.svg"
					width={30}
					height={30}
				/>
				Puneet Dhiman
			</a>
			<ul className="item font-code hidden justify-evenly gap-4 px-12 text-lg sm:flex">
				<MenuList />
			</ul>
			<button className="mr-12 text-3xl sm:hidden" onClick={handleMenuClick}>
				<RxHamburgerMenu />
			</button>
			<div
				onClick={handleMenuClick}
				className={`animate-slide-down ${
					menuOpen ? 'h-48' : 'h-0'
				} absolute top-16 z-10 flex w-full transform items-center justify-center bg-neutral-800 transition-all`}
			>
				{menuOpen && (
					<ul className="font-code fade-in relative z-10 flex flex-col justify-evenly gap-4 text-lg">
						<MenuList />
					</ul>
				)}
			</div>
		</header>
	);
};

const MenuList = () => {
	return (
		<>
			<li>
				<a href="#">Work</a>
			</li>
			<li>
				<a href="#">About</a>
			</li>
			<li>
				<a href="#">Blog</a>
			</li>
			<li>
				<a href="#">Contact</a>
			</li>
		</>
	);
};

export default Header;
