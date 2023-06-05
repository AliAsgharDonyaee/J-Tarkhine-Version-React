import { NavLink, Outlet } from "react-router-dom";
import React, { useState } from "react";
import { FiHeart, FiLogOut, FiMapPin, FiShoppingCart, FiUser } from "react-icons/fi";
import { useSignOut } from "react-auth-kit";

const Profile = ({ data }) => {
	const [item, setItem] = useState([
		{ title: "پروفایل", link: "/profile/user", Icon: FiUser },
		{ title: "پیگیری سفارشات", link: "/profile/orders", Icon: FiShoppingCart },
		{ title: "علاقمندی‌ها", link: "/profile/likes", Icon: FiHeart },
		{ title: "آدرس‌های من", link: "/profile/address", Icon: FiMapPin },
	]);
	const signOut = useSignOut();
	return (
		<section className='lg:flex'>
			<div className='p-1 mx-auto w-full md:w-1/2 lg:w-2/5 xl:w-1/3 2xl:w-1/5 h-18x border-2 border-Neutral-Gray-4 rounded-2x'>
				<div className='pb-1 w-full h-[25%] flex items-center border-b-2 border-Neutral-Gray-4'>
					<div className='p-1 w-8x h-8x border-2 border-Neutral-Gray-5 bg-Neutral-Gray-3 rounded-full center-items'>
						<FiUser className='text-5x text-Neutral-Gray-7' />
					</div>
					<div className='mr-1x'>
						<h3 className='Caption-XL-M text-Neutral-Gray-8'>{data[0]}</h3>
						<p className='Caption-S-M text-Neutral-Gray-5'>{data[1]}</p>
					</div>
				</div>
				<div className='w-full h-[75%]'>
					<ul className='py-2x flex flex-col'>
						{item.map(({ title, link, Icon }, index) => (
							<li className='mb-2 w-full h-auto flex justify-start items-center'>
								<NavLink
									key={index}
									to={link}
									className={({ isActive, isPending }) =>
										isPending
											? "transition w-full h-5x flex items-center border-4 text-Neutral-Gray-7 border-white"
											: isActive
											? "transition pr-2 border-4 border-r-Primary rounded-1x border-white text-Primary w-full h-5x flex items-center "
											: "transition w-full h-5x flex items-center border-4 text-Neutral-Gray-7 border-white"
									}
								>
									<Icon className='text-3x ' />
									<p className='Caption-L-M mr-1'>{title}</p>
								</NavLink>
							</li>
						))}
						<li className='mb-2 w-full h-auto flex justify-start items-center'>
							<button
								onClick={() => signOut()}
								className='border-r-Condition-Error text-Condition-Error w-full h-5x flex items-center '
							>
								<FiLogOut className='text-3x' />
								<p className='Caption-L-M mr-1'>خروج از حساب</p>
							</button>
						</li>
					</ul>
				</div>
			</div>
			<div className='mt-2x lg:mr-2 lg:m-0 mx-auto p-2 w-full md:w-1/2 lg:w-3/5 xl:w-2/3 2xl:w-4/5 h-auto border-2 border-Neutral-Gray-4 rounded-2x'>
				<Outlet />
			</div>
		</section>
	);
};

export default Profile;
