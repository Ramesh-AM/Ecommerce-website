import smartWatch from "../assets/smart-watch.webp";
import smartWatch1 from "../assets/smart-watch1.jpg";
import smartWatch2 from "../assets/smart-watch2.webp";
import smartWatch3 from "../assets/smart-watch3.webp";
import headphones from "../assets/head-phones.webp";
import headphones1 from "../assets/head-phones1.jpg";
import headphones2 from "../assets/head-phones2.webp";
import headphones3 from "../assets/head-phones3.jpg";
import camera from "../assets/camera.jpg";
import camera1 from "../assets/camera1.jpg";
import camera2 from "../assets/camera2.webp";
import camera3 from "../assets/camera3.avif";
import sneakers from "../assets/sneakers.webp";
import sneakers1 from "../assets/sneakers1.webp";
import sneakers2 from "../assets/sneakers2.webp";
import sneakers3 from "../assets/sneakers3.webp";
import backpack from "../assets/backpack.webp";
import backpack1 from "../assets/backpack1.webp";
import backpack2 from "../assets/backpack2.webp";
import backpack3 from "../assets/backpack3.webp";
import sunglasses from "../assets/sunglasses.jpg";
import sunglasses1 from "../assets/sunglasses1.webp";
import sunglasses2 from "../assets/sunglasses2.jpg";
import sunglasses3 from "../assets/sunglasses3.webp";

export default [
  {
    id: 1,
    name: "Smart Watch",
    price: 199,
    discount: 20,
    img: smartWatch,
    images: [smartWatch, smartWatch1, smartWatch2, smartWatch3],
    colors: ["Black", "Blue", "Red"],
    sizes: ["Small", "Medium", "Large"],
    description: "A high-tech smart watch with fitness tracking, GPS, and AMOLED display.",
  },
  {
    id: 2,
    name: "Headphones",
    price: 149,
    discount: 10,
    img: headphones,
    images: [headphones, headphones1, headphones2, headphones3],
    colors: ["Black", "Blue", "Red"],
    sizes: [],
    description: "Noise-cancelling wireless headphones with deep bass and long battery life.",
  },
  {
    id: 3,
    name: "Camera",
    price: 499,
    discount: 15,
    img: camera,
    images: [camera, camera1, camera2, camera3],
    colors: ["Black", "Blue", "Red"],
    sizes: ["7", "8", "9"],
    description: "High resolution DSLR camera perfect for beginners and professionals.",
  },
  {
    id: 4,
    name: "Sneakers",
    price: 89,
    discount: 30,
    img: sneakers,
    images: [sneakers, sneakers1, sneakers2, sneakers3],
    colors: ["White", "Black", "Gray"],
    sizes: ["7", "8", "9", "10"],
    description: "Comfortable and stylish sneakers for everyday wear.",
  },
  {
    id: 5,
    name: "Backpack",
    price: 59,
    discount: 12,
    img: backpack,
    images: [backpack, backpack1, backpack2, backpack3],
    colors: ["Blue", "Black"],
    sizes: ["small", "medium", "large"],
    description: "Durable and spacious backpack ideal for travel, work, and school.",
  },
  {
    id: 6,
    name: "Sunglasses",
    price: 79,
    discount: 25,
    img: sunglasses,
    images: [sunglasses, sunglasses1, sunglasses2, sunglasses3],
    colors: ["Black", "Brown", "Gold", "Blue"],
    sizes: [],
    description: "Stylish sunglasses with UV protection and anti-glare lenses.",
  },
];