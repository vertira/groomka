import Lottie from "./Lottie";
import { motion } from "framer-motion";

const Content1 = () => {
	return (
		<section
			className="flex flex-col max-w-full h-screen mx-10 mt-12 lg:mx-30 lg:flex-row lg:items-center lg:justify-center"
			id="about"
		>
			<div className="flex relative flex-col mb-20 lg:mb-0">
				<Lottie src="/lottie/love.lottie" styles="w-full size-48 mb-10" />
				<img
					src="/images/dog.webp"
					alt="grooming dog"
					className="absolute top-3/4 -translate-y-10 size-56 xl:static xl:size-96 "
				/>
			</div>
			<motion.div
				className="flex flex-col mt-20 lg:mt-0 lg:w-5/12"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					ease: "easeIn",
					duration: 0.6,
				}}
			>
				<div className="flex gap-5 py-1.5 text-rose-500 uppercase tracking-[6px]">
					<div className="shrink-0 my-auto h-0.5 bg-rose-500 w-[72px]" />
					<h2 className="flex-auto font-accent lg:text-xl">
						GROOMING TO PASJA
					</h2>
				</div>
				<h3 className="mt-3 text-5xl text-center font-accent">
					Luksusowa pielęgnacja z miłością!
				</h3>
				<p className="mt-7 leading-8 font-accent">
					Cześć wszystkim! Mam na imię Klaudia, i od zawsze jestem miłośniczką
					zwierząt. Z ogromną przyjemnością będę dbać o Wasze ukochane
					zwierzaki, zapewniając im profesjonalny i spokojny zabieg groomingowy.
					W mojej pracy podkreślam bezpieczeństwo i komfort zwierząt, dlatego
					zawsze stosuję metody bezstresowe i odpowiednie dla każdego
					indywidualnego pupila.
				</p>
			</motion.div>
		</section>
	);
};

export default Content1;
