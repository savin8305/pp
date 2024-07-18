import { useState, useEffect } from "react";
import styles from "./Carousel.module.css";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    {
      id: 1,
      title: "Like a paper cup, a sustainable relationship balances strength and flexibility, built to weather life's challenges without losing its shape.",
      image: "http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcompany_v1.02911635.png&w=384&q=75",
    },
    {
      id: 2,
      title: "Crafted in harmony with Jaipur's heritage, Nesco's paper cup machines symbolize modern efficiency integrated with the timeless allure of the Pink City.",
      image: "http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FpinkCity_v1.44742a50.png&w=256&q=75",
    },
    {
      id: 3,
      title: "Nessco's paper cup machines leave a global footprint, catering to sustainable packaging needs worldwide with innovative technology.",
      image: "http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmission_v1.ccf72a8a.png&w=256&q=75",
    },
    {
      id: 4,
      title: "From Asia to Europe, Nessco's paper cup machines uphold quality and eco-friendliness, shaping the future of packaging solutions internationally.",
      image: "http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstrength_v1.02ce7b6e.png&w=384&q=75",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);
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
            <h2 className="font-montserrat">{item.title}</h2>
          </div>
        </div>
      ))}
      <div className={styles.indicators}>
        {items.map((_, index) => (
          <span
            key={index}
            className={`${styles.indicator} ${
              currentIndex === index ? styles.active : ""
            }`}
          >
            <span className={styles.progress}></span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
