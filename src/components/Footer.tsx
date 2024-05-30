import * as React from "react";

const Footer = () => {
	return (
		<footer className="w-full bg-slate-50 font-accent">
			<section className="flex gap-5 max-md:flex-col max-md:gap-0">
				<div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
					<p className="self-stretch my-auto text-2xl text-center text-black">
						2024 @Groomka - Salon Pielęgnacji Zwierząt Kalisz
					</p>
				</div>
				<div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
					<div className="flex grow gap-0 justify-center items-center  px-1.5 py-2.5 text-2xl text-center text-black">
						<div>
							Designed by: <span className="font-bold">Vertira</span>
						</div>
						<a href="https://github.com/vertira">
							<img
								loading="lazy"
								src="/images/github.svg"
								className="shrink-0 mx-3 aspect-[0.88] w-[42px]"
								alt=""
							/>
						</a>
					</div>
				</div>
			</section>
		</footer>
	);
};

export default Footer;
