import React, { useRef, useState, useEffect } from "react";
import "./horizontalscroll.css";
import { motion, useScroll, useTransform } from "framer-motion";
import ImageContainer from "../ImageContainer/ImageContainer";

const HorizontalScroll = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });

    // X-axis transform for horizontal scrolling
    const x = useTransform(scrollYProgress, [0.3, 1], ["10%", "-70%"]);

    // Y-axis transform for the first image, starts higher and moves down
    const yFirstImage = useTransform(scrollYProgress, [0, 0.2], ["-200px", "0px"]); // Adjust the initial offset as needed

    // Manage opacity of other images based on scroll progress
    const opacityOthers = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    // Manage text visibility based on first image's Y position
    const textVisibility = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    // Zoom factor for the images
    const zoomFactor = 1.2;
    const [scales, setScales] = useState(Array(14).fill(1));

    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange((progress) => {
            const totalImages = 14;
            const progressPerImage = 0.6 / totalImages;

            const newScales = scales.map((_, index) => {
                const imageStart = 0.3 + index * progressPerImage;
                const imageEnd = imageStart + progressPerImage;

                // Apply zoom only if the image is fully or mostly in view
                if (progress >= imageStart && progress <= imageEnd) {
                    return zoomFactor;
                } else {
                    return 1;
                }
            });

            setScales(newScales);
        });

        return () => unsubscribe();
    }, [scrollYProgress, scales, zoomFactor]);

    return (
        <>
            <div className="carousel" ref={targetRef}>
                <div className="contentContainer">
                    <motion.div className="images" style={{ x }}>
                        <motion.div
                            className="firstImageWrapper"
                            style={{ y: yFirstImage }}
                        >
                            <motion.div
                                className="firstImage"
                                style={{ scale: 1 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                            >
                                <ImageContainer
                                    imageSource={require('../../Screens/s1.png')}
                                    description={"June 2024"}
                                />
                            </motion.div>
                        </motion.div>
                        {scales.map((scale, index) => (
                            index === 0 ? null : (
                                <motion.div
                                    key={index}
                                    className="imageItem"
                                    style={{
                                        scale,  // Apply scaling only to subsequent images
                                        opacity: opacityOthers, // Adjust opacity based on scroll progress
                                        visibility: 'visible',
                                    }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                >
                                    <ImageContainer
                                        imageSource={require(`../../Screens/s${index + 1}.png`)}
                                        description={"June 2024"}
                                    />
                                </motion.div>
                            )
                        ))}
                        <div className="spacer"></div>
                        <div className="spacer"></div>
                    </motion.div>
                    {/* Add the text container */}
                    <motion.div
                        className="textContainer"
                        style={{ 
                            opacity: textVisibility,
                            position: 'fixed', // Ensure it's visible regardless of scroll
                            top: '-90px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '80%',
                            textAlign: 'center',
                            padding: '15px',
                            zIndex: '1000' // Ensure it's above other content
                        }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                        <p style={{ color: 'black' }}>
                            Integrated within both Mobile and Web applications, UniToni facilitates seamless navigation and management of both social and academic aspects of campus life.
                        </p>
</motion.div>


                </div>
            </div>
        </>
    );
};

export default HorizontalScroll;
