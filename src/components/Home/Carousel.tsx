import { useState, useEffect } from "react";
import styles from "./Carousel.module.css";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    {
      id: 1,
      title: "The next chapter of our Gemini era",
      image:
        "http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcompany_v1.02911635.png&w=384&q=75",
    },
    {
      id: 2,
      title: "Another exciting update",
      image:
        "http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FpinkCity_v1.44742a50.png&w=256&q=75",
    },
    {
      id: 3,
      title: "Stay tuned for more",
      image:
        "http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmission_v1.ccf72a8a.png&w=256&q=75",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className={styles.carousel}>
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`${styles.card} ${
            currentIndex === index ? styles.active : ""
          } ${currentIndex === (index + 1) % items.length ? styles.next : ""}`}
        >
          <img src={item.image} alt={item.title} className={styles.image} />
          <div className={styles.content}>
            <h2>{item.title}</h2>
          </div>
        </div>
      ))}
      <div className={styles.indicators}>
        {items.map((_, index) => (
          <span
            key={index}
            className={currentIndex === index ? styles.active : ""}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
