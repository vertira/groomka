const Contact = () => {
	return (
		<div className="flex flex-col justify-center h-screen lg:mx-30 lg:flex-row-reverse lg:items-center lg:justify-center font-accent">
			<section
				className="flex flex-col justify-center px-5 mt-9 mb-3"
				id="contact"
			>
				<div className="flex gap-3.5 self-center py-1.5 text-lg font-bold text-rose-500 uppercase tracking-[6px]">
					<div className="shrink-0 self-start mt-1.5 h-0.5 bg-rose-500 w-[42px]" />
					<p>Znajdziesz NAS TUTAJ</p>
				</div>
				<div className="mt-7 text-6xl font-bold text-center text-black">
					<p>
						Złota 23
						<br /> Kalisz,
						<br /> Polska,
						<br />
						62-800
					</p>
				</div>
				<div className="flex flex-col justify-center px-1 mt-7">
					<div className="flex gap-5 justify-end">
						<div className="flex gap-2">
							<a href="https://www.instagram.com/groomkakalisz">
								<img
									src="/images/instagram.svg"
									alt="instagram logo"
									className="shrink-0 w-12 aspect-[1.09] mx-5"
									loading="lazy"
								/>
							</a>
							<a href="https://www.facebook.com/groomkakalisz">
								<img
									src="/images/facebook.svg"
									alt="instagram logo"
									className="shrink-0 w-12 aspect-[1.09] mx-5"
									loading="lazy"
								/>
							</a>
						</div>
						<div className="flex-auto my-auto text-2xl font-bold text-center text-black">
							groomkakalisz
						</div>
					</div>
				</div>
			</section>
			<img
				loading="lazy"
				src="/images/maps.webp"
				alt=""
				className="hidden lg:flex w-6/12 rounded-md"
			/>
		</div>
	);
};

export default Contact;
