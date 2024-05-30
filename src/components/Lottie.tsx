import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
interface LottieProps {
	src: string;
	styles: string;
}
const Lottie = ({ src, styles }: LottieProps) => {
	return (
		<>
			<DotLottieReact
				loading="lazy"
				src={src}
				loop
				autoplay
				className={styles}
			/>
		</>
	);
};

export default Lottie;
