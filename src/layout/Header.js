import React from "react";
import { slide as Menu } from "react-burger-menu";
import menu from "../assets/icons/menu.png";
import { IoClose } from "react-icons/io5";

const Header = () => {
	const showSettings = (event) => {
		event.preventDefault();
	};
	return (
		<header className='bg-Main-Tint-1 w-full h-20 flex'>
			<nav className='md:hidden w-1/5 h-full center-items'>
				<button id='burger-menu-btn' type='button'>
					<Menu
						id='burger-menu'
						right
						customBurgerIcon={<img src={menu} />}
						customCrossIcon={<IoClose className='text-[24px]' />}
						width={"100%"}
						isOpen={false}
						className='bg-white mt-2'
						itemListElement='a'
					>
						<a id='home' className='menu-item' href='/'>
							Home
						</a>
						<a id='about' className='menu-item' href='/about'>
							About
						</a>
						<a id='contact' className='menu-item' href='/contact'>
							Contact
						</a>
						<a onClick={() => showSettings} className='menu-item--small' href=''>
							Settings
						</a>
					</Menu>
				</button>
			</nav>
			<nav className='w-'>g</nav>
			<nav></nav>
			<nav></nav>
		</header>
	);
};

export default Header;
