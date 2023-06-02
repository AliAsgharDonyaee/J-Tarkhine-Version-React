import React from "react";
import { Link } from "react-router-dom";

const AboutRestorant = ({ p }) => {
	return (
		<div className='px-3 w-full h-full bg-Neutral-Black bg-opacity-70'>
			<div className='w-full xl:w-[1024px] 2xl:w-[1440px] h-full mx-auto grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1'>
				<div className=' w-full h-full text-white md:flex flex-col justify-center'>
					<h1 className='my-4 Caption-XL-B xl:Caption-2XL-B 2xl:Caption-3XL-B font-bold'>
						رستوران‌های زنجیره‌ای ترخینه
					</h1>
					<p className='Caption-S-L xl:Caption-L-L leading-5 xl:leading-6 2xl:leading-7'>
						مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست که بیش از 20 سال است
						خدمت‌گزار مردم شریف ایران هستیم. ما در رستوران‌ های زنجیره‌ای ترخینه همواره تلاش کردیم که در
						محیطی اصیل بر پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور شان شما عزیزان
						ارائه دهیم.
					</p>
					<div className='mt-4 w-full h-auto flex justify-end'>
						<div className='w-12x lg:w-13x h-5x lg:h-6x border-2 border-white rounded-2x center-items'>
							<Link to='/about-us' className='w-full h-full'>
								اطلاعات بیشتر
							</Link>
						</div>
					</div>
				</div>
				<div className='p-6 lg:p-12 xl:px-20 2xl:px-40 w-full h-full grid grid-cols-2 grid-rows-2 gap-4'>
					{p.map(({ title, Icon }, index) => (
						<div key={index} className='w-full h-full flex flex-col justify-center items-center text-white'>
							<Icon className='text-4x' />
							<p className='mt-2 Caption-L-L 2xl:Caption-XL-L'>{title}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default AboutRestorant;
