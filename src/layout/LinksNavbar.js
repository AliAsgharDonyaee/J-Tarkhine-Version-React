import React from "react";
import { NavLink } from "react-router-dom";

const LinksNavbar = ({ data, value, value2 = "", value3 = "" }) => {
	return (
		<>
			{data?.map(({ title, link }) => (
				<NavLink
					id={`link-page-${link}`}
					key={link}
					to={link}
					className={({ isActive, isPending }) =>
						isPending
							? `${value3} text-Neutral-Gray-7 ${value} `
							: isActive
							? `transition text-Primary ${value} ${value2}`
							: `${value3} text-Neutral-Gray-7 ${value} `
					}
				>
					<p>{title}</p>
				</NavLink>
			))}
		</>
	);
};

export default LinksNavbar;
