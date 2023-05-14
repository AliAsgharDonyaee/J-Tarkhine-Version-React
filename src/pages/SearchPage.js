import React from "react";
import WideComponents from "../components/WideComponents";
import { FiSearch } from "react-icons/fi";
import Button from "@mui/material/Button";
import Image from "../assets/images/404_image/Group.png";

const SearchPage = () => {
	return (
		<section className='w-full h-full'>
			<div className='w-full min-h-screen'>
				<WideComponents>
					<div className='pr-1 mx-auto mt-6 w-3/5 md:w-2/5 lg:w-1/3 2xl:w-1/5 h-5x flex flex-row justify-center items-center border-2 border-Neutral-Gray-5 rounded-2x group-focus:border-Primary'>
						<input type='text' className='w-4/5 h-[95%] group group-focus:border-none' />
						<Button className='w-1/5 h-full center-items'>
							<FiSearch className='text-4x text-Primary' />
						</Button>
					</div>
				</WideComponents>
				<div className='mt-7x md:mt-9x lg:mt-10x xl:mt-11x 2xl:mt-12x w-full h-36 center-items-flex flex-col'>
					<h3 className='text-Neutral-Gray-8 xl:text-3x'>مورد جستجو شده یافت نشد</h3>
					<img src={Image} alt='not found img' className='mt-3x w-1/2 md:w-1/3 xl:w-1/5' />
				</div>
			</div>
		</section>
	);
};

export default SearchPage;
