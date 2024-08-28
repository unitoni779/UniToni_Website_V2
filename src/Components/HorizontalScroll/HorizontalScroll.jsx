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

    // Opacity for the "Connect & Engage Campus Life" text
    const textOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);


    // Manage opacity of other images based on scroll progress
    const opacityOthers = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

    // Zoom factor for the images
    const zoomFactor = 1.2;
    const totalImages = 14;
    const progressPerImage = 0.6 / totalImages;
    const [scales, setScales] = useState(Array(totalImages).fill(1));
    const [text, setText] = useState("The social part connects students, clubs, and activities, bringing university life to its fullest.");
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
            const zoomedIndex = newScales.findIndex(scale => scale === zoomFactor);

            if (zoomedIndex !== -1) {
                setScales(newScales.map((scale, index) => index === zoomedIndex ? zoomFactor : 1));

                // Update the text based on the zoomed image index
                if (zoomedIndex >= 7 && zoomedIndex < totalImages) { // s8 to s14
                    setText("With one click, access your academic life—courses, quizzes, and essential tools, all in one place.");
                } else if (zoomedIndex >= 0 && zoomedIndex < 7) { // s1 to s7
                    setText("The social part connects students, clubs, and activities, bringing university life to its fullest.");
                }

                setTextVisible(true); // Ensure text remains visible
            } else {
                setScales(Array(totalImages).fill(1));
                setTextVisible(false); // Hide text when no image is zoomed
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
                        {/* First Text - Connect & Engage Campus Life */}
                        <motion.div
                            className="firstImageText font-figtree"
                            style={{
                                ...gradientTextStyle,
                                position: 'absolute',
                                top: '-95px',
                                left: '130%',
                                transform: 'translateX(-50%)',
                                opacity: textOpacity, // Control opacity based on scroll
                                zIndex: '10',
                                whiteSpace: 'nowrap',
                                fontSize: '2.5rem', // Increased font size
                                fontWeight: '900', // Maximum standard font weight
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', // Adds a shadow to enhance boldness
                            }}
                            transition={{ type: 'spring', stiffness: 300, damping: 25, ease: 'easeInOut' }}
                        >
                            Connect & Engage Campus Life
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

                {/* Second Text - The social part connects... */}
                {textVisible && (
                    <motion.div
                        className="textContainer font-figtree"
                        style={{ 
                            position: 'fixed', // Ensure it's visible regardless of scroll
                            top: '14%', // Adjusted position
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '80%',
                            textAlign: 'center',
                            padding: '15px',
                            fontSize: '1.6rem',
                            fontWeight: 'bold',
                            zIndex: '1000', // Ensure it's above other content
                            borderRadius: '8px', // Rounded corners
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25, ease: 'easeInOut' }}
                    >
                        <p 
                            style={{ 
                                margin: 0, 
                                color: text.includes('social part') ? '#112d42' : 'transparent', 
                                background: text.includes('social part') ? 'none' : 'linear-gradient(90deg, #ff9a24, #0087f7)',
                                WebkitBackgroundClip: text.includes('social part') ? 'none' : 'text',
                                WebkitTextFillColor: text.includes('social part') ? 'inherit' : 'transparent'
                            }}
                        >
                            {text}
                        </p>
                    </motion.div>
                )}
                
                {/* Additional Text to appear after the first disappears */}
              
            </div>
        </div>
    );
};

export default HorizontalScroll;
