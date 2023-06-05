import React, { useState } from "react";
import { useAuthUser } from "react-auth-kit";
import { FiPenTool } from "react-icons/fi";

const Profile = () => {
	const auth = useAuthUser();
	const [item, setItem] = useState([
		{ title: "نام", data: auth()[0] },
		{ title: "آدرس ایمیل", data: auth()[1] },
		{ title: "شماره تلفن", data: "" },
		{ title: "تاریخ تولد(اختیاری)", data: "" },
		{ title: "نام کاربری", data: "" },
	]);
	return (
		<>
			<div className='pb-1 w-full h-8x flex items-center border-b-2 border-Neutral-Gray-4'>
				<h1 className='Caption-XL-M text-Neutral-Gray-8'>پروفایل من</h1>
			</div>
			<div className='pt-4 2xl:px-15x w-full h-auto lg:grid lg:grid-cols-2 lg:grid-rows-4 gap-x-2'>
				{item.map(({ title, data }, index) => (
					<input
						key={index}
						type='text'
						value={data}
						placeholder={title}
						className='px-1 mb-4 w-full h-5x border-2 border-Neutral-Gray-5 rounded-2x Caption-S-M'
					/>
				))}
				<button className='center-items-flex w-full h-5x border-2 border-Primary text-Primary rounded-2x'>
					<FiPenTool className='ml-1' />
					<p>ویرایش اطلاعات شخصی</p>
				</button>
			</div>
		</>
	);
};

export default Profile;
