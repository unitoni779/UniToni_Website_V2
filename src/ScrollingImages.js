import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import img1 from './WhatsApp Image 2024-06-28 at 16.06.15.jpeg';

const Example = () => {
  return (
    <div className="bg-neutral-800">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card, index) => {
            return <Card card={card} key={card.id} index={index} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card, index }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (index === 0) {
        setIsZoomed(window.scrollY > 100); // Adjust scroll position threshold as needed
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [index]);

  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
      style={{
        transform: isZoomed ? "scale(1.1)" : "scale(1)",
        transition: "transform 0.3s ease",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${card.src})`, // Use card.src here
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    src: img1, // Use src consistently for all items
    title: "Title 1",
    id: 1,
  },
  {
    src: "/imgs/abstract/2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    src: "/imgs/abstract/3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    src: "/imgs/abstract/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    src: "/imgs/abstract/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    src: "/imgs/abstract/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    src: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 7,
  },
];
