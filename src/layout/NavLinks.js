import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = ({ navLink }) => {
	return (
		<>
			{navLink.map(({ link, Icon }, index) => (
				<NavLink
					to={link}
					key={index}
					className={({ isActive, isPending }) =>
						isPending
							? "transition text-Primary rounded-1x bg-Main-Tint-1 mr-3 lg:mr-4 w-7 xl:w-10 h-7 xl:h-10 center-items"
							: isActive
							? "transition text-white rounded-1x bg-Primary mr-3 lg:mr-4 w-7 xl:w-10 h-7 xl:h-10 center-items"
							: "transition text-Primary rounded-1x bg-Main-Tint-1 mr-3 lg:mr-4 w-7 xl:w-10 h-7 xl:h-10 center-items"
					}
				>
					<Icon className='text-3x xl:text-4x' />
				</NavLink>
			))}
		</>
	);
};

export default NavLinks;
