// import { useParams } from "react-router-dom";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { FaHeart, FaTruck, FaTag } from "react-icons/fa";
// import { useCart } from "../context/CartContext";

// Product Images
// import smartWatch from "../assets/smart-watch.webp";
// import smartWatch1 from "../assets/smart-watch1.jpg";
// import smartWatch2 from "../assets/smart-watch2.webp";
// import smartWatch3 from "../assets/smart-watch3.webp";
// import headphones from "../assets/head-phones.webp";
// import headphones1 from "../assets/head-phones1.jpg";
// import headphones2 from "../assets/head-phones2.webp";
// import headphones3 from "../assets/head-phones3.jpg";
// import camera from "../assets/camera.jpg";
// import camera1 from "../assets/camera1.jpg";
// import camera2 from "../assets/camera2.webp";
// import camera3 from "../assets/camera3.avif";
// import sneakers from "../assets/sneakers.webp";
// import sneakers1 from "../assets/sneakers1.webp";
// import sneakers2 from "../assets/sneakers2.webp";
// import sneakers3 from "../assets/sneakers3.webp";
// import backpack from "../assets/backpack.webp";
// import backpack1 from "../assets/backpack1.webp";
// import backpack2 from "../assets/backpack2.webp";
// import backpack3 from "../assets/backpack3.webp";
// import sunglasses from "../assets/sunglasses.jpg";
// import sunglasses1 from "../assets/sunglasses1.webp";
// import sunglasses2 from "../assets/sunglasses2.jpg";
// import sunglasses3 from "../assets/sunglasses3.webp";

// const productss = {
//   1: {
//     name: "Smart Watch",
//     price: 199,
//     discount: 20,
//     images: [smartWatch, smartWatch1, smartWatch2, smartWatch3],
//     colors: ["Black", "Blue", "Red"],
//     sizes: ["Small", "Medium", "Large"],
//     description: "A high-tech smart watch with fitness tracking, GPS, and AMOLED display.",
//   },
//   2: {
//     name: "Headphones",
//     price: 149,
//     discount: 10,
//     images: [headphones, headphones1, headphones2, headphones3],
//     colors: ["Black", "Blue", "Red"],
//     sizes: [],
//     description: "Noise-cancelling wireless headphones with deep bass and long battery life.",
//   },
//   3: {
//     name: "Camera",
//     price: 499,
//     discount: 15,
//     images: [camera, camera1, camera2, camera3],
//     colors: ["Black", "Blue", "Red"],
//     sizes: ["7", "8", "9"],
//     description: "High resolution DSLR camera perfect for beginners and professionals.",
//   },
//   4: {
//     name: "Sneakers",
//     price: 89,
//     discount: 30,
//     images: [sneakers, sneakers1, sneakers2, sneakers3],
//     colors: ["White", "Black", "Gray"],
//     sizes: ["7", "8", "9", "10"],
//     description: "Comfortable and stylish sneakers for everyday wear.",
//   },
//   5: {
//     name: "Backpack",
//     price: 59,
//     discount: 12,
//     images: [backpack, backpack1, backpack2, backpack3],
//     colors: ["Blue", "Black"],
//     sizes: ["small", "medium", "large"],
//     description: "Durable and spacious backpack ideal for travel, work, and school.",
//   },
//   6: {
//     name: "Sunglasses",
//     price: 79,
//     discount: 25,
//     images: [sunglasses, sunglasses1, sunglasses2, sunglasses3],
//     colors: ["Black", "Brown", "Gold", "Blue"],
//     sizes: [],
//     description: "Stylish sunglasses with UV protection and anti-glare lenses.",
//   },
// };

// export default function ProductDetail() {
//     const { id } = useParams();
//     const productId = Number(id);
//     const product = productData[productId];
//     console.log("productId = ", productId);

//   // ensure hooks are called in the same order by accessing context before any early return
//     const { dispatch } = useCart();

//     const [selectedImg, setSelectedImg] = useState(product?.images?.[0] ?? null);
//     const [selectedColor, setSelectedColor] = useState("");
//     const [selectedSize, setSelectedSize] = useState("");
//     const [pin, setPin] = useState("");

//     if (!product) return <h2 className="p-8 text-red-600">Product Not Found</h2>;

//     const discountedPrice = product.price - (product.price * product.discount) / 100;

//     return (
//         <div className="p-10 max-w-6xl mx-auto">

//             <div className="grid md:grid-cols-2 gap-10">

//                 {/* LEFT: Image Gallery + Zoom */}
//                 <div>
//                 <motion.img
//                     key={selectedImg}
//                     src={selectedImg}
//                     className="w-full rounded-xl shadow-lg cursor-zoom-in"
//                     alt={product.name}
//                     whileHover={{ scale: 1.05 }}
//                 />

