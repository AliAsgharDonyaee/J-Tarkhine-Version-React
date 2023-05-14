import React, { useState } from "react";
import WideComponents from "../components/WideComponents";
import ImageCarousell from "../components/components-homepage/ImageCarousell";
import { Outlet } from "react-router-dom";
import Category from "../components/components-menupage/Category";
import CategoryList from "../components/components-menupage/CategoryList";

const MenuPage = () => {
	return (
		<section className='w-full h-auto min-h-screen'>
			<div className='w-full h-auto'>
				<ImageCarousell />
			</div>
			<h1 className='mt-2x lg:mt-4x Caption-XL-B 2xl:Caption-2XL-B font-bold text-Neutral-Gray-8 text-center'>
				دسته بندی
			</h1>
			<Outlet />
		</section>
	);
};

export default MenuPage;
