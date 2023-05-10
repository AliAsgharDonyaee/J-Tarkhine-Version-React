import React, { useState } from "react";
import logo from "../assets/logos/logo.svg";
import { FiUser, FiShoppingCart, FiSearch } from "react-icons/fi";
import { stack as Menu } from "react-burger-menu";
import menu from "../assets/icons/menu.png";
import { IoClose } from "react-icons/io5";
import LinksNavbar from "./LinksNavbar";

const Header = () => {
	const [links, setLinks] = useState([
		{ title: "صفحه اصلی", link: "/" },
		{ title: "شعبه", link: "/branch" },
		{ title: "منو", link: "/menu" },
		{ title: "اعطای نمایندگی", link: "/deputize" },
		{ title: "درباره ما", link: "/about-us" },
		{ title: "تماس با ما", link: "/contact-us" },
	]);

	return (
		<header className='bg-white pl-2 lg:px-4 mx-auto xl:w-[1280px] 2xl:w-[1440px] w-full h-16 lg:h-20 flex justify-around'>
			<nav id='menu-phone' className='md:hidden w-1/5 h-full'>
				<button id='burger-menu-btn' type='button' className='w-full h-full center-items-flex'>
					<Menu
						id='burger-menu'
						right
						customCrossIcon={<IoClose />}
						width={"100%"}
						isOpen={false}
						className='pt-12'
						itemListElement='div'
					>
						<LinksNavbar data={links} value='mb-4' value2='' value3='' />
					</Menu>
					<div className='center-items'>
						<img src={menu} className='w-1/2' />
					</div>
				</button>
			</nav>
			<nav id='logo' className='w-3/5 md:w-1/5 lg:w-1/4 h-full center-items-flex lg:justify-start'>
				<img src={logo} className='w-1/2 lg:w-2/5' />
			</nav>
			<nav
				id='menu-desktop'
				className='hidden md:flex justify-between items-center w-3/5 lg:w-1/2 xl:w-2/5 h-full'
			>
				<LinksNavbar
					data={links}
					value='underline underline-offset-8 decoration-1 lg:decoration-2'
					value2='text-sm lg:text-base'
					value3='no-underline'
				/>
			</nav>
			<nav
				id='personal'
				className='w-1/5 lg:w-1/4 h-full flex-row flex justify-around md:justify-evenly lg:justify-end items-center'
			>
				<button
					id='search-button'
					className='hidden rounded-1x bg-Main-Tint-1 lg:ml-4 w-7 xl:w-10 h-7 xl:h-10 md:center-items'
				>
					<FiSearch className='text-xl xl:text-2xl text-Primary' />
				</button>
				<button id='cart' className='rounded-1x bg-Main-Tint-1 lg:ml-4 w-7 xl:w-10 h-7 xl:h-10 center-items'>
					<FiShoppingCart className='text-xl xl:text-2xl text-Primary' />
				</button>
				<button id='user' className='rounded-1x bg-Main-Tint-1 w-7 xl:w-10 h-7 xl:h-10 center-items'>
					<FiUser className='text-xl xl:text-2xl text-Primary' />
				</button>
			</nav>
		</header>
	);
};

export default Header;
