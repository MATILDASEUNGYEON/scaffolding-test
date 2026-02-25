"use client";

import { motion } from "framer-motion";

export function AnimatedBox() {
	return (
		<motion.div
			animate={{ x: 200 }}
			transition={{ duration: 1 }}
			className="w-20 h-20 bg-red-500"
		/>
	);
}
