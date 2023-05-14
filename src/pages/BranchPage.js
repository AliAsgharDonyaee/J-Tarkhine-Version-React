import React from "react";
import CategoryAboutTarkhine from "../components/components-homepage/CategoryAboutTarkhine";
import WideComponents from "../components/WideComponents";

const BranchPage = () => {
	return (
		<section className='w-full h-auto'>
			<WideComponents>
				<h1 className='mt-2x lg:mt-4x text-3x xl:text-4x font-bold text-Neutral-Gray-8 text-center'>
                    شعبه های رستوران ترخینه
				</h1>
				<CategoryAboutTarkhine />
			</WideComponents>
		</section>
	);
};

export default BranchPage;
