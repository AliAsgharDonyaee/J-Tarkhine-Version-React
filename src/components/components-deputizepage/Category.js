import React from "react";

const Category = ({ category }) => {
	return (
		<>
			{category.map(({ title, Icon }, index) => (
				<div key={index} className='w-full h-10x xl:h-11x 2xl:h-13x text-center'>
					<div className='mx-auto rounded-full border-2 border-Primary w-8x xl:w-9x 2xl:w-10x h-8x xl:h-9x 2xl:h-10x center-items'>
						<Icon className='text-Primary text-4x xl:text-5x 2xl:text-7x' />
					</div>
					<div className='mx-auto w-4/5 h-1/2'>
						<p className='mt-2 Caption-S-L 2xl:Caption-L-L text-Neutral-Gray-8'>{title}</p>
					</div>
				</div>
			))}
		</>
	);
};

export default Category;
