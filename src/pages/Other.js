import React from "react";
import { Outlet } from "react-router-dom";
import Category from "../components/components-menupage/Category";
import WideComponents from "../components/WideComponents";

const Other = () => {
	const [categoryList, setCategoryList] = React.useState([
		{ title: "سوالات متداول", link: "/other/asked-questions" },
		{ title: "قوانین ترخینه", link: "/other/rules" },
		{ title: "حریم خصوصی", link: "/other/privacy" },
	]);
	return (
		<section className='w-full h-auto min-h-screen'>
			<div className='w-full h-14x xl:h-15x 2xl:h-18x bg-Neutral-Gray-8 center-items'>
				<h1 className=' Caption-XL-B xl:Caption-2XL-B 2xl:Caption-3XL-B font-bold text-white'>
					سوالات متداول از ترخینه
				</h1>
			</div>
			<div className='w-full h-7x 2xl:h-8x bg-Neutral-Gray-3 center-items-flex'>
				<WideComponents>
					<div className='w-full h-full'>
						<Category category={categoryList} />
					</div>
				</WideComponents>
			</div>
			<div className='w-full h-auto'>
				<Outlet />
			</div>
		</section>
	);
};

export default Other;
