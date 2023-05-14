import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Paper from "@mui/material/Paper";
import Image1 from "../../assets/images/desktop-images/image-1.png";
import Image2 from "../../assets/images/desktop-images/image-2.png";
import Image3 from "../../assets/images/desktop-images/image-3.png";
import Image4 from "../../assets/images/desktop-images/image-4.png";
import { ColorButton } from "../ColorButton";
import { useNavigate } from "react-router-dom";

const ImageCarousell = () => {
	const [items, setItems] = useState([
		{
			name: "تجربه غذای سالم و گیاهی به سبک ترخینه",
			img: Image1,
		},
		{
			name: "تجربه غذای سالم و گیاهی به سبک ترخینه",
			img: Image2,
		},
		{
			name: "تجربه غذای سالم و گیاهی به سبک ترخینه",
			img: Image3,
		},
		{
			name: "تجربه غذای سالم و گیاهی به سبک ترخینه",
			img: Image4,
		},
	]);
	const navigate = useNavigate();
	return (
		<Carousel
			animation='slide'
			duration='700'
			indicators={false}
			NextIcon={<IoIosArrowForward className='text-white' />}
			PrevIcon={<IoIosArrowBack className='text-white' />}
			className='w-full h-14x md:h-16x lg:h-17x xl:h-20x 2xl:h-25x'
		>
			{items.map(({ name, description, img }, index) => (
				<Paper key={index} className='w-full h-full'>
					<div
						className='w-full h-14x md:h-16x lg:h-17x xl:h-20x 2xl:h-25x bg-cover bg-no-repeat center-items-flex flex-col'
						style={{ backgroundImage: `url('${img}')` }}
					>
						<h2 className='mb-4 text-white Caption-L-B md:Caption-XL-B lg:Caption-2XL-B 2xl:Caption-3XL-B font-bold'>
							{name}
						</h2>
						<ColorButton
							onClick={() => navigate("/menu/main-foods")}
							className='shadow-cart-shadow rounded-1x bg-Primary w-8x'
							style={{ width: "10rem" }}
						>
							سفارش آنلاین غذا
						</ColorButton>
					</div>
				</Paper>
			))}
		</Carousel>
	);
};
// className='w-full h-full bg-Neutral-Black bg-Image-1'
export default ImageCarousell;
