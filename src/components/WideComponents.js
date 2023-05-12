import React from "react";

const WideComponents = ({ children }) => {
	return <div className='mx-auto w-[95%] xl:w-[1024px] 2xl:w-[1440px]'>{children}</div>;
};

export default WideComponents;
