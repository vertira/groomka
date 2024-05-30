import { DotLottieReact } from "@lottiefiles/dotlottie-react";
interface LottieProps {
	src: string;
	styles: string;
}
const Lottie = ({ src, styles }: LottieProps) => {
	return (
		<>
			<DotLottieReact src={src} loop className={styles} />
		</>
	);
};

export default Lottie;
