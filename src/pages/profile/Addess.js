import { Link } from "react-router-dom";
import Image from "../../assets/images/404_image/Vector.svg";

const Addess = () => {
	return (
		<>
			<div className='pb-1 w-full h-8x flex items-center border-b-2 border-Neutral-Gray-4'>
				<h1 className='Caption-XL-M text-Neutral-Gray-8'>سفارشات</h1>
			</div>
			<div className='pt-4 2xl:px-15x w-full h-auto center-items-flex flex-col'>
				<p>شما در حال حاضر هیچ آدرسی ثبت نکرده اید</p>
				<div className='mb-2 w-full h-16x lg:h-10x center-items'>
					<img src={Image} alt='img not found' className='w-full lg:w-11/12 h-full' />
				</div>
				<Link
					to='/'
					className='center-items-flex w-1/2 h-5x border-2 border-Primary text-Primary rounded-2x'
				>
					<p>افزودن آدرس</p>
				</Link>
			</div>
		</>
	);
};

export default Addess;
