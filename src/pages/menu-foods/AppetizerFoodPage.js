import { Button } from "@mui/base";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import Foods from "../../components/components-menupage/Foods";
import WideComponents from "../../components/WideComponents";

const AppetizerFoodPage = () => {
	return (
		<WideComponents>
			<div className='mt-2 mb-4 flex justify-between items-end'>
				<h2 className='Caption-XL-B text-Neutral-Gray-8'>غذاهای ایرانی</h2>
				<Button className='rounded-2x px-2 w-10x h-5x text-Primary border-2 border-Primary flex flex-row-reverse justify-between items-center'>
					<p>تکمیل خرید</p>
					<FiShoppingCart />
				</Button>
			</div>
			<div className='mb-8 w-full h-auto flex flex-col md:flex-row gap-4'>
				<Foods data='' />
			</div>
		</WideComponents>
	);
};

export default AppetizerFoodPage;
