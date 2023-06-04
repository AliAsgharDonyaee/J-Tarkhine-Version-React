import React from "react";
import WideComponents from "../components/WideComponents";
import Image from "../assets/images/404_image/Vector.svg";

const NotFoundPage = () => {
	return (
		<section className='w-full h-auto'>
			<div className='w-full min-h-screen'>
				<WideComponents>
					<div className='mt-7x md:mt-9x lg:mt-10x xl:mt-11x 2xl:mt-12x w-full h-36 center-items-flex flex-col'>
						<h3 className='text-Neutral-Gray-8 xl:text-3x'>
							صفحه مورد نظری که میگردید یافت نشد عزیز من :)
						</h3>
						<img src={Image} alt='not found img' className='mt-3x w-1/2 md:w-1/3 xl:w-1/5' />
					</div>
				</WideComponents>
			</div>
		</section>
	);
};

export default NotFoundPage;
