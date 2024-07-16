import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Carousel.module.css";

const images = [
  "https://i.pinimg.com/236x/91/17/e9/9117e98fea1de2763c8bf25a80c6dc0f.jpg",
  "https://i.pinimg.com/236x/7b/67/a6/7b67a6343bebfbddc53407343b4b954b.jpg",
  "https://i.pinimg.com/236x/5f/63/2b/5f632b4094ce669205205d4bddea41c3.jpg",
  "https://i.pinimg.com/236x/d8/39/2e/d8392ee30c1c1b3469bf6001d0acc2d2.jpg",
  "https://i.pinimg.com/236x/33/2f/2e/332f2e2585cae7ac1b1d446870942887.jpg",
];

const texts = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
];

const Carousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const itemsRef = useRef<Array<React.RefObject<HTMLDivElement>>>(images.map(() => React.createRef()));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (itemsRef.current.length > 0) {
      const items = itemsRef.current;
      const next = (current + 1) % items.length;

      gsap.to(items.map((item) => item.current), {
        zIndex: 0,
        scale: 0,
        opacity: 0,
        y: "0px",
        width: "",
        duration: 0,
      });

      gsap.to(items[current].current, {
        zIndex: 2,
        scale: 1,
        opacity: 1,
        y: "0px",
        width: "100%",
        duration: 0.8,
      });

      gsap.to(items[next].current, {
        zIndex: 1,
        opacity: 0.7,
        scale: 0.9,
        y: "20px",
        width: "70%",
        duration: 0.8,
      });
    }
  }, [current]);

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider}>
        {images.map((src, index) => (
          <div
            key={index}
            ref={(el) => (itemsRef.current[index].current = el)}
            className={`${styles.sliderItem} ${
              index === current ? styles.active : styles.notactive
            }`}
          >
            <div className={styles.imageContainer}>
              <img className={styles.image} src={src} alt={`Item ${index}`} />
            </div>
            <div className={styles.textContent}>
              <h3 className={styles.textCenter}>Item {index + 1}</h3>
              <p className={`${styles.fontMontserrat} ${styles.fontThin}`}>
                {texts[index]}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.navigation}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.navButton} ${
              index === current ? styles.active : ""
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
