import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import Button from "@mui/material/Button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Paper from "@mui/material/Paper";
import Image1 from "../../assets/images/desktop-images/image-1.png";
import Image2 from "../../assets/images/desktop-images/image-2.png";
import Image3 from "../../assets/images/desktop-images/image-3.png";
import Image4 from "../../assets/images/desktop-images/image-4.png";

const ImageCarousell = () => {
	const [items, setItems] = useState([
		{
			name: "Random Name #1",
			description: "Probably the most random thing you have ever seen!",
			img: Image1,
		},
		{
			name: "Random Name #2",
			description: "Hello World!",
			img: Image2,
		},
		{
			name: "Random Name #2",
			description: "Hello World!",
			img: Image3,
		},
		{
			name: "Random Name #2",
			description: "Hello World!",
			img: Image4,
		},
	]);

	return (
		<Carousel
			animation='slide'
			duration='700'
			// height={256}
			indicators={false}
			NextIcon={<IoIosArrowForward className='text-white' />}
			PrevIcon={<IoIosArrowBack className='text-white' />}
			className='mx-auto w-full xl:w-[1024px] 2xl:w-[1440px] h-[200px] md:h-[256px] xl:h-[356px]'
		>
			{items.map((item, i) => (
				<Item key={i} item={item} />
			))}
		</Carousel>
	);
};

const Item = ({ item }) => {
	return (
		//! problem in bg image carousel
		<Paper className='w-full h-full bg-Main-Tint-4'>
			<div className='w-full h-full '>
				<img src={item.img} className='w-full h-full' />
				{/* <h2 className='text-white'>{item.name}</h2> */}
				{/* <p>{item.description}</p> */}
				{/* <Button className='CheckButton'>Check it out!</Button> */}
			</div>
		</Paper>
	);
};

export default ImageCarousell;
