// Category.jsx
import React, { useState } from "react";
import dropdown_icon from "../Assets/dropdown_icon.png";
import { Items } from "../components";
import all_product from "../Assets/all_product";
const Category = (props) => {
  // console.log(props);
  const [arrowDown, setArrowDown] = useState(false);
  const handleSortHigh =() =>{

  }
  const handleSortLow =()=>{

  }
  return (
    <div className="">
      <img
        className="block my-[30px] mx-auto w-[85%]"
        src={props.banner}
        alt=""
      />
      <div className="flex my-0 mx-[124px] justify-between items-center">
        {/* <p className="font-semibold">
          <span className="font-semibold">Showing 1-12</span>out of 36 products
        </p> */}
        <div>
          <div
            className=" flex items-center gap-2 my-[10px]  
       p-1"
            onClick={() => setArrowDown(!arrowDown)}
          >
            <span className="text-lg font-semibold text-gray-500">SORT BY</span>{" "}
            <span className="flex items-center gap-2 text-base text-gray-400">
              poplar <img src={dropdown_icon} className="bg-gary-400" alt="" />
            </span>{" "}
          </div>
          {arrowDown && (
            <div className="">
              <ul className="px-4 w-40 py-2 text-[14px] bg-gray-300  ">
                <li onClick={()=>handleSortHigh} className="cursor-pointer">Price : High to Low</li>
                <li className="mt-2 cursor-pointer" onClick={()=>handleSortLow} >Price : Low to High</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr ",
          margin: "20px 124px",
          gap: "20px",
        }}
      >
        {all_product.map((item, i) => {
          return props.items === item.category ? (
            <Items
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ) : null;
        })}
      </div>
      <div className=" cursor-pointer flex justify-center items-center my-[150px] mx-auto w-[233px] h-[69px] rounded-[75px] bg-[#ededed] text-[#787878] text-[18px] font-medium ">
        Explore More
      </div>
    </div>
  );
};

export default Category;