//                 <div className="flex gap-4 mt-4">
//                     {product.images.map((img, i) => (
//                     <img
//                         key={i}
//                         src={img}
//                         onClick={() => setSelectedImg(img)}
//                         className={`w-20 h-20 rounded-lg cursor-pointer border ${selectedImg === img ? "border-black" : "border-gray-300"
//                         }`}
//                     />
//                     ))}
//                 </div>
//                 </div>

//                 {/* RIGHT: Product Info */}
//                 <div>
//                 <h1 className="text-4xl font-bold mb-2">{product.name}</h1>

//                 <p className="text-gray-700 mb-3">{product.description}</p>

//                 {/* PRICE */}
//                 <div className="flex items-center gap-4 mb-4">
//                     <p className="text-4xl font-bold text-green-600">${discountedPrice}</p>
//                     <p className="line-through text-gray-500">${product.price}</p>
//                     <p className="text-red-500 font-bold">{product.discount}% OFF</p>
//                 </div>

//                 {/* COLOR OPTIONS */}
//                 {product.colors.length > 0 && (
//                     <div className="mb-4">
//                     <p className="font-semibold mb-2">Choose Color:</p>
//                     <div className="flex gap-3">
//                         {product.colors.map((color) => (
//                         <button
//                             key={color}
//                             onClick={() => setSelectedColor(color)}
//                             className={`px-4 py-2 rounded-lg border ${selectedColor === color
//                             ? "bg-black text-white"
//                             : "bg-white"
//                             }`}
//                         >
//                             {color}
//                         </button>
//                         ))}
//                     </div>
//                     </div>
//                 )}

//                 {/* SIZE OPTIONS */}
//                 {product.sizes.length > 0 && (
//                     <div className="mb-4">
//                     <p className="font-semibold mb-2">Choose Size:</p>
//                     <div className="flex gap-3">
//                         {product.sizes.map((size) => (
//                         <button
//                             key={size}
//                             onClick={() => setSelectedSize(size)}
//                             className={`px-4 py-2 rounded-lg border ${selectedSize === size
//                             ? "bg-black text-white"
//                             : "bg-white"
//                             }`}
//                         >
//                             {size}
//                         </button>
//                         ))}
//                     </div>
//                     </div>
//                 )}

//                 {/* BUTTONS */}
//                     <button
//                         type="button"
//                         className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg"
//                         onClick={() => {
//                             console.log("Button clicked!");
//                             dispatch({
//                             type: "ADD_TO_CART",
//                             payload: {
//                                 id: productId,
//                                 name: product.name,
//                                 img: selectedImg,
//                                 price: product.price,
//                                 meta: {
//                                     color: selectedColor || null,
//                                     size: selectedSize || null,
//                                 },
//                             },
//                             })
//                         }}
//                         >
//                         Add to Cart
//                     </button>
//                     <button className="px-6 py-3 border rounded-lg flex items-center gap-2 hover:bg-gray-100">
//                     <FaHeart /> Wishlist
//                     </button>
//                 </div>

//                 {/* DELIVERY CHECK */}
//                 <div className="mt-6 p-4 border rounded-lg">
//                     <p className="font-semibold flex items-center gap-2 mb-2">
//                     <FaTruck /> Check Delivery Date:
//                     </p>
//                     <input
//                     type="text"
//                     value={pin}
//                     onChange={(e) => setPin(e.target.value)}
//                     placeholder="Enter PIN code"
//                     className="border p-2 rounded-lg w-40"
//                     />
//                     {pin.length === 6 && (
//                     <p className="text-green-600 mt-2">Delivery available by Feb 10–Feb 14</p>
//                     )}
//                 </div>

//                 {/* OFFERS */}
//                 <div className="mt-6 p-4 border rounded-lg">
//                     <p className="font-semibold flex items-center gap-2 mb-3">
//                     <FaTag /> Available Offers:
//                     </p>
//                     <ul className="text-gray-700 space-y-2">
//                     <li>Bank Offer: 10% cashback on credit card</li>
//                     <li>Special Price: Extra $10 off</li>
//                     <li>No Cost EMI available</li>
//                     </ul>
//                 </div>
                
//             </div>
//         </div>
//     );
// }

import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart } = useCart();

  if (!product) return <h2 className="text-center py-20">Product not found</h2>;

  return (
    <div className="container mx-auto py-10 flex gap-10">
      <img src={product.img} alt={product.name} className="h-80 rounded" />
      <div>
        <h2 className="text-3xl font-bold">{product.name}</h2>
        <p className="text-gray-600 my-4">{product.description}</p>
        <p className="text-xl font-semibold">₹{product.price}</p>
        <button
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded"
          onClick={() => {
            addToCart(product)
            toast.success(`Added to ${product.name} cart`)
        }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
