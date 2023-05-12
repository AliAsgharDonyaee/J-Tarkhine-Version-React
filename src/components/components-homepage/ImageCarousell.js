import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import Button from "@mui/material/Button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Paper from "@mui/material/Paper";
import Image1 from "../../assets/images/desktop-images/image-1.png";
import Image2 from "../../assets/images/desktop-images/image-2.png";
import Image3 from "../../assets/images/desktop-images/image-3.png";
import Image4 from "../../assets/images/desktop-images/image-4.png";
import styled from "@emotion/styled";
import { fontWeight } from "@mui/system";

const ImageCarousell = () => {
	const [items, setItems] = useState([
		{
			name: "تجربه غذای سالم و گیاهی به سبک ترخینه",
			img: Image2,
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

	const ColorButton = styled(Button)(({ theme }) => ({
		color: "#fff",
		backgroundColor: "#417F56",
		"&:hover": {
			backgroundColor: "#417F56",
		},
		fontSize: "0.9em",
		fontWeight: 700,
	}));

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
						<h2 className='mb-4 text-white text-3x xl:text-5x font-bold'>{name}</h2>
						<ColorButton className='shadow-cart-shadow rounded-1x bg-Primary w-11x'>
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
