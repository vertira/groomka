import Lottie from "./Lottie";
import { motion } from "framer-motion";

const Hero = () => {
	return (
		<div className="flex flex-col items-center w-full mt-10 font-accent xl:h-screen xl:mt-24">
			<div className="hidden xl:flex fixed -left-20 top-1/2 rotate-90">
				<p className="font-bold text-rose-500 uppercase tracking-[6px] text-2xl">
					OBSERWUJ NAS
				</p>
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
			<motion.div
				initial={{ opacity: 0, y: -50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					ease: "easeIn",
					duration: 0.6,
				}}
			>
				<h1 className="justify-center font-bold text-rose-500 uppercase tracking-[6px]">
					Zadbaj o Swojego Pupila
				</h1>
				<h2 className="w-full text-center text-6xl text-gray-900 capitalize animate-fade">
					Profesjonalna Pielęgnacja Psów
				</h2>
				<Lottie src="/lottie/Dog.lottie" styles="w-full size-96 mb-10" />
			</motion.div>
		</div>
	);
};

export default Hero;