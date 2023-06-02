import { IconButton } from "@mui/material";
import { FiHeart, FiStar } from "react-icons/fi";
import { ColorButton } from "../ColorButton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import convertOff from "../../utils/convertOff";
import foramtNumber from "../../utils/formatNumber";
import Modal from "react-overlays/Modal";
import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

const Foods = ({ data }) => {
	const [showModal, setShowModal] = useState(false);
	const [dataModal, setDataModal] = useState([]);
	let handleClose = () => setShowModal(false);
	const renderBackdrop = (props) => <div className='backdrop' {...props} />;

	return !data ? (
		<>
			<div>... loading </div>
			<ToastContainer />
		</>
	) : (
		<>
			<Modal
				show={showModal}
				onHide={handleClose}
				renderBackdrop={renderBackdrop}
				className='fixed center-items-flex w-screen h-screen top-0 left-0 bg-Neutral-Black bg-opacity-50 z-20'
			>
				<div className='rounded-2x p-1 w-11/12 lg:w-1/2 h-1/2 bg-white'>
					<div className='w-full h-[10%]'>
						<div className='w-12 h-full cursor-pointer text-Neutral-Gray-8' onClick={handleClose}>
							<MdOutlineClose className='text-6x' />
						</div>
					</div>
					<div className='w-full h-[90%]'>
						<div className='p-1 w-full h-[70%]'>
							<img src={dataModal?.img} alt={dataModal?.name} />
						</div>
						<div className='p-2 w-full h-[30%] flex'>
							<div className='w-1/2 h-full flex flex-col justify-end items-end md:items-start'>
								<div className='w-full md:w-1/2 lg:w-3/5 2xl:w-2/5 h-1/2'>
									<ColorButton>افزودن به سبد خرید</ColorButton>
								</div>
							</div>
							<div className='w-1/2 h-full flex flex-col justify-around items-end'>
								<p className='Caption-L-B lg:Caption-XL-B text-Neutral-Gray-8'>{dataModal?.name}</p>
								<p className='Caption-S-M 2xl:Caption-L-M text-end text-Neutral-Gray-7'>
									{dataModal?.discription}
								</p>
							</div>
						</div>
					</div>
				</div>
			</Modal>
			{data?.map((i, index) => (
				<div
					key={index}
					className='p-1 rounded-2x w-full md:w-full h-11x 2xl:h-12x flex bg-white border-2 border-Neutral-Gray-5 transition hover:shadow-cart-shadow hover:border-Primary cursor-pointer'
					onClick={() => {
						setShowModal(true);
						setDataModal(i);
					}}
				>
					<div className='w-1/3 h-full bg-cover bg-no-repeat rounded-2x'>
						<img src={i.img} alt={i.name} />
					</div>
					<div className='px-2 w-2/3 h-full grid grid-cols-1 grid-rows-3 text-Neutral-Gray-8'>
						<div className='w-full h-auto center-items-flex justify-between'>
							<h4 className='Caption-L-B 2xl:Caption-XL-B'>{i.name}</h4>
							<div className='Caption-M-B text-Neutral-Gray-5 center-items-flex'>
								{i.off.condition && (
									<>
										<p className='line-through Caption-S-M 2xl:Caption-L-M'>
											{foramtNumber(i.price)}
										</p>
										<p className='bg-Condition-Error-Extralight rounded-2x px-1 mr-2 text-Condition-Error-light Caption-S-M 2xl:Caption-L-M'>
											{foramtNumber(i.off.off)} %
										</p>
									</>
								)}
							</div>
						</div>
						<div className='w-full h-auto flex justify-between items-center'>
							<div className='w-3/5 h-auto'>
								<p className='Caption-S-M text-Neutral-Gray-7 2xl:Caption-L-M'>
									{i.discription.slice(1, 35)}...
								</p>
							</div>
							<div className='w-2/5 h-auto flex justify-end'>
								{i.off.condition ? (
									<p className='Caption-S-B lg:Caption-L-B'>{convertOff(i.price, i.off.off)}</p>
								) : (
									<p className='Caption-S-B lg:Caption-L-B'>{foramtNumber(i.price)} تومان</p>
								)}
							</div>
						</div>
						<div className='w-auto h-auto center-items-flex justify-between'>
							<div className='w-1/3 flex justify-start items-center'>
								<IconButton>
									<FiHeart className='text-2x' />
								</IconButton>
								<FiStar className='mx-2 text-2x text-Condition-Warning-light' />-{i.star}
							</div>
							<div className='w-2/3 flex justify-end'>
								<ColorButton>افزودن به سبد خرید</ColorButton>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default Foods;
