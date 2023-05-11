import React from "react";
import { NavLink } from "react-router-dom";

const LinksNavbar = ({ links }) => {
	return (
		<>
			<div className=' mx-auto w-[90%] md:w-full h-full flex flex-row justify-between items-center'>
				{links?.map(({ title, link, Icon }, index) => (
					<NavLink
						to={link}
						key={index}
						className={({ isActive, isPending }) =>
							isPending
								? "center-items-flex flex-col md:flex-row text-Neutral-Gray-5"
								: isActive
								? "center-items-flex flex-col md:flex-row text-Primary"
								: "center-items-flex flex-col md:flex-row text-Neutral-Gray-5"
						}
					>
						<Icon className='text-3x md:text-2x xl:text-4x md:ml-1' />
						<p className='text-2x md:text-[0.7em] lg:text-2x xl:text-2.5x'>{title}</p>
					</NavLink>
				))}
			</div>
		</>
	);
};

export default LinksNavbar;
