import { useEffect, useState } from "react";

export default function Carousel({ images }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="h-96 w-full relative overflow-hidden">
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
          style={{ backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundPosition: "center" }}
        ></div>
      ))}
    </div>
  );
}