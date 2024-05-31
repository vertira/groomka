// AnimatedDiv.tsx
import React from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";

interface AnimatedDivProps {
	children: React.ReactNode;
	className?: string;
	skewY?: number;
	scale?: number;
	duration?: number;
}

const Motion = ({
	children,
	className,
	skewY,
	scale,
	duration,
}: AnimatedDivProps) => {
	const prefersReducedMotion = useReducedMotion();
	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, skewY: skewY, scale: scale }}
			whileInView={{ opacity: 1, skewY: 0, scale: 1 }}
			transition={{ duration: duration }}
		>
			{children}
		</motion.div>
	);
};

export default Motion;
