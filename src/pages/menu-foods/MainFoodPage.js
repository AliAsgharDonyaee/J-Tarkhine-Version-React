import { Button } from "@mui/base";
import axios from "axios";
import { useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Foods from "../../components/components-menupage/Foods";
import WideComponents from "../../components/WideComponents";
import { fetchFailure, fetchRequest, fetchSuccess } from "../../redux/productActions";

const MainFoodPage = () => {
	const datas = useSelector((state) => state.data);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchRequest());
		axios
			.get("http://localhost:3100/products")
			.then((datas) => datas && dispatch(fetchSuccess(datas?.data[0])))
			.catch((error) => {
				dispatch(fetchFailure(error.message));
				toast.error(`${error.message}, please run json-server :)`, {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
				});
			});
	}, []);
	return (
		<>
			<WideComponents>
				<div>
					<div className='mt-2 mb-4 flex justify-between items-end'>
						<h2 className='Caption-XL-B text-Neutral-Gray-8'>غذاهای ایرانی</h2>
						<Button className='rounded-2x px-2 w-10x h-5x text-Primary border-2 border-Primary flex flex-row-reverse justify-between items-center'>
							<p>تکمیل خرید</p>
							<FiShoppingCart />
						</Button>
					</div>
					<div className='mb-8 w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-4'>
						<Foods data={datas?.iranianFoods} />
					</div>
					<div className='mt-2 mb-4 flex justify-between items-end'>
						<h2 className='Caption-XL-B text-Neutral-Gray-8'>غذاهای غیر ایرانی</h2>
					</div>
					<div className='mb-8 w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-4'>
						<Foods data={datas?.nonIraninaFoods} />
					</div>
					<div className='mt-2 mb-4 flex justify-between items-end'>
						<h2 className='Caption-XL-B text-Neutral-Gray-8'>ساندویچ ها</h2>
					</div>
					<div className='mb-8 w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-4'>
						<Foods data={datas?.sandwitch} />
					</div>
					<div className='mt-2 mb-4 flex justify-between items-end'>
						<h2 className='Caption-XL-B text-Neutral-Gray-8'>پیتزا ها</h2>
					</div>
					<div className='mb-8 w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-4'>
						<Foods data={datas?.pizzas} />
					</div>
				</div>
			</WideComponents>
		</>
	);
};

export default MainFoodPage;
