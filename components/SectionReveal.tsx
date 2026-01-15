'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Props {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    height?: "fit-content" | "100%" | "inherit" | string;
    delay?: number;
    duration?: number;
    y?: number;
    className?: string;
}

export const SectionReveal = ({
    children,
    width = "100%",
    height = "fit-content",
    delay = 0.2,
    duration = 0.5,
    y = 50,
    className = ""
}: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div
            ref={ref}
            className={className}
            style={{
                position: "relative",
                width,
                height,
                overflow: "hidden"
            }}
        >
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: y },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: duration, delay: delay, ease: "easeOut" }}
                style={{ height: height === "100%" ? "100%" : "auto" }}
            >
                {children}
            </motion.div>
        </div>
    );
};
