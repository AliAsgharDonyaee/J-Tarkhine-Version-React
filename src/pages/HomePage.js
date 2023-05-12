import React, { useState } from "react";
import { Link } from "react-router-dom";
import Category from "../components/components-homepage/Category";
import ImageCarousell from "../components/components-homepage/ImageCarousell";
import WideComponents from "../components/WideComponents";
import { FiUser, FiHome, FiBookOpen, FiStar } from "react-icons/fi";
import AboutRestorant from "../components/components-homepage/AboutRestorant";
import CategoryAboutTarkhine from "../components/components-homepage/CategoryAboutTarkhine";

const HomePage = () => {
	const [p, setP] = useState([
		{ title: "پرسنلی مجرب و حرفه‌ای", Icon: FiUser },
		{ title: "کیفیت بالای غذاها", Icon: FiStar },
		{ title: "محیطی دلنشین و آرام", Icon: FiHome },
		{ title: "منوی متنوع", Icon: FiBookOpen },
	]);
	return (
		<section className='mb-24 w-full h-auto'>
			<div className='w-full h-auto'>
				<ImageCarousell />
			</div>
			<WideComponents>
				<h1 className='mt-2x lg:mt-4x text-3x xl:text-4x font-bold text-Neutral-Gray-8 text-center'>
					منوی رستوران ترخینه
				</h1>
				<Category />
			</WideComponents>
			<div className='w-full h-20x md:h-15x xl:h-20x bg-Image-1 bg-cover bg-no-repeat'>
				<AboutRestorant p={p} />
			</div>
			<WideComponents>
				<h1 className='mt-2x lg:mt-4x text-3x xl:text-4x font-bold text-Neutral-Gray-8 text-center'>
					ترخینه گردی
				</h1>
				<CategoryAboutTarkhine />
			</WideComponents>
		</section>
	);
};

export default HomePage;
