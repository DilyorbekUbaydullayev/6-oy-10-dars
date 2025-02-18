import React, { useContext, useEffect, useState } from "react";
import { http } from "../axios";
import { useParams } from "react-router-dom";
import { CartContext } from "../App";
import { ToastContainer, toast } from 'react-toastify';
function Details() {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [slectedColor, setSelectedColor] = useState("");
  const [count, setCount] = useState(1);
  const { cart, setCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true);
    http
      .get(`/products/${params.id}`)
      .then((res) => {
        if (res.status == 200) {
          setProduct(res?.data?.data);
          setSelectedColor(res?.data?.data?.attributes?.colors[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const handleAddCart = () => {
    let isExists = cart.find(value => {
      return value.product.id == product.id && value.color == slectedColor;
    })
    let cartObject = {
      id:Date.now(),
      product: product,
      color: slectedColor,
      count: count
    }
    let copied = [...cart]
    if (isExists) {
      copied = copied.map(function(value){
        if(value.product.id==product.id && value.color==slectedColor){
          value.count+=Number(count)
        }
        return value
      })
      setCart(copied)
    }else{
      setCart([...cart,cartObject])
    }
    toast.success('Product add to cart', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };

  return (
    <div>
      <p>{loading?'Loading...':''}</p>
 <div className={`flex gap-8 mt-8 ${loading?'hidden':''} `}>
      <img
        className="w-1/2 h-[350px] rounded-md object-cover"
        src={product?.attributes?.image}
        alt=""
      />
      <div className="w-1/2">
        <h1 className="font-medium text-2xl -mt-3">
          {product?.attributes?.title}
        </h1>
        <p className="text-gray-500 font-medium py-2">
          {product?.attributes?.company}
        </p>
        <p className="text-purple-800 mb-2">
          ${Number(product?.attributes?.price / 100).toFixed(2)}
        </p>
        <p className="text-[15px] leading-5.5 ">
          {product?.attributes?.description}
        </p>
        <div className="flex gap-3 mt-4">
          {product?.attributes?.colors.map((color, index) => (
            <span
              onClick={() => setSelectedColor(color)}
              key={index}
              style={{
                backgroundColor: color,
                border: color == slectedColor ? "2px solid black" : "none",
              }}
              className="inline-block w-[25px] h-[25px] rounded-full cursor-pointer"
            ></span>
          ))}
        </div>
        <div className="flex flex-col gap-4 mt-6">
          <label htmlFor="count">
            <select
              className="border p-2 w-[300px] rounded-md "
              value={count}
              onChange={(e) => {
                setCount(e.target.value);
              }}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </label>
        </div>
        <button onClick={handleAddCart} className="bg-purple-700 mt-6 cursor-pointer text-white rounded-md py-2 px-6 ">
          Add to Cart
        </button>
      </div>
      <ToastContainer />
    </div>
    </div>
     
  );
}

export default Details;
