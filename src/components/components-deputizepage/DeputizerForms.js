import Button from "@mui/material/Button";
import React from "react";

const DeputizerForms = () => {
	return (
		<>
			<h3 className='my-2 Caption-S-M text-Neutral-Gray-8'>مشخصات فردی متقاضی</h3>
			<div className='w-full h-auto md:flex flex-row gap-x-2'>
				<input
					type='text'
					placeholder='نام ونام خانوادگی'
					className='rounded-2x border-2 border-Neutral-Gray-3 px-1 mb-2 w-full md:w-1/3 h-5x Caption-S-L'
				/>
				<input
					type='number'
					placeholder='کد ملی'
					className='rounded-2x border-2 border-Neutral-Gray-3 px-1 mb-2 w-full md:w-1/3 h-5x Caption-S-L'
				/>
				<input
					type='number'
					placeholder='شماره تماس'
					className='rounded-2x border-2 border-Neutral-Gray-3 px-1 mb-2 w-full md:w-1/3 h-5x Caption-S-L'
				/>
			</div>
			<h3 className='my-2 Caption-S-M text-Neutral-Gray-8'>آدرس ملک متقاضی</h3>
			<div className='w-full h-auto md:grid grid-cols-3 grid-rows-auto gap-x-2'>
				{/* inputs select and options */}
				<input
					type='text'
					placeholder='استان'
					className='rounded-2x border-2 border-Neutral-Gray-3 px-1 mb-2 w-full h-5x Caption-S-L col-span-1'
				/>
				<input
					type='text'
					placeholder='شهر'
					className='rounded-2x border-2 border-Neutral-Gray-3 px-1 mb-2 w-full h-5x Caption-S-L col-span-1'
				/>
				<input
					type='text'
					placeholder='منطقه'
					className='rounded-2x border-2 border-Neutral-Gray-3 px-1 mb-2 w-full h-5x Caption-S-L col-span-1'
				/>
				<textarea
					placeholder='آدرس دقیق'
					className='rounded-2x border-2 border-Neutral-Gray-3 p-1 mb-2 w-full h-auto Caption-S-L col-span-3 '
                    rows="5"
				></textarea>
			</div>
			<h3 className='my-2 Caption-S-M text-Neutral-Gray-8'>مشخصات ملک متقاضی</h3>
			<div className='w-full h-auto md:flex flex-row gap-x-2'>
				<input
					type='text'
					placeholder='نوع مالکیت'
					className='rounded-2x border-2 border-Neutral-Gray-3 px-1 mb-2 w-full md:w-1/3 h-5x Caption-S-L'
				/>
				<input
					type='number'
					placeholder='مساحت ملک(متر مربع)'
					className='rounded-2x border-2 border-Neutral-Gray-3 px-1 mb-2 w-full md:w-1/3 h-5x Caption-S-L'
				/>
				<input
					type='number'
					placeholder='سن بنا'
					className='rounded-2x border-2 border-Neutral-Gray-3 px-1 mb-2 w-full md:w-1/3 h-5x Caption-S-L'
                    min="0"
                    max="30"
				/>
			</div>
			<h3 className='my-2 Caption-S-M text-Neutral-Gray-8'>امکانات ملک متقاضی</h3>
			<div className='mb-4 w-full h-auto md:flex gap-x-2'>
				<div className='w-full md:w-1/2 h-5x Caption-S-M flex justify-between items-center text-Neutral-Gray-8 md:grid grid-cols-2 grid-rows-2'>
					<label className='md:mt-4'>
						<input type='checkbox' className='accent-Primary' />
						<span className='mr-1'>پروانه کسب دارد</span>
					</label>
					<label className='md:mt-4'>
						<input type='checkbox' className='accent-Primary' />
						<span className='mr-1'>پارکینگ دارد.</span>
					</label>
					<label className='md:mt-4'>
						<input type='checkbox' className='accent-Primary' />
						<span className='mr-1'>آشپزخانه دارد.</span>
					</label>
					<label className='md:mt-4'>
						<input type='checkbox' className='accent-Primary' />
						<span className='mr-1'>انبار دارد.</span>
					</label>
				</div>
				<div className='rounded-2x border-2 border-Neutral-Gray-4 border-dashed w-full md:w-1/2 h-10x center-items'>
					<input type='file' accept='.png,.jpg' />
				</div>
			</div>
		</>
	);
};

export default DeputizerForms;
