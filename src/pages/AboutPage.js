import React, { useState } from "react";
import WideComponents from "../components/WideComponents";
import Image from "../assets/images/about-us/Image.png";
import { FiBookOpen, FiHome, FiStar, FiUser } from "react-icons/fi";

const AboutPage = () => {
	const [p, setP] = useState([
		{ title: "پرسنلی مجرب و حرفه‌ای", Icon: FiUser },
		{ title: "کیفیت بالای غذاها", Icon: FiStar },
		{ title: "محیطی دلنشین و آرام", Icon: FiHome },
		{ title: "منوی متنوع", Icon: FiBookOpen },
	]);
	return (
		<section className='w-full h-auto'>
			<div className='w-full h-14x xl:h-15x 2xl:h-18x bg-Neutral-Gray-8 center-items'>
				<h1 className=' Caption-XL-B xl:Caption-2XL-B 2xl:Caption-3XL-B font-bold text-white'>
					درباره ترخینه بیشتر بدانید!
				</h1>
			</div>
			<WideComponents>
				<div className='my-6 md:flex md:flex-row-reverse'>
					<div className='w-full md:w-1/2 h-auto'>
						<img src={Image} alt='img about us' />
					</div>
					<div className='mt-2 md:pl-5 w-full md:w-1/2 h-auto Caption-S-L lg:Caption-L-L 2xl:Caption-XL-L text-Neutral-Gray-7 leading-6 lg:leading-7 2xl:leading-10'>
						<p>
							رستوران‌های زنجیره‌ای ترخینه در سال ۱۳۶۸ افتتاح گردیده‌اند و در طی این سال‌ها همواره با
							ارائه غذاهای باکیفیت و سرویس سریع و به موقع در تلاش برای جلب رضایت مشتریان خود بوده‌اند. در
							طی این سال‌ها اولویت جلب رضایت مشتریان بوده است.دراین خصوص ترخینه همیشه در تلاش بوده تا در
							طی این زمان‌ها کیفیت غذاهای خود را در بهترین حالت نگه داشته و حتی با نوسانات قیمت‌های مواد
							اولیه در بازار قیمت خود را ثابت نگه داشته است. ترخینه شعبات خودرا افتتاح کرده که بسیار شیک و
							مدرن می‌باشند و برای برگزاری جشن‌های کوچک و بزرگ شما مشتریان عزیز توانایی پذیرایی با کیفیت
							بالا را دارند. سالن پذیرایی شعبات در دو طبقه مجزا به همراه راه پله مدرن و آسانسور برای افراد
							کم‌توان و سالخورده آماده ارائه سرویس به شما عزیزان می‌باشند. چشم انداز: در آینده ای نزدیک
							تالار پذیرایی شعبات راه اندازی شده و آماده برگزاری جشن‌ها و مراسم‌های بزرگ شما خواهند بود .
							به امید آن روز که همه ایرانیان سالم و سلامت باشند.
						</p>
					</div>
				</div>
				<div className='p-6 lg:p-12 xl:px-20 2xl:px-40 w-full h-full grid grid-cols-2 md:grid-cols-4 grid-rows-2 md:grid-rows-1 gap-4'>
					{p.map(({ title, Icon }, index) => (
						<div
							key={index}
							className='w-full h-full flex flex-col justify-center items-center text-Neutral-Gray-7'
						>
							<Icon className='text-4x' />
							<p className='mt-2 Caption-L-L 2xl:Caption-XL-L'>{title}</p>
						</div>
					))}
				</div>
			</WideComponents>
		</section>
	);
};

export default AboutPage;
