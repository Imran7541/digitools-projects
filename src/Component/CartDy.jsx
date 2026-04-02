import React from "react";
import { toast } from "react-toastify";

const CartDy = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
  const handlePayment = () => {
    setCarts([]);
    toast.success("Payment Successful!");
  };

  const handleDelete = (item) => {
    const filteredArray = carts.filter((c) => c.id !== item.id);
    setCarts(filteredArray);
    toast.success("Item delete!");
  };

  return (
    <div className="text-center border-2 border-dashed border-blue-400 rounded-3xl p-8 mb-10 bg-white">
      <h1 className="text-4xl font-bold text-gray-900 mb-3">
        Premium Digital Tools
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto mb-6 text-lg">
        Choose from our curated collection of premium digital products designed
        to boost your productivity and creativity.
      </p>

      <div className="p-10 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">Your Cart</h1>
        {carts.length === 0 ? (
          <p className="text-center text-2xl p-5">Cart is empty</p>
        ) : (
          <>
            <div className="space-y-5 mt-4">
              {carts.map((item) => (
                <div
                  className="flex items-center justify-between border rounded-lg overflow-hidden p-3"
                  key={item.id}
                >
                  <div className="flex items-center gap-2">
                    <div>
                      <img
                        className="h-20 w-20 object-contain"
                        src={item.icon}
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">{item.name}</h2>
                    </div>
                  </div>
                  <div className="flex ">
                    <div className="text-3xl font-bold">${item.price}</div>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn rounded-full text-red-400 "
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between bg-purple-600 border py-5 mt-4 mb-4 rounded-lg text-2xl font-bold ">
              <div>Total</div>
              <div>${totalPrice}</div>
            </div>
            <div>
              <button
                onClick={handlePayment}
                className="btn w-full mt-5 bg-blue-500 text-white rounded-lg"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartDy;
