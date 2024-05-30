import * as React from "react";
import Icon from "./Icon";
const Header = () => {
	return (
		<nav className="flex flex-col xl:flex-row xl:justify-between w-full items-center">
			<img
				src="/images/Logo.webp"
				alt="logo"
				width="220"
				height="96"
				decoding="async"
				loading="lazy"
				className="h-24 xl:ml-10 xl:mt-10 "
			/>
			<div className="flex flex-row w-full justify-center xl:justify-end xl:mr-10 xl:mt-10">
				<Icon title="O Nas" href="#about" />
				<Icon title="Zwierzaki" href="#animals" />
				<Icon title="Kontakt" href="#contact" />
			</div>
		</nav>
	);
};

export default Header;
