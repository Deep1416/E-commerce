import React, { useContext, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {cartSlice} = useSelector((e)=>e);
  const [downLine, setDownLine] = useState("home");
  return (
    <header className="box bg-yellow-400">
      <nav className="flex justify-between items-center w-full h-full">
        <div className="text-xl">
          <Link to="/">Comapny Logo</Link>
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
          <div className="relative text-white">
            <Link to={"/cart"}>
              <span className="absolute bottom-5 right-1 text-lg w-4 h-4 rounded-full bg-red-700 flex justify-center items-center">
                {cartSlice.length}
              </span>
              <MdOutlineShoppingCart className="text-3xl" />
            </Link>
          </div>
          <button className="bg-blue-400 py-1 px-6 rounded-md text-lg font-medium">
            <Link to={"/loginSingup"}>Login</Link>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
