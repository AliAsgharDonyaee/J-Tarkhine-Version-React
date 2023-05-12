import React, { useState } from "react";
import Image1 from "../../assets/images/desktop-images/image-1.png";
import Image2 from "../../assets/images/desktop-images/image-2.png";
import Image3 from "../../assets/images/desktop-images/image-3.png";
import Image4 from "../../assets/images/desktop-images/image-4.png";
import { FiImage } from "react-icons/fi";

const CategoryAboutTarkhine = () => {
	const [category, setCategory] = useState([
		{ img: Image3, branch: "شعبه ونک", address: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶" },
		{ img: Image2, branch: "شعبه اقدسیه", address: "خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸" },
		{
			img: Image1,
			branch: "شعبه چالوس",
			address: "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی",
		},
		{ img: Image4, branch: "شعبه اکباتان", address: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم" },
	]);

	return (
		<div className='my-4x w-full h-full grid grid-cols-1 md:grid-cols-4 grid-rows-4 md:grid-rows-1 gap-y-4 md:gap-x-4'>
			{category.map(({ img, branch, address }) => (
				<div className='transition group hover:shadow-cart-shadow hover:border-Primary hover:-translate-y-2 rounded-2x border-2 border-Neutral-Gray-4 bg-white p-1 w-full h-10x md:h-13x lg:h-15x 2xl:h-16x center-items-flex flex-row md:flex-col'>
					<div className='w-1/2 md:w-full h-full md:h-3/5 xl:h-[70%] rounded-2x bg-cover' style={{ backgroundImage: `url('${img}')` }}>
						<div className='w-full h-full transition group-hover:bg-Neutral-Black group-hover:bg-opacity-50 center-items text-white text-4x'>
							<FiImage className='hidden group-hover:block' />
						</div>
					</div>
					<div className='px-2 w-1/2 md:w-full h-full md:h-2/5 xl:h-[30%] center-items text-Neutral-Gray-8'>
						<h2 className='text-center text-3x md:text-2.5x lg:text-3x 2xl:text-3.5x font-bold'>{branch}</h2>
						<p className='text-center text-2x md:text-1.5x lg:text-2x 2xl:text-2.5x'>{address}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default CategoryAboutTarkhine;
