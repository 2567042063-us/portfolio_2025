"use client";
import { wrap } from "@popmotion/popcorn";
import { AnimatePresence,motion } from "framer-motion";
import React, { useState } from "react";

import styles from "./slider.module.css";

// import "./slider.scss"

// import { IMAGES } from "./Images"

const sliderVariants = {
  incoming: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0,
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0.2,
  }),
};

const sliderTransition = {
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04],
};

const Slider = ({ images }) => {
  const [[imageCount, direction], setImageCount] = useState([0, 0]);

  const activeImageIndex = wrap(0, images.length, imageCount);

  const swipeToImage = (swipeDirection) => {
    setImageCount([imageCount + swipeDirection, swipeDirection]);
  };

  const dragEndHandler = (dragInfo) => {
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 50;
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1);
    }
  };

  const skipToImage = (imageId) => {
    let changeDirection;
    if (imageId > activeImageIndex) {
      changeDirection = 1;
    } else if (imageId < activeImageIndex) {
      changeDirection = -1;
    }
    setImageCount([imageId, changeDirection]);
  };

  return (
    <>
      <div className={styles.sliderContainer}>
        <div className={styles.slider}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={imageCount}
              style={{
                backgroundImage: `url(${images[activeImageIndex].imageSrc})`,
              }}
              custom={direction}
              variants={sliderVariants}
              initial="incoming"
              animate="active"
              exit="exit"
              transition={sliderTransition}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
              className={styles.image}
            />
          </AnimatePresence>
        </div>

        <div className={styles.buttons}>
          <button onClick={() => swipeToImage(-1)}>PREV</button>
          <button onClick={() => swipeToImage(1)}>NEXT</button>
        </div>
      </div>

      <div className={styles.thumbnails}>
        {images.map((image) => (
          <div
            key={image.id}
            onClick={() => skipToImage(image.id)}
            className={styles.thumbnailContainer}
          >
            <img src={image.imageSrc} alt={image.alt} />
            <div
              className={` ${styles.activeIndicator} ${
                image.id === activeImageIndex ? styles.active : null
              }`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Slider;
