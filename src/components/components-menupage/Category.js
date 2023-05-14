import React from "react";
import { NavLink } from "react-router-dom";

const Category = ({ category }) => {
	return (
		<ul className='px-2 w-full h-auto flex flex-row justify-start items-center'>
			{category.map(({ link, title }, index) => (
				<li key={index} className='ml-2x md:ml-3x 2xl:ml-4x'>
					<NavLink
						to={link}
						className={({ isActive, isPending }) =>
							isPending
								? "center-items-flex w-full flex-col md:flex-row text-Neutral-Gray-7"
								: isActive
								? "center-items-flex w-full underline underline-offset-8 decoration-2 flex-col md:flex-row text-Primary"
								: "center-items-flex w-full flex-col md:flex-row text-Neutral-Gray-7"
						}
					>
						<p className='Caption-S-B md:Caption-L-B'>{title}</p>
					</NavLink>
				</li>
			))}
		</ul>
	);
};

export default Category;
