import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleIncrease,
  handleDecrease,
  handleRemove,
} from "../../redux/Slice";
import empty from "../../Assets/Images/EmptyCart.png";
import cartImage from "../../Assets/Images/cart1.svg";
import cartImage2 from "../../Assets/Images/cart-2.svg";
import cartImage3 from "../../Assets/Images/cart3.svg";
import { NavLink } from "react-router-dom";
import { addToWhislist } from "../../redux/WhislistSlice";
const Cart1 = () => {
  const { cartSlice } = useSelector((e) => e);
  // console.log(cartSlice.old_price);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  const [save, setSave] = useState(0);
  const[old_price , setOld_price] = useState();
  

  const handleTotalAmount = () => {
    const total = cartSlice.reduce((acc, amount) => {
      return acc + amount.new_price * amount.Quantity;
    }, 0);
    setAmount(total);
  };
  const handleSaveMoney = () => {
    const total = cartSlice.reduce((acc, amount) => {
      return (
        acc +
        (amount.old_price * amount.Quantity -
          amount.new_price * amount.Quantity)
      );
    }, 0);
    setSave(total);
  };
  useEffect(() => {
    const oldPrice = cartSlice.reduce((acc, currValue) => {
      return acc + currValue.old_price * currValue.Quantity;
    }, 0);
    setOld_price(oldPrice)
    handleTotalAmount();
    handleSaveMoney();
  }, [cartSlice]);
  return (
    <>
      {cartSlice.length === 0 ? (
        <div className=" w-[40%] m-auto pb-28 flex flex-col justify-center items-center">
          <div className="w-[550px] h-[450px]">
            <img src={empty} alt="" className="w-full h-full" />
          </div>
          <NavLink to={"/"}>
            <button className="px-12 py-4 text-lg font-semibold  bg-red-500 ">
              Continue Shopping
            </button>
          </NavLink>
        </div>
      ) : (
        <div className="mx-16 my-12 flex gap-10 ">
          <div className="w-1/2">
            <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
            <div className="bg-yellow-100 px-4 py-2 mb-10">
              <p> 🚚 Yay! You get FREE delivery on this order</p>
            </div>

            {cartSlice.map((e, i) => {
              return (
                <div className="border-2 border-gray-200 px-3 py-2 mb-10">
                  <div className=" flex  justify-between  text-[#454545] text-lg  text-[17px] font-medium ">
                    <div className="flex flex-col gap-2">
                      <h3>{e.name}</h3>
                      <div className="flex items-center gap-5 ">
                        <p className="text-lg font-semibold">${e.new_price}</p>
                        <p className="text-[#818181] line-through">
                          ${e.old_price}
                        </p>
                      </div>
                      <p className="text-green-500">
                        You Saved ${e.old_price - e.new_price}
                      </p>
                      <div>
                        <div className="w-20 mb-4 h-[30px] border-2 border-[#ebebeb] bg-[#fff] flex justify-between items-center rounded-full p-2">
                          <span
                            className=" text-xl cursor-pointer"
                            onClick={() =>
                              dispatch(handleDecrease({ id: e.id }))
                            }
                          >
                            -
                          </span>{" "}
                          <span>{e.Quantity}</span>
                          <span
                            className=" text-xl cursor-pointer"
                            onClick={() =>
                              dispatch(handleIncrease({ id: e.id }))
                            }
                          >
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <img className="w-[170px] h-36" src={e.image} alt="" />
                    </div>
                  </div>
                  <div className=" flex justify-center gap-2 items-center">
                    <button
                      onClick={() => dispatch(handleRemove({ id: e.id }))}
                      className="px-6 py-2 w-full text-lg font-medium bg-red-500 rounded-md "
                    >
                      Remove
                    </button>
                    <button
                      onClick={() => {
                        dispatch(addToWhislist(e)),
                          dispatch(handleRemove({ id: e.id }));
                      }}
                      className="px-3 w-full py-2 text-lg font-medium rounded-md bg-red-500 "
                    >
                      Move To WhisList
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-1/2 mt-12 border-2 border-gray-200">
            <div className="font-semibold bg-gray-300 py-2 px-4 ">
              <h3>PRICE SUMMARY</h3>
            </div>
            <div className="px-4 flex flex-col gap-3 justify-center">
              <div className="flex justify-between text-base font-medium mt-4">
                <p>Total MRP (Incl. of taxes)</p>
                <p>{old_price}</p>
              </div>
              <div className="flex justify-between">
                <p>Delivery Fee</p>
                <p className="text-green-500">FREE</p>
              </div>
              <div className="flex justify-between  px-0">
                <p>Cart Discount</p>
                <p>- ${save}</p>
              </div>
              <div className="flex justify-between  px-0">
                <p>SubTotal</p>
                <p>${amount}</p>
              </div>
            </div>
            <hr className="mt-4 text-gray-500 h-[2px]" />
            <div className="px-4 mt-4">
              <div className="flex justify-between">
                <div className="">
                  <p>Total</p>
                  <p className="font-semibold text-lg">${amount}</p>
                </div>
                <button className="px-10 py-2 bg-red-500 w-72 rounded-md text-lg font-medium">
                  Add Adress
                </button>
              </div>
              <div className="flex items-center justify-between mt-10 mb-4 ">
                <div className="flex flex-col items-center">
                  <img src={cartImage} alt="" className="h-10 w-10" />
                  <p className="text-[12px]">100% SECURE PAYMENTS</p>
                </div>
                <div className="flex flex-col items-center">
                  <img src={cartImage2} alt="" />
                  <p className="text-[12px]">EASY RETURNS & QUICK REFUNDS</p>
                </div>
                <div className="flex flex-col items-center">
                  <img src={cartImage3} alt="" />
                  <p className="text-[12px]">QUALITY ASSURANCE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart1;
