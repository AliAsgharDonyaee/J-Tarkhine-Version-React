import React from "react";
import { NavLink } from "react-router-dom";

const CategoryList = ({categoryList}) => {
	return (
		<ul className='mt-2 px-2 w-auto md:w-4/5 lg:w-3/5 h-full flex flex-row justify-between gap-x-2 items-center text-Neutral-Gray-8'>
			{categoryList.map(({ title }, index) => (
				<li key={index} className='rounded-2x px-2 w-12x h-5x bg-Neutral-Gray-3 center-items text-center'>
					<NavLink to='/menu/foods'>
						<p className='Caption-XS-L md:Caption-S-L 2xl:Caption-L-L'>{title}</p>
					</NavLink>
				</li>
			))}
		</ul>
	);
};

export default CategoryList;
