import { Link } from "react-router-dom";
import Image from "../../assets/images/404_image/Vector.svg";

const Orders = () => {
	return (
		<>
			<div className='pb-1 w-full h-8x flex items-center border-b-2 border-Neutral-Gray-4'>
				<h1 className='Caption-XL-M text-Neutral-Gray-8'>سفارشات</h1>
			</div>
			<div className='pt-4 2xl:px-15x w-full h-auto center-items-flex flex-col'>
				<p>شما هیچ سفارشی ندارید</p>
				<div className='mb-2 w-full h-16x lg:h-10x center-items'>
					<img src={Image} alt='img not found' className='w-full lg:w-11/12 h-full' />
				</div>
				<Link
					to='/menu/foods'
					className='center-items-flex w-1/2 h-5x border-2 border-Primary text-Primary rounded-2x'
				>
					<p>برگشت به منو رستوران</p>
				</Link>
			</div>
		</>
	);
};

export default Orders;
