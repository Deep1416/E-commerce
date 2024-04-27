import React, { useContext, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const Navbar = () => {
  const { cartSlice } = useSelector((e) => e);
  const [downLine, setDownLine] = useState("home");
  const whislistItems = useSelector((state) => state.whislist);
  return (
    <header className="box bg-yellow-400">
      <nav className="flex justify-between items-center w-full h-full">
        <div className="text-xl">
          <Link to="/">Smaller Shop</Link>
        </div>
        <div>
          <div className="flex justify-evenly gap-10 items-center">
            <ul className="flex justify-center items-center gap-8 text-lg font-medium">
              <li
                className="cursor-pointer"
                onClick={() => setDownLine("home")}
              >
                <Link to={"/"}>Home</Link>{" "}
                {downLine === "home" ? <hr className="hrLine" /> : <></>}{" "}
              </li>
              <li className="cursor-pointer" onClick={() => setDownLine("men")}>
                <Link to={"/mens"}>Men</Link>{" "}
                {downLine === "men" ? <hr className="hrLine" /> : <></>}{" "}
              </li>
              <li
                className="cursor-pointer "
                onClick={() => setDownLine("women")}
              >
                <Link to={"/womens"}>Women </Link>
                {downLine === "women" ? <hr className="hrLine" /> : <></>}
              </li>
              <li
                className="cursor-pointer"
                onClick={() => setDownLine("kids")}
              >
                <Link to={"/kids"}>Kids</Link>{" "}
                {downLine === "kids" ? <hr className="hrLine" /> : <></>}{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5">
          <button className="bg-blue-400 py-1 px-6 rounded-md text-lg font-medium">
            <Link to={"/signup"}>Login</Link>
          </button>
          <div className="text-3xl">
            <Link to={"/whislist"}>
              {whislistItems.length === 0 ? (
                <CiHeart />
              ) : (
                <FaHeart className="text-green-500" />
              )}
            </Link>
          </div>
          <div className="relative text-white ">
            <Link to={"/cart"}>
              {cartSlice.length === 0 ? null : (
                <span className="absolute bottom-5 right-1 text-lg w-4 h-4 rounded-full bg-red-700 flex justify-center items-center">
                  {cartSlice.length}
                </span>
              )}

              <MdOutlineShoppingCart className="text-3xl" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
