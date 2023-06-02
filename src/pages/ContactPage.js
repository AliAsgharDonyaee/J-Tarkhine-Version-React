import React from "react";
import Contact from "../components/components-contactpage/Contact";
import WideComponents from "../components/WideComponents";

const ContactPage = () => {
	return (
		<section className='w-full h-auto'>
			<div className='w-full h-14x xl:h-15x 2xl:h-18x bg-Neutral-Gray-8 center-items'>
				<h1 className=' Caption-XL-B xl:Caption-2XL-B 2xl:Caption-3XL-B font-bold text-white'>
					با ترخینه در تماس باشید.
				</h1>
			</div>
			<div className='w-full min-h-screen'>
				<WideComponents>
					<Contact />
				</WideComponents>
			</div>
		</section>
	);
};

export default ContactPage;
