import { IconButton } from "@mui/material";
import { FiHeart, FiStar } from "react-icons/fi";
import { ColorButton } from "../ColorButton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import convertOff from "../../utils/convertOff";
import foramtNumber from "../../utils/formatNumber";

const NonIraninaFoods = ({ data }) => {
	return data.length === 0 ? (
		<>
			<div>... loading </div>
			<ToastContainer />
		</>
	) : (
		data?.map(({ name, discription, price, Img, star, off }, index) => (
			<div
				key={index}
				className='p-1 rounded-2x w-full md:w-full h-11x 2xl:h-12x flex bg-white border-2 border-Neutral-Gray-5 transition hover:shadow-cart-shadow hover:border-Primary'
			>
				<div
					className='w-1/3 h-full bg-cover bg-no-repeat rounded-2x'
					style={{ backgroundImage: `url('${Img}')` }}
				></div>
				<div className='px-2 w-2/3 h-full grid grid-cols-1 grid-rows-3 text-Neutral-Gray-8'>
					<div className='w-full h-auto center-items-flex justify-between'>
						<h4 className='Caption-L-B 2xl:Caption-XL-B'>{name}</h4>
						<div className='Caption-M-B text-Neutral-Gray-5 center-items-flex'>
							{off.condition && (
								<>
									<p className='line-through Caption-S-M 2xl:Caption-L-M'>{foramtNumber(price)}</p>
									<p className='bg-Condition-Error-Extralight rounded-2x px-1 mr-2 text-Condition-Error-light Caption-S-M 2xl:Caption-L-M'>
										{foramtNumber(off.off)} %
									</p>
								</>
							)}
						</div>
					</div>
					<div className='w-full h-auto flex justify-between items-center'>
						<div className='w-3/5 h-auto'>
							<p className='Caption-S-M text-Neutral-Gray-7 2xl:Caption-L-M'>{discription}</p>
						</div>
						<div className='w-2/5 h-auto flex justify-end'>
							{off.condition ? (
								<p className='Caption-S-B lg:Caption-L-B'>{convertOff(price, off.off)}</p>
							) : (
								<p className='Caption-S-B lg:Caption-L-B'>{foramtNumber(price)} تومان</p>
							)}
						</div>
					</div>
					<div className='w-auto h-auto center-items-flex justify-between'>
						<div className='w-1/3 flex justify-start items-center'>
							<IconButton>
								<FiHeart className='text-2x' />
							</IconButton>
							<FiStar className='mx-2 text-2x text-Condition-Warning-light' />-{star}
						</div>
						<div className='w-2/3 flex justify-end'>
							<ColorButton>افزودن به سبد خرید</ColorButton>
						</div>
					</div>
				</div>
			</div>
		))
	);
};

export default NonIraninaFoods;
