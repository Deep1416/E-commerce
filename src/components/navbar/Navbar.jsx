import React, { useContext, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import logo from "../../Assets/logo_big.png"
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartSlice } = useSelector((e) => e);
  const [downLine, setDownLine] = useState("home");
  const whislistItems = useSelector((state) => state.whislist);
  return (
    <>
      <header className="box bg-yellow-400">
        <nav className="flex justify-between items-center w-full h-full">
        <div className="flex items-center gap-2 md:gap-[10px]">
        <img src={logo} alt="" className="w-[30px] md:w-[40px]" />
        <p className="text-[#383838] text-[16px] md:text-[24px] font-bold">SHOPPER</p>
      </div>
          <div>
            <div className=" hidden  md:flex justify-evenly gap-10 items-center ">
              <ul className="flex justify-center items-center gap-8 text-lg font-medium">
                <Link to={"/"}>
                  <li
                    className="cursor-pointer"
                    onClick={() => setDownLine("home")}
                  >
                    Home
                    {downLine === "home" ? (
                      <hr className="hrLine" />
                    ) : (
                      <></>
                    )}{" "}
                  </li>
                </Link>
                <Link to={"/mens"}>
                  <li
                    className="cursor-pointer"
                    onClick={() => setDownLine("men")}
                  >
                    Men {downLine === "men" ? <hr className="hrLine" /> : <></>}{" "}
                  </li>
                </Link>
                <Link to={"/womens"}>
                  <li
                    className="cursor-pointer "
                    onClick={() => setDownLine("women")}
                  >
                    Women
                    {downLine === "women" ? <hr className="hrLine" /> : <></>}
                  </li>
                </Link>
                <Link to={"/kids"}>
                  <li
                    className="cursor-pointer"
                    onClick={() => setDownLine("kids")}
                  >
                    Kids
                    {downLine === "kids" ? (
                      <hr className="hrLine" />
                    ) : (
                      <></>
                    )}{" "}
                  </li>
                </Link>{" "}
              </ul>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center gap-5">
            <Link to={"/signup"}>
              <button className="bg-blue-400 py-1 px-6 rounded-md text-lg font-medium">
                Login
              </button>
            </Link>
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

          <div
            className="md:hidden flex flex-col items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <TiThMenu className="text-2xl" />
          </div>
        </nav>
      </header>
      {menuOpen && (
        <div className="md:hidden absolute bg-white z-50 w-full">
          <ul className="flex flex-col justify-center items-center gap-8 text-lg font-medium">
            <Link to={"/"}>
              <li
                className="cursor-pointer"
                onClick={() => setDownLine("home")}
              >
                Home
                {downLine === "home" ? <hr className="hrLine" /> : <></>}{" "}
              </li>
            </Link>
            <Link to={"/mens"}>
              <li className="cursor-pointer" onClick={() => setDownLine("men")}>
                Men {downLine === "men" ? <hr className="hrLine" /> : <></>}{" "}
              </li>
            </Link>
            <Link to={"/womens"}>
              <li
                className="cursor-pointer "
                onClick={() => setDownLine("women")}
              >
                Women
                {downLine === "women" ? <hr className="hrLine" /> : <></>}
              </li>
            </Link>
            <Link to={"/kids"}>
              <li
                className="cursor-pointer"
                onClick={() => setDownLine("kids")}
              >
                Kids
                {downLine === "kids" ? <hr className="hrLine" /> : <></>}{" "}
              </li>
            </Link>{" "}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
