import React from "react";
import { FiImage } from "react-icons/fi";
import Image1 from "../../assets/images/desktop-images/image-1.png";
import Image2 from "../../assets/images/desktop-images/image-2.png";
import Image3 from "../../assets/images/desktop-images/image-3.png";
import Image4 from "../../assets/images/desktop-images/image-4.png";

const Contact = () => {
	const [category, setCategory] = React.useState([
		{
			img: Image3,
			branch: "شعبه ونک",
			address: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶",
			telephon1: "021-12345678",
			telephon2: "021-12345678",
			working: "ساعت کاری: همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل",
		},
		{
			img: Image2,
			branch: "شعبه اقدسیه",
			address: "خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸",
			telephon1: "021-12345678",
			telephon2: "021-12345678",
			working: "ساعت کاری: همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل",
		},
		{
			img: Image1,
			branch: "شعبه چالوس",
			address: "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی",
			telephon1: "021-12345678",
			telephon2: "021-12345678",
			working: "ساعت کاری: همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل",
		},
		{
			img: Image4,
			branch: "شعبه اکباتان",
			address: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
			telephon1: "021-12345678",
			telephon2: "021-12345678",
			working: "ساعت کاری: همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل",
		},
	]);

	return (
		<div className='my-4x w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 grid-rows-4 md:grid-rows-2 lg:grid-rows-4 gap-y-4 md:gap-x-4'>
			{category.map(({ img, branch, address, telephon1, telephon2, working }, index) => (
				<div
					key={index}
					className='transition group hover:shadow-cart-shadow hover:border-Primary hover:-translate-y-2 rounded-2x border-2 border-Neutral-Gray-4 bg-white p-1 w-full h-18x md:h-19x lg:h-13x 2xl:h-16x center-items-flex flex-col lg:flex-row'
				>
					<div
						className='w-full lg:w-1/2 h-full lg:h-full rounded-2x bg-cover'
						style={{ backgroundImage: `url('${img}')` }}
					>
						<div className='w-full h-full transition group-hover:bg-Neutral-Black group-hover:bg-opacity-50 center-items text-white text-4x'>
							<FiImage className='hidden group-hover:block' />
						</div>
					</div>
					<div className='px-2 w-full lg:w-1/2 h-full md:h-2/5 xl:h-[30%] center-items text-Neutral-Gray-8'>
						<h2 className='mb-1 2xl:mb-2 text-center Caption-L-B lg:Caption-XL-B font-bold'>{branch}</h2>
						<p className='mb-1 2xl:mb-2 text-center Caption-XS-M lg:Caption-S-M 2xl:Caption-L-M'>{address}</p>
						<div className='flex items-center justify-between'>
							<p className='mb-1 2xl:mb-2 text-center Caption-XS-M lg:Caption-S-M 2xl:Caption-L-M'>
								شماره تماس 1 : {telephon1}
							</p>
							<span> - </span>
							<p className='mb-1 2xl:mb-2 text-center Caption-XS-M lg:Caption-S-M 2xl:Caption-L-M'>
								شماره تماس 2 : {telephon2}
							</p>
						</div>
						<p className='mb-1 2xl:mb-2 text-center Caption-XS-M lg:Caption-S-M 2xl:Caption-L-M'>{working}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Contact;
