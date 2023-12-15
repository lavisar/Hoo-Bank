import React, { useEffect, useState } from 'react';

import styles from '../style'
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
	const [toggle, settoggle] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<nav
			className={`sm:px-16 px-6 w-full flex py-6 justify-between items-center fixed top-0 ${
				isScrolled ? 'z-10 backdrop-blur-md bg-black/30' : ''
			}`}
		>
			<img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

			<ul className="list-none sm:flex hidden justify-end items-center flex-1">
				{navLinks.map((item, index) => (
					<li
						key={item.id}
						className={`hover:text-secondary font-poppins font-normal cursor-pointer text-base text-white ${styles.hoverTranstion} ${
							index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
						}`}
					>
						<a href={`#${item.id}`}>{item.title}</a>
					</li>
				))}
			</ul>

			<div className="sm:hidden flex flex-1 justify-end items-center">
				<img
					src={toggle ? close : menu}
					alt="menu"
					className="w-[28px] h-[28px] object-contain"
					onClick={() => settoggle((prev) => !prev)}
				/>

				<div
					className={`${
						toggle ? 'flex' : 'hidden'
					} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
				>
					<ul className="list-none flex flex-col justify-end items-center flex-1">
						{navLinks.map((item, index) => (
							<li
								key={item.id}
								className={`font-poppins font-normal cursor-pointer text-base text-white ${
									index === navLinks.length - 1
										? 'mr-0'
										: 'mb-4'
								}`}
							>
								<a href={`#${item.id}`}>{item.title}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
