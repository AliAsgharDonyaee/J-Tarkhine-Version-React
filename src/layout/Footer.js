import React from "react";
import { Link } from "react-router-dom";
import { FiTwitter, FiInstagram, FiYoutube } from "react-icons/fi";
import { Button } from "@mui/base";
import packageInfo from "../../package.json";

const Footer = () => {
	return (
		<footer className='rounded-t-3x mb-24 md:m-0 w-full h-13x lg:h-14x 2xl:h-16x bg-Neutral-Gray-8'>
			<div className='mx-auto py-4 lg:py-8 w-[95%] xl:w-[1024px] 2xl:w-[1440px] h-full grid grid-cols-2 md:grid-cols-4 grid-rows-1'>
				<div className='w-full h-full flex flex-col'>
					<h2 className='Caption-XL-B 2xl:Caption-2XL-B mb-4 text-white'>دسترسی آسان</h2>
					<div className='flex flex-col text-white'>
						<Link
							to='/other/asked-questions'
							className='Caption-S-M 2xl:Caption-S-B mb-2 transition hover:text-Neutral-Gray-5'
						>
							پرسش‌های متداول
						</Link>
						<Link
							to='/other/rules'
							className='Caption-S-M 2xl:Caption-S-B mb-2 transition hover:text-Neutral-Gray-5'
						>
							قوانین ترخینه
						</Link>
						<Link
							to='/other/privacy'
							className='Caption-S-M 2xl:Caption-S-B mb-2 transition hover:text-Neutral-Gray-5'
						>
							حریم خصوصی
						</Link>
					</div>
					<div className='my-3 w-3/4 lg:w-1/2 2xl:w-1/3 h-12 flex justify-between text-white'>
						<Link to=''>
							<FiTwitter className='text-4x transition hover:text-Neutral-Gray-5' />
						</Link>
						<Link to=''>
							<FiInstagram className='text-4x transition hover:text-Neutral-Gray-5' />
						</Link>
						<Link to=''>
							<FiYoutube className='text-4x transition hover:text-Neutral-Gray-5' />
						</Link>
					</div>
				</div>
				<div className='w-full h-full flex flex-col'>
					<h2 className='Caption-XL-B 2xl:Caption-2XL-B mb-4 text-white'>شعبه‌های ترخینه</h2>
					<div className='flex flex-col text-white'>
						<Link
							to='/contact-us'
							className='Caption-S-M 2xl:Caption-S-B my-1 transition hover:text-Neutral-Gray-5'
						>
							شعبه اکباتان
						</Link>
						<Link
							to='/contact-us'
							className='Caption-S-M 2xl:Caption-S-B my-1 transition hover:text-Neutral-Gray-5'
						>
							شعبه چالوس
						</Link>
						<Link
							to='/contact-us'
							className='Caption-S-M 2xl:Caption-S-B my-1 transition hover:text-Neutral-Gray-5'
						>
							شعبه اقدسیه
						</Link>
						<Link
							to='/contact-us'
							className='Caption-S-M 2xl:Caption-S-B my-1 transition hover:text-Neutral-Gray-5'
						>
							شعبه ونک
						</Link>
					</div>
				</div>
				<div className='hidden md:flex px-2 flex-col justify-between'>
					<input
						type='text'
						placeholder='subject'
						className='rounded-1x border-2 border-Neutral-Gray-4 bg-inherit px-1 w-11/12 h-5x lg:h-6x Caption-S-B 2xl:Caption-L-M text-white'
					/>
					<input
						type='email'
						placeholder='tarkhine@email.com ...'
						className='rounded-1x border-2 border-Neutral-Gray-4 bg-inherit px-1 w-11/12 h-5x lg:h-6x Caption-S-B 2xl:Caption-L-M text-white'
					/>
					<input
						type='number'
						placeholder='6789 345 0912'
						className='rounded-1x border-2 border-Neutral-Gray-4 bg-inherit px-1 w-11/12 h-5x lg:h-6x Caption-S-B 2xl:Caption-L-M text-white'
					/>
				</div>
				<div className='px-2 hidden md:flex flex-col justify-between items-start'>
					<textarea
						rows='5'
						placeholder='سلام ...'
						className='rounded-1x border-2 border-Neutral-Gray-4 bg-inherit p-1 mb-2 w-full h-full Caption-S-B 2xl:Caption-L-M text-white'
					></textarea>
					<Button className='rounded-1x border-2 border-white px-1 w-full h-5x lg:h-6x text-right Caption-S-B text-white'>
						ارسال پیام
					</Button>
				</div>
			</div>
			<div className='py-2 w-full bg-Neutral-Gray-8 border-t-2 border-Neutral-Gray-7 text-center text-Neutral-Gray-5 Caption-S-B md:caption-M-B'>
				made by &#10084; in codawin (https://github.com/AliasgharDevF) - v {packageInfo.version}
			</div>
		</footer>
	);
};

export default Footer;
