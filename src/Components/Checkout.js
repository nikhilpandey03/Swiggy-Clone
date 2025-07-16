import { useSelector } from "react-redux";

export default function Checkout() {
  const items = useSelector((state) => state.cartslice.items);

  const getItemPrice = (item) => {
    const rawPrice = item.price ?? item.defaultPrice ?? 0;
    return rawPrice / 100;
  };

  const total = items.reduce(
    (acc, item) => acc + getItemPrice(item) * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto mt-10 px-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-orange-600">
        Your Cart
      </h1>

      {items.length === 0 ? (
        <p className="text-center text-xl text-gray-600">
          Your cart is empty. Add some delicious food 🍔
        </p>
      ) : (
        <>
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white p-4 rounded-xl shadow-md"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
                    alt={item.name}
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  <div>
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    {item.description && (
                      <p className="text-sm text-gray-500 mt-1 max-w-md leading-snug">
                        {item.description}
                      </p>
                    )}
                    <p className="text-green-600 font-bold mt-2">
                      ₹{getItemPrice(item)}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <p className="text-lg text-gray-700">Qty: {item.quantity}</p>
                  <p className="text-xl font-bold text-orange-600 mt-2">
                    ₹{(getItemPrice(item) * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <hr className="my-6 border-t" />

          <div className="flex justify-between items-center text-xl font-semibold">
            <p>Total:</p>
            <p className="text-orange-600">₹{total.toFixed(2)}</p>
          </div>

          <div className="mt-6 text-center">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition duration-300">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
