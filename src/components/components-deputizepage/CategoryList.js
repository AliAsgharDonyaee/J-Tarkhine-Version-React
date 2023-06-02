import React from "react";
import { BsDiamond } from "react-icons/bs";

const CategoryList = ({ categoryList }) => {
	return (
		<ul className='p-2 mx-auto w-full md:w-3/4 lg:w-2/4 xl:w-3/5 h-full grid grid-cols-2 grid-rows-4 gap-x-2 text-Neutral-Gray-8'>
			{categoryList.map(({title},index) => (
				<li key={index} className='w-auto h-1/4 flex items-center'>
					<BsDiamond className='ml-1 text-Primary' />
					<h6 className="Caption-S-L 2xl:Caption-L-L">{title}</h6>
				</li>
			))}
		</ul>
	);
};

export default CategoryList;
