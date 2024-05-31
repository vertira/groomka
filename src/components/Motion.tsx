// AnimatedDiv.tsx
import React from "react";
import { motion } from "framer-motion";

interface AnimatedDivProps {
	children: React.ReactNode;
	className?: string;
	ystart?: number;
	scale?: number;
}

const Motion = ({ children, className, ystart, scale }: AnimatedDivProps) => {
	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, y: ystart, scale: scale }}
			whileInView={{ opacity: 1, y: 0, scale: 1 }}
			transition={{ duration: 1 }}
		>
			{children}
		</motion.div>
	);
};

export default Motion;
