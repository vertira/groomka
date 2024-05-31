// AnimatedDiv.tsx
import React from "react";
import { motion } from "framer-motion";

interface AnimatedDivProps {
	children: React.ReactNode;
	className?: string;
	rotate?: number;
	scale?: number;
	duration?: number;
}

const Motion = ({
	children,
	className,
	rotate,
	scale,
	duration,
}: AnimatedDivProps) => {
	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, rotate: rotate, scale: scale }}
			whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
			transition={{ duration: duration }}
		>
			{children}
		</motion.div>
	);
};

export default Motion;
