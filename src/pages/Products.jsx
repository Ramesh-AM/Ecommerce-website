// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// import smartWatch from "../assets/smart-watch.webp";
// import headphones from "../assets/head-phones.webp";
// import camera from "../assets/camera.jpg";
// import sneakers from "../assets/sneakers.webp";
// import backpack from "../assets/backpack.webp";
// import sunglasses from "../assets/sunglasses.jpg";

// const products = [
//   { id: 1, name: "Smart Watch", price: "$199", img: smartWatch },
//   { id: 2, name: "Headphones", price: "$149", img: headphones },
//   { id: 3, name: "Camera", price: "$499", img: camera },
//   { id: 4, name: "Sneakers", price: "$89", img: sneakers },
//   { id: 5, name: "Backpack", price: "$59", img: backpack },
//   { id: 6, name: "Sunglasses", price: "$79", img: sunglasses },
// ];

// export default function Products() {
//   return (
//     <div className="container mx-auto p-10">
//       <h2 className="text-4xl font-bold mb-8 text-center">Our Products</h2>

//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {products.map((item) => (
//           <motion.div
//             key={item.id}
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.4 }}
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0px 0px 25px rgba(0,0,0,0.15)",
//             }}
//             className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl duration-300"
//           >
//             <Link to={`/product/${item.id}`}>
//               <img
//                 src={item.img}
//                 alt={item.name}
//                 className="w-full h-48 object-cover"
//               />

//               <div className="p-4 text-center">
//                 <h3 className="text-lg font-semibold">{item.name}</h3>
//                 <p className="text-gray-500 mb-2">{item.price}</p>

//                 <button className="mt-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
//                   View Product
//                 </button>
//               </div>
//             </Link>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import products from "../data/products";

// import smartWatch from "../assets/smart-watch.webp";
// import headphones from "../assets/head-phones.webp";
// import camera from "../assets/camera.jpg";
// import sneakers from "../assets/sneakers.webp";
// import backpack from "../assets/backpack.webp";
// import sunglasses from "../assets/sunglasses.jpg";

// const products = [
//   { id: 1, name: "Smart Watch", price: "$199", img: smartWatch },
//   { id: 2, name: "Headphones", price: "$149", img: headphones },
//   { id: 3, name: "Camera", price: "$499", img: camera },
//   { id: 4, name: "Sneakers", price: "$89", img: sneakers },
//   { id: 5, name: "Backpack", price: "$59", img: backpack },
//   { id: 6, name: "Sunglasses", price: "$79", img: sunglasses },
// ];
console.log(products.map((p)=> p.id));
export default function Products() {
  return (
    <div className="container mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((p) => (
        <Link to={`/products/${p.id}`} key={p.id} className="border rounded-lg p-4 shadow hover:shadow-lg">
          <img src={p.img} alt={p.name} className="h-40 w-full object-cover rounded" />
          <h3 className="text-xl font-semibold mt-2">{p.name}</h3>
          <p className="text-gray-600">₹{p.price}</p>
        </Link>
      ))}
    </div>
  );
}
