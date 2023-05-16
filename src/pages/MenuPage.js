import React, { useState } from "react";
import ImageCarousell from "../components/components-homepage/ImageCarousell";
import { Outlet } from "react-router-dom";
import WideComponents from "../components/WideComponents";
import Category from "../components/components-menupage/Category";
import CategoryList from "../components/components-menupage/CategoryList";

const MenuPage = () => {
	const [category, setCategory] = useState([
		{ link: "/menu/foods", title: "غذای اصلی" },
		{ link: "/menu/appetizer", title: "پیش غذا" },
		{ link: "/menu/dessert", title: "دسر" },
		{ link: "/menu/beverages", title: "نوشیدنی" },
	]);
	const [categoryList, setCategoryList] = useState([
		{ title: "غذاهای ایرانی" },
		{ title: "غذاهای غیر ایرانی" },
		{ title: "پیتزا ها" },
		{ title: " ساندویچ ها" },
		{ title: "پر فروش ترین ها" },
	]);
	return (
		<section className='w-full h-auto min-h-screen'>
			<div className='w-full h-auto'>
				<ImageCarousell />
			</div>
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
			<Outlet />
		</section>
	);
};

export default MenuPage;
