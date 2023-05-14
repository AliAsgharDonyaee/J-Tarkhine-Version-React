import { IconButton } from "@mui/material";
import React from "react";
import { FiHeart, FiStar } from "react-icons/fi";
import { ColorButton } from "../ColorButton";

const Foods = ({ data }) => {
	return (
		<div className='p-1 rounded-2x w-full md:w-1/2 h-11x 2xl:h-12x flex bg-white border-2 border-Neutral-Gray-5 transition hover:shadow-cart-shadow hover:border-Primary'>
			<div
				className='w-1/3 h-full bg-cover bg-no-repeat rounded-2x'
				// style={{ backgroundImage: `url('${Image}')` }}
			></div>
			<div className='px-2 w-2/3 h-full grid grid-cols-1 grid-rows-3 text-Neutral-Gray-8'>
				<div className='w-full h-auto center-items-flex justify-between'>
					<h4 className='text-2x'>دلمه</h4>
					<div className='Caption-M-B text-Neutral-Gray-5 flex'>
						<p className='line-through'>159,000</p>
						<p className='bg-Condition-Error-Extralight rounded-2x px-1 mr-2 text-Condition-Error-light'>
							20%
						</p>
					</div>
				</div>
				<div className='w-full h-auto flex justify-between items-center'>
					<div>ffffffffffff</div>
					<div>
						<p className='Caption-M-B'>159,000 تومان</p>
					</div>
				</div>
				<div className='w-auto h-auto center-items-flex justify-between'>
					<div className='w-1/3 flex justify-start items-center'>
						<IconButton>
							<FiHeart className='text-2x' />
						</IconButton>
						<IconButton>
							<FiStar className='mx-2 text-2x text-Condition-Warning-light' />
						</IconButton>
						5
					</div>
					<div className='w-2/3 flex justify-end'>
						<ColorButton>افزودن به سبد خرید</ColorButton>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Foods;
