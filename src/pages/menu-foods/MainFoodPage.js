import { Button } from "@mui/base";
import axios from "axios";
import { useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Foods from "../../components/components-menupage/Foods";
import NonIraninaFoods from "../../components/components-menupage/NonIraninaFoods";
import WideComponents from "../../components/WideComponents";
import { fetchFailure, fetchRequest, fetchSuccess } from "../../redux/productActions";

const MainFoodPage = () => {
	const { datasMainFood, datasSecondaryFoods, datasSan, datasPiz } = useSelector((state) => state);
	const dispatch = useDispatch();
	const url = window.location.pathname;

	useEffect(() => {
		dispatch(fetchRequest());
		// axios
		// 	.get(
		// 		`http://localhost:3100/${
		// 			url === "/menu/foods"
		// 				? "iranian-foods"
		// 				: url === "/menu/appetizer"
		// 				? "non-iranina-foods"
		// 				: url === "/menu/dessert"
		// 				? "pizzas"
		// 				: url === "/menu/beverages"
		// 				? "sandwitch"
		// 				: ""
		// 		}`,
		// 	)
			.then((datas) => datas && dispatch(fetchSuccess(datas.data)))
			.catch((error) => {
				dispatch(fetchFailure(error.message));
				toast.error(`${error.message}, run json-server`, {
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
						<Foods data={datasMainFood} />
					</div>
					{/* <div className='mt-2 mb-4 flex justify-between items-end'>
						<h2 className='Caption-XL-B text-Neutral-Gray-8'>غذاهای غیر ایرانی</h2>
					</div>
					<div className='mb-8 w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-4'>
						<NonIraninaFoods data={datasSecondaryFoods} />
					</div>
					<div className='mt-2 mb-4 flex justify-between items-end'>
						<h2 className='Caption-XL-B text-Neutral-Gray-8'>ساندویچ ها</h2>
					</div>
					<div className='mb-8 w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-4'>
						<NonIraninaFoods data={datasSan} />
					</div>
					<div className='mt-2 mb-4 flex justify-between items-end'>
						<h2 className='Caption-XL-B text-Neutral-Gray-8'>پیتزا ها</h2>
					</div>
					<div className='mb-8 w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-4'>
						<NonIraninaFoods data={datasPiz} />
					</div> */}
				</div>
			</WideComponents>
		</>
	);
};

export default MainFoodPage;
