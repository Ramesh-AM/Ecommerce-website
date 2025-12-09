import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";

export default function Cart() {
  const { cart, removeOne, removeAll, addToCart } = useCart();
  console.log('cart', cart);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center border p-4 rounded">
              <div>
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p>₹{item.price} × {item.qty} = <b>₹{item.price * item.qty}</b></p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  className="bg-gray-300 px-3 py-1 rounded"
                  onClick={() => {
                    removeOne(item.id)
                    toast.success(`Removed one ${item.name} item`)
                  }}
                >
                  -
                </button>

                <span className="text-xl font-bold">{item.qty}</span>

                <button
                  className="bg-gray-300 px-3 py-1 rounded"
                  onClick={() => {
                    addToCart(item)
                    toast.success(`Added one ${item.name} item`)
                  }}
                >
                  +
                </button>

                <button
                  className="bg-red-600 text-white px-4 py-2 rounded"
                  onClick={() => {
                    removeAll(item.id)
                    toast.success(`Removed all ${item.name} items`)
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="text-right text-2xl font-bold mt-6">
            Total: ₹{total}
          </div>
        </div>
      )}
    </div>
  );
}