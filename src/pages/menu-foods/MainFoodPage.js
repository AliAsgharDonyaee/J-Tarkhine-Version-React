import { Button } from "@mui/base";
import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import Category from "../../components/components-menupage/Category";
import CategoryList from "../../components/components-menupage/CategoryList";
import Foods from "../../components/components-menupage/Foods";
import WideComponents from "../../components/WideComponents";

const MainFoodPage = () => {
	const [category, setCategory] = useState([
		{ link: "/menu/main-foods", title: "غذای اصلی" },
		{ link: "/menu/main-appetizer", title: "پیش غذا" },
		{ link: "/menu/main-dessert", title: "دسر" },
		{ link: "/menu/main-beverages", title: "نوشیدنی" },
	]);
	const [categoryList, setCategoryList] = useState([
		{ title: "غذاهای ایرانی" },
		{ title: "غذاهای غیر ایرانی" },
		{ title: "پیتزا ها" },
		{ title: " ساندویچ ها" },
		{ title: "پر فروش ترین ها" },
	]);
	return (
		<>
			<div className='w-full h-7x 2xl:h-8x bg-Neutral-Gray-3 center-items-flex'>
				<WideComponents>
					<div className='w-full h-full'>
						<Category category={category} />
					</div>
				</WideComponents>
			</div>
			<div className='w-auto h-7x bg-white'>
				<WideComponents>
					<CategoryList categoryList={categoryList} />
				</WideComponents>
			</div>
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
		</>
	);
};

export default MainFoodPage;
