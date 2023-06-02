import React, { useState } from "react";
import WideComponents from "../components/WideComponents";
import { IoIosArrowDown } from "react-icons/io";

const AskedQuestionsPage = () => {
	const [item, setItem] = useState([
		{ title: "ترخینه چه امکانات متفاوتی داره؟", description: "" },
		{ title: "چطور می تونم در ترخینه حساب کاربری ایجاد کنم؟", description: "" },
		{ title: "سابقه و لیست خریدهای قبلی ام رو کجا ببینم؟", description: "" },
		{ title: "چه راه هایی برای پرداخت دارم؟", description: "" },
		{ title: "آیا قیمت در منوی وبسایت ترخینه با قیمت منوی شعبات رستوران یکسان است؟", description: "" },
		{ title: "چطور می تونم از اعتبار هدیه و تخفیف استفاده کنم؟", description: "" },
	]);
	const [state, setState] = useState(true);
	return (
		<section className='mt-4 w-full h-auto'>
			<WideComponents>
				{item?.map((i) => (
					<div
						onClick={() => setState(!state)}
						className='px-1 2xl:px-2 mb-2 rounded-2x border-2 border-Neutral-Gray-5 w-full h-6x flex justify-between items-center text-Neutral-Gray-8 cursor-pointer transition hover:border-Primary'
					>
						<p>{i.title}</p>
						{state ? (
							<IoIosArrowDown className='text-4x relative transition transform rotate-0' />
						) : (
							<IoIosArrowDown className='text-4x relative transition transform rotate-180' />
						)}
					</div>
				))}
			</WideComponents>
		</section>
	);
};

export default AskedQuestionsPage;
