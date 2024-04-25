import React, { useEffect, useState } from "react";
import remove_icon from "../../Assets/cart_cross_icon.png";
import empty from "../../Assets/Images/EmptyCart.png";
import { useDispatch, useSelector } from "react-redux";
import {
  handleIncrease,
  handleDecrease,
  handleRemove,
} from "../../redux/Slice";
import { Link, NavLink } from "react-router-dom";
const CartItems = () => {
  const [amount, setAmount] = useState(0);
  const [save, setSave] = useState(0);
  const { cartSlice } = useSelector((e) => e);
  const dispatch = useDispatch();
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
    handleTotalAmount();
    handleSaveMoney();
  }, [cartSlice]);

  console.log(cartSlice);
  return (
    <>
      {cartSlice.length === 0 ? (
        <div className=" w-[40%] m-auto pb-28 flex flex-col justify-center items-center">
          <div className="w-[550px] h-[450px]">
            <img src={empty} alt="" className="w-full h-full" />
          </div>
          <button className="px-12 py-4 text-lg font-semibold  bg-red-500 "><NavLink to={"/"} >Continue Shopping</NavLink></button>
        </div>
      ) : (
        <div className="my-[100px] mx-[170px]">
          <div
            className="grid items-center gap-[75px] py-[20px] px-0 text-[#454545] text-lg font-semibold"
            style={{ gridTemplateColumns: "0.5fr 2fr 1fr 1fr 1fr 1fr" }}
          >
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <hr className="h-[3px] bg-[#e2e2e2] border-0" />
          {cartSlice.map((e, i) => {
            return (
              <div key={i}>
                <div
                  className="grid items-center gap-[75px] py-[20px] px-0 text-[#454545] text-lg  text-[17px] font-medium"
                  style={{ gridTemplateColumns: "0.5fr 2fr 1fr 1fr 1fr 1fr" }}
                >
                  <img src={e.image} alt="" className="h-[62px] " />
                  <p>{e.name}</p>
                  <p>${e.new_price}</p>
                  <div className="w-20 h-[30px] border-2 border-[#ebebeb] bg-[#fff] flex justify-between items-center rounded-full p-2">
                    <span
                      className=" text-xl cursor-pointer"
                      onClick={() => dispatch(handleDecrease({ id: e.id }))}
                    >
                      -
                    </span>{" "}
                    <span>{e.Quantity} </span>
                    <span
                      className=" text-xl cursor-pointer"
                      onClick={() => dispatch(handleIncrease({ id: e.id }))}
                    >
                      +
                    </span>
                  </div>
                  <p>${e.new_price * e.Quantity}</p>
                  <img
                    className="w-[15px] my-0 mx-10 cursor-pointer"
                    src={remove_icon}
                    onClick={() => dispatch(handleRemove({ id: e.id }))}
                    alt=""
                  />
                </div>
                <hr />
              </div>
            );
          })}
          <div className="flex my-[100px] mx-0">
            <div className="flex-1 flex flex-col mr-[200px] gap-10 ">
              <h1>Cart Totals</h1>
              <div>
                <div className="flex justify-between py-[15px] px-0">
                  <p>SubTotal</p>
                  <p>${amount}</p>
                </div>
                <hr />
                <div className="flex justify-between py-[15px] px-0">
                  <p>Shipping Fee</p>
                  <p>Free</p>
                </div>
                <hr />
                <div className="flex justify-between py-[15px] px-0">
                  <h3>Total</h3>
                  <h3>${amount}</h3>
                </div>
                <hr />
                <div className="flex justify-between py-[15px] px-0">
                  <h3>Save</h3>
                  <h3>${save}</h3>
                </div>
              </div>
              <button className="w-[262px] h-[58px] outline-none border-none bg-[#ff5a5a] text-white text-base font-semibold cursor-pointer ">
                PROCEED TO CHECKOUT
              </button>
            </div>
            <div className="flex-1 text-base font-medium">
              <p className="text-[#555]">
                If you have a promo code , Enter it here
              </p>
              <div className="w-[504px] mt-[15px] pl-5 h-[58px] bg-[#eaeaea]">
                <input
                  className="border-none outline-none bg-transparent text-base w-[330px] h-[50px] "
                  type="text"
                  name=""
                  id=""
                  placeholder="promo code"
                />
                <button className="w-[170px] h-[58px] text-base bg-black text-white cursor-pointer mt-10">
                  Sumbit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartItems;
