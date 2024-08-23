import React, { useRef, useState, useEffect } from "react";
import "./horizontalscroll.css";
import { motion, useScroll, useTransform } from "framer-motion";
import ImageContainer from "../ImageContainer/ImageContainer";

const HorizontalScroll = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });

    // X-axis transform for horizontal scrolling
    const x = useTransform(scrollYProgress, [0.3, 1], ["10%", "-70%"]);

    // Y-axis transform for the first image, starts higher and moves down smoothly
    const yFirstImage = useTransform(scrollYProgress, [0, 0.25], ["-150px", "0px"]);

    // Scale for the first image during its transition
    const scaleFirstImage = useTransform(scrollYProgress, [0, 0.25], [1.1, 1]);

    // Manage opacity of other images based on scroll progress
    const opacityOthers = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

    // Define text visibility based on scroll progress
    const textVisibility = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);

    // Zoom factor for the images
    const zoomFactor = 1.2;
    const totalImages = 14;
    const progressPerImage = 0.6 / totalImages;
    const [scales, setScales] = useState(Array(totalImages).fill(1));

    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange((progress) => {
            const newScales = scales.map((_, index) => {
                const imageStart = 0.3 + index * progressPerImage;
                const imageEnd = imageStart + progressPerImage;

                // Apply zoom only if the image is fully or mostly in view
                if (progress >= imageStart && progress <= imageEnd) {
                    return zoomFactor;
                } else {
                    return 1; // Reset to normal size when the image is not in view
                }
            });

            // Ensure only one image is zoomed
            const zoomedImageIndex = newScales.findIndex(scale => scale === zoomFactor);
            if (zoomedImageIndex !== -1) {
                // Set all scales to normal size except for the zoomed image
                setScales(newScales.map((scale, index) => index === zoomedImageIndex ? zoomFactor : 1));
            } else {
                // Default state if no image is zoomed
                setScales(Array(totalImages).fill(1));
            }
        });

        return () => unsubscribe();
    }, [scrollYProgress, scales, zoomFactor, progressPerImage]);

    return (
        <div className="carousel" ref={targetRef}>
            <div className="contentContainer">
                <motion.div className="images" style={{ x }}>
                    <motion.div
                        className="firstImageWrapper"
                        style={{ y: yFirstImage }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25, ease: 'easeInOut' }}
                    >
                        <motion.div
                            className="firstImage"
                            style={{ scale: scaleFirstImage }}
                            transition={{ type: 'spring', stiffness: 300, damping: 25, ease: 'easeInOut' }}
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
                                    scale,  // Apply scaling only to the current image
                                    opacity: opacityOthers, // Adjust opacity based on scroll progress
                                    visibility: 'visible',
                                }}
                                transition={{ type: 'spring', stiffness: 300, damping: 25, ease: 'easeInOut' }}
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
                        top: '20px', // Adjusted position
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '80%',
                        textAlign: 'center',
                        padding: '15px',
                        zIndex: '1000', // Ensure it's above other content
                        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background for better readability
                        borderRadius: '8px' // Rounded corners
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25, ease: 'easeInOut' }}
                >
                    <p style={{ color: 'black' }}>
                        Integrated within both Mobile and Web applications, UniToni facilitates seamless navigation and management of both social and academic aspects of campus life.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default HorizontalScroll;
