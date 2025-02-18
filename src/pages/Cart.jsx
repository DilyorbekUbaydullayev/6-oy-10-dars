import React, { useContext } from "react";
import { CartContext } from "../App";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const handleDelete = (product) => {
    let copied = [...cart];
    copied = cart.filter((item) => item.id !== product.id);
    setCart(copied);
  };

  const handleUpdate = (current, product) => {
    let copied = [...cart];
    copied.map((item) => {
      if (item.id == product.id) {
        item.count = current;
      }
    });
    setCart(copied);
  };

  return (
    <div className="max-w-6xl mt-5 mx-auto">
      <h1 className="text-3xl font-semibold text-gray-700 mb-8 pb-5 border-b-1 border-b-gray-300">
        {cart?.length >0?'Shopping Cart':'Cart is empty'}
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
      
        <div className="flex-grow">
          {cart?.length > 0 &&
            cart?.map((item, index) => (
              <div
                key={index}
                className="flex gap-6 mb-8 p-4 bg-white rounded-lg shadow"
              >
                <div className="w-38 h-30 overflow-hidden rounded-lg">
                  <img
                    src={item.product.attributes.image}
                    className="w-full h-full object-cover"
                    alt={item.product.attributes.title}
                  />
                </div>

                <div className="flex items-center justify-between w-full ">
                  <div className="w-1/3">
                    <h2 className="text-xl font-semibold text-gray-800 mb-1">
                      {item.product.attributes.title}
                    </h2>
                    <p className="text-gray-500 text-sm mb-4">
                      {item.product.attributes.company}
                    </p>

                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-sm text-gray-600">Color:</span>
                      <span
                        className="w-5 h-5 rounded-full border border-gray-200"
                        style={{ backgroundColor: item.color }}
                      />
                    </div>
                  </div>

                  <div className=" w-1/3 flex flex-col items-center justify-between gap-2">
                    <label className="text-sm text-gray-600">Amount</label>
                    <select
                      value={item.count}
                      onChange={(e) => {
                        handleUpdate(e.target.value, item);
                      }}
                      className="border rounded-md px-2 py-0 text-sm"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                    </select>
                    <button
                      onClick={() => {
                        handleDelete(item);
                      }}
                      className="text-blue-500 text-sm hover:underline"
                    >
                      remove
                    </button>
                  </div>

                  <div className=" w-1/3 mt-4 text-right">
                    <span className="text-xl font-semibold text-gray-800">
                      $
                      {Number(item?.product?.attributes?.price / 100).toFixed(
                        2
                      )}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className={`w-full lg:w-80 ${cart.length==0?'hidden':''} `}>
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">
                  $
                  {Number(
                    Array.isArray(cart) && cart.length > 0
                      ? cart.reduce(
                          (acc, item) =>
                            acc +
                            Number(item?.product?.attributes?.price / 100 || 0),
                          0
                        )
                      : 0
                  ).toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">$5.00</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium">$52.00</span>
              </div>

              <div className="pt-3 border-t">
                <div className="flex justify-between">
                  <span className="font-semibold">Order Total</span>
                  <span className="font-semibold">
                    $
                    {Number(
                      (Array.isArray(cart) && cart.length > 0
                        ? cart.reduce(
                            (acc, item) =>
                              acc +
                              Number(
                                item?.product?.attributes?.price / 100 || 0
                              ),
                            0
                          )
                        : 0) + 57
                    ).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
              PLEASE LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
