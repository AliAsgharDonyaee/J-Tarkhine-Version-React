import React, { useState } from "react";
import logo from "../assets/logos/logo.svg";
import { FiUser, FiShoppingCart, FiSearch, FiHome, FiMenu, FiUsers, FiPhoneCall, FiGitBranch } from "react-icons/fi";
import LinksNavbar from "./LinksNavbar";
import { RiLuggageDepositLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

const Header = () => {
	const [links, setLinks] = useState([
		{ title: "صفحه اصلی", link: "/", Icon: FiHome },
		{ title: "شعبه ها", link: "/branch", Icon: FiGitBranch },
		{ title: "منو", link: "/menu", Icon: FiMenu },
		{ title: "اعطای نمایندگی", link: "/deputize", Icon: RiLuggageDepositLine },
		{ title: "درباره ما", link: "/about-us", Icon: FiUsers },
		{ title: "تماس با ما", link: "/contact-us", Icon: FiPhoneCall },
	]);
	const [navLink, setNavLink] = useState([
		{ link: "/search", Icon: FiSearch },
		{ link: "/cart", Icon: FiShoppingCart },
		{ link: "/profile", Icon: FiUser },
	]);

	return (
		<header className='w-full h-full bg-white'>
			<nav className='px-2 md:p-0 g:px-4 mx-auto w-[95%] xl:w-[1024px] 2xl:w-[1440px] h-8x xl:h-9x flex justify-around'>
				<nav className='w-1/2 md:w-[15%] lg:w-1/4 xl:w-1/5 h-full flex justify-start items-center lg:justify-start'>
					<Link to='/'>
						<img
							src={logo}
							alt='logo'
							className='-mr-2 md:-mr-4 lg:m-0 w-2/3 md:w-11/12 lg:w-4/5 2xl:w-full'
						/>
					</Link>
				</nav>
				<nav className='hidden md:center-items-flex w-3/5 lg:w-1/2 xl:w-3/5 h-full'>
					<LinksNavbar data={links} links={links} />
				</nav>
				<nav className='-ml-2 md:-ml-4 lg:m-0 w-1/2 md:w-[15%] lg:w-1/4 xl:w-1/5 h-full flex-row flex justify-end md:justify-evenly lg:justify-end items-center'>
					<NavLinks navLink={navLink} />
				</nav>
				<nav className='fixed md:hidden bottom-0 left-0 bg-white rounded-t-2x w-full h-16 z-50'>
					<LinksNavbar links={links} />
				</nav>
			</nav>
		</header>
	);
};

export default Header;
