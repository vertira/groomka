import { useEffect, useState } from "react";
import Lottie from "./Lottie";
import { motion } from "framer-motion";

const Content1 = () => {
	const [src, setSource] = useState("/images/tina1.webp");
	const [title, setTitle] = useState("Przed");
	const handleClick = () => {
		setSource((prev) =>
			prev === "/images/tina1.webp"
				? "/images/tina2.webp"
				: "/images/tina1.webp"
		);
		setTitle((prev) => (prev === "Przed" ? "Po" : "Przed"));
	};
	useEffect(() => {}, [src]);
	return (
		<section
			className="flex flex-col max-w-full mx-10 mt-64 lg:mx-30 lg:flex-row-reverse lg:items-center lg:justify-center lg:h-screen"
			id="animals"
		>
			<div className="flex flex-col" onClick={handleClick}>
				<div className="relative w-fit top-1/2 left-1/2">
					<Lottie
						src="/lottie/click.lottie"
						styles="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-36 z-[1]"
					/>
					<p className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 font-headings text-slate-100 text-4xl select-none cursor-pointer z-[2]">
						{title}
					</p>
				</div>
				<motion.img
					key={src}
					src={src}
					alt="grooming dog"
					className="size-96 rounded-md"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.6 }}
				/>
			</div>
			<motion.div
				className="flex flex-col lg:mt-0 lg:w-5/12 lg:mx-10"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{
					ease: "easeIn",
					duration: 1,
				}}
			>
				<div className="flex gap-5 py-1.5 text-rose-500 uppercase tracking-[6px]">
					<div className="shrink-0 my-auto h-0.5 bg-rose-500 w-[72px]" />
					<h2 className="font-accent text-sm lg:text-xl">
						ODŚWIEŻENIE, KTÓRE SPRAWIA RADOŚĆ
					</h2>
				</div>
				<h3 className="mt-3 text-5xl text-center font-accent">
					Nowa Fryzura, Szczęśliwy Piesek
				</h3>
				<p className="mt-7 leading-8 font-accent">
					Każdy właściciel psa wie, jak ważna jest odpowiednia pielęgnacja
					czworonożnego przyjaciela. Nic tak nie poprawia nastroju pupila, jak
					profesjonalnie wykonana, odświeżona fryzura. Nasze usługi groomingu
					gwarantują nie tylko estetyczny wygląd, ale również zdrowie i komfort
					Twojego psa. Zaufaj naszym ekspertom i zobacz, jak zadowolony i pełen
					energii może być Twój piesek po wizycie u nas!
				</p>
			</motion.div>
		</section>
	);
};

export default Content1;
