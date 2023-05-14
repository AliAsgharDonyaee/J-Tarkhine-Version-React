import React from "react";
import { NavLink } from "react-router-dom";

const LinksNavbar = ({ links }) => {
	return (
		<>
			<div className='md:px-4 lg:px-8 xl:px-16 2xl:px-24 mx-auto w-[90%] md:w-full h-full flex flex-row justify-between items-center'>
				{links?.map(({ title, link, Icon }, index) => (
					<NavLink
						to={link}
						key={index}
						className={({ isActive, isPending }) =>
							isPending
								? "center-items-flex flex-col md:flex-row text-Neutral-Gray-5"
								: isActive
								? "center-items-flex flex-col md:underline md:underline-offset-8 decoration-2 md:flex-row text-Primary"
								: "center-items-flex flex-col md:flex-row text-Neutral-Gray-5"
						}
					>
						<Icon className='md:hidden text-3x md:text-2x xl:text-3x md:ml-1' />
						<p className='Caption-XS-B md:Caption-S-B xl:Caption-L-B'>{title}</p>
					</NavLink>
				))}
			</div>
		</>
	);
};

export default LinksNavbar;
