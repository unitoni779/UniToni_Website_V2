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

    // Define text visibility, starts visible and fades out when the first image comes down
    const textVisibility = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    // Define visibility for the second text, starts hidden and fades in after the first text fades out
    const secondTextVisibility = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

    // Zoom factor for the images
    const zoomFactor = 1.2;
    const totalImages = 14;
    const progressPerImage = 0.6 / totalImages;
    const [scales, setScales] = useState(Array(totalImages).fill(1));
    const [text, setText] = useState("Integrated within both Mobile and Web applications, UniToni facilitates seamless navigation and management of both social and academic aspects of campus life.");
    const [textVisible, setTextVisible] = useState(true);

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
                setScales(newScales.map((scale, index) => index === zoomedImageIndex ? zoomFactor : 1));

                // Update the text based on the zoomed image index
                if (zoomedImageIndex >= 6 && zoomedImageIndex < totalImages) {
                    setText("Facilitate seamless student-professor communication and access to course materials, exams, and progress tracking through UniToni's LMS for an improved university experience.");
                    setTextVisible(true);
                } else if (zoomedImageIndex < 6) {
                    setText("Integrated within both Mobile and Web applications, UniToni facilitates seamless navigation and management of both social and academic aspects of campus life.");
                    setTextVisible(true);
                }
            } else {
                // Default state if no image is zoomed
                setScales(Array(totalImages).fill(1));
                // Update text visibility based on the scroll position
                // Hide the text when scrolling past the end of all images
                if (progress > 0.6) {
                    setTextVisible(false);
                } else {
                    setTextVisible(true);
                }
            }
        });

        return () => unsubscribe();
    }, [scrollYProgress, scales, zoomFactor, progressPerImage, totalImages]);

    // Gradient text style
    const gradientTextStyle = {
        background: 'linear-gradient(90deg, #ff9a24, #0087f7)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    };

    return (
        <div className="carousel" ref={targetRef}>
            <div className="contentContainer">
                <motion.div className="images" style={{ x }}>
                    <motion.div
                        className="firstImageWrapper"
                        style={{ y: yFirstImage }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25, ease: 'easeInOut' }}
                    >
                        {/* First Text - Discover UniToni */}
                        <motion.div
                            className="firstImageText font-figtree"
                            style={{
                                ...gradientTextStyle,
                                position: 'absolute',
                                top: '-80px', // Adjust based on where you want the text to appear relative to the image
                                left: '130%',
                                transform: 'translateX(-50%)',
                                opacity: textVisibility,
                                zIndex: '10',
                                whiteSpace: 'nowrap',
                                  fontSize: '3rem', // Increased font size
                                    fontWeight: '900', // Maximum standard font weight
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', // Adds a shadow to enhance boldness
                            }}
                            transition={{ type: 'spring', stiffness: 300, damping: 25, ease: 'easeInOut' }}
                        >
                            Discover UniToni
                        </motion.div>

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

                {/* Second Text - Changes based on which image is zoomed */}
                {textVisible && (
                    <motion.div
                        className="textContainer font-figtree"
                        style={{ 
                            ...gradientTextStyle,
                            opacity: secondTextVisibility,
                            position: 'fixed', // Ensure it's visible regardless of scroll
                            top: '18%', // Adjusted position
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '80%',
                            textAlign: 'center',
                            padding: '15px',
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            zIndex: '1000', // Ensure it's above other content
                            borderRadius: '8px' // Rounded corners
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25, ease: 'easeInOut' }}
                    >
                        <p style={{ margin: 0 }}>
                            {text}
                        </p>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default HorizontalScroll;
