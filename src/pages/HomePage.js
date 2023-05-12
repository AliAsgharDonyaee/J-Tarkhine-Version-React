import React from "react";
import Category from "../components/components-homepage/Category";
import ImageCarousell from "../components/components-homepage/ImageCarousell";
import WideComponents from "../components/WideComponents";

const HomePage = () => {
	return (
		<section className='mb-24 w-full h-auto'>
			<ImageCarousell />
			<WideComponents>
				<h1 className='mt-2x xl:mt-6x text-3x xl:text-4x font-bold text-Neutral-Gray-8 text-center'>
					منوی رستوران
				</h1>
				<Category />
			</WideComponents>
		</section>
	);
};

export default HomePage;
