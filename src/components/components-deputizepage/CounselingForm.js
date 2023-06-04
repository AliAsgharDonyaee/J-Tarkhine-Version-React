import { ColorButton } from "../ColorButton";
const CounselingForm = () => {
	return (
		<>
			<input
				type='text'
				placeholder='نام و نام خانوادگی'
				className='rounded-2x border-2 border-Neutral-Gray-3 px-1 w-full md:w-1/4 h-5x Caption-S-L'
			/>
			<input
				type='text'
				placeholder='شماره تلفن'
				className='rounded-2x border-2 border-Neutral-Gray-3 px-1 w-full md:w-1/4 h-5x Caption-S-L'
			/>
			<div className='w-full md:w-1/2 h-5x flex justify-between lg:justify-start items-center gap-x-2'>
				<div className='w-full lg:w-2/5 h-auto'>
					<ColorButton>درخواست مشاوره</ColorButton>
				</div>
			</div>
		</>
	);
};

export default CounselingForm;
