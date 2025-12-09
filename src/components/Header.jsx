import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import logo from "../assets/logo.jpg";

export default function Header() {
  const { cart } = useCart();

  return (
    <header className="shadow bg-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold"><Link to="/">
        <img src={logo} alt="MyShop Logo" className="h-8" />
        </Link></h1>
        <nav className="flex gap-6">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/products" className="hover:text-blue-600">Products</Link>
          <Link to="/about" className="hover:text-blue-600">About Us</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact Us</Link>
        </nav>
        <Link to="/cart" className="relative">
          <span className="text-xl">🛒</span>
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white px-2 text-sm rounded-full">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}