import React, { useState } from "react";
import WideComponents from "../components/WideComponents";
import { CiBank } from "react-icons/ci";
import { BiWallet } from "react-icons/bi";
import { FiPieChart, FiBookOpen } from "react-icons/fi";
import Category from "../components/components-deputizepage/Category";
import CategoryList from "../components/components-deputizepage/CategoryList";
import CounselingForm from "../components/components-deputizepage/CounselingForm";
import DeputizerForms from "../components/components-deputizepage/DeputizerForms";
import { ColorButton } from "../components/ColorButton";

const DeputizePage = () => {
	const [category, setCategory] = useState([
		{ title: "بیش از 20 شعبه فعال در سراسر کشور", Icon: CiBank },
		{ title: "تسهیلات راه‌اندازی رستوران و تجهیز آن", Icon: BiWallet },
		{ title: "طرح‌های تشویقی ارتقای فروش", Icon: FiPieChart },
		{ title: "اعطای دستورالعمل پخت غذاها", Icon: FiBookOpen },
	]);
	const [categoryList, setCategoryList] = useState([
		{ title: "استفاده از برند شناخته شده ترخینه" },
		{ title: "مشاوره در امور حقوقی، مالی و مالیاتی" },
		{ title: "به حداقل رساندن ریسک سرمایه گذاری" },
		{ title: "پشتیبانی بازاریابی و منابع انسانی" },
		{ title: "تسریع روند بازگشت سرمایه" },
		{ title: "دریافت مشاوره جهت تامین مواد اولیه و تجهیزات" },
		{ title: "مشاوره های تخصصی جهت مدیریت رستوران" },
		{ title: "طرح های تشویقی برای ارتقا فروش" },
	]);
	return (
		<section className='w-full h-auto min-h-screen'>
			<div className='w-full h-14x xl:h-15x 2xl:h-18x bg-Neutral-Gray-8 center-items'>
				<h1 className=' Caption-XL-B xl:Caption-2XL-B 2xl:Caption-3XL-B font-bold text-white'>
					همین الان به خانواده بزرگ ترخینه بپیوندید!
				</h1>
			</div>
			<WideComponents>
				<div className='mt-6 mx-auto w-full lg:w-4/5 xl:w-3/4 h-auto grid grid-cols-2 md:grid-cols-4 grid-rows-2 md:grid-rows-1'>
					<Category category={category} />
				</div>
				<hr className='mx-auto w-[90%] border-Neutral-Gray-5' />
				<h1 className='my-6 Caption-L-B xl:Caption-2XL-B 2xl:Caption-3XL-B font-bol text-center text-Neutral-Gray-8'>
					مزیت دریافت نمایندگی
				</h1>
				<div className='w-full h-15x md:h-11x 2xl:h-12x'>
					<div className='w-full h-full'>
						<CategoryList categoryList={categoryList} />
					</div>
				</div>
				<hr className='mx-auto w-[90%] border-Neutral-Gray-5' />
				<h1 className='my-6 Caption-L-B xl:Caption-2XL-B 2xl:Caption-3XL-B font-bol text-center text-Neutral-Gray-8'>
					دریافت مشاوره
				</h1>
				<div className='mb-4 mx-auto w-full xl:w-4/5 h-12x md:h-8x flex flex-col md:flex-row justify-between items-center md:gap-x-2'>
					<CounselingForm />
				</div>
				<hr className='mx-auto w-[90%] border-Neutral-Gray-5' />
				<h1 className='my-6 Caption-L-B xl:Caption-2XL-B 2xl:Caption-3XL-B font-bol text-center text-Neutral-Gray-8'>
					فرم درخواست نمایندگی
				</h1>
				<div className='mx-auto w-full xl:w-4/5 h-auto'>
					<DeputizerForms />
				</div>
				<div className='mb-4 mx-auto w-full md:w-1/2 lg:w-1/4 h-6x lg:h-5x'>
					<ColorButton>ثبت اطلاعات</ColorButton>
				</div>
			</WideComponents>
		</section>
	);
};

export default DeputizePage;
