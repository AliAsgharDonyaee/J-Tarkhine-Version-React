import React from "react";
import { Link } from "react-router-dom";

const AboutRestorant = ({ p }) => {
	return (
		<div className='px-3 w-full h-full bg-Neutral-Black bg-opacity-70'>
			<div className='w-full xl:w-[1024px] 2xl:w-[1440px] h-full mx-auto grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1'>
				<div className=' w-full h-full text-white md:flex flex-col justify-center'>
					<h1 className='my-4 text-3x lg:text-4x font-bold'>رستوران‌های زنجیره‌ای ترخینه</h1>
					<p className='Caption-MD lg:text-2x xl:text-2.5x 2xl:text-3x leading-5 xl:leading-6 2xl:leading-7'>
						مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست که بیش از 20 سال است
						خدمت‌گزار مردم شریف ایران هستیم. ما در رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در
						محیطی اصیل بر پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور شان شما عزیزان
						ارائه دهیم.
					</p>
					<div className='mt-4 w-full h-auto flex justify-end'>
						<div className='w-12x lg:w-13x h-5x lg:h-6x border-2 border-white rounded-2x center-items'>
							<Link to='/' className='w-full h-full'>
								اطلاعات بیشتر
							</Link>
						</div>
					</div>
				</div>
				<div className='md:p-6 lg:p-12 xl:px-20 2xl:px-40 w-full h-full grid grid-cols-2 grid-rows-2 gap-4'>
					{p.map(({ title, Icon }) => (
						<div className='w-full h-full flex flex-col justify-center items-center text-white'>
							<Icon className='text-6x' />
							<p className='mt-2 text-2.5x'>{title}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default AboutRestorant;
