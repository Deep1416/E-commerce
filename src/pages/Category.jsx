// Category.jsx
import React from "react";
import dropdown_icon from "../Assets/dropdown_icon.png";
import { Items } from "../components";
import all_product from "../Assets/all_product"
const Category = (props) => {

  return (
    <div className="">
      <img
        className="block my-[30px] mx-auto w-[82%]"
        src={props.banner}
        alt=""
      />
      <div className="flex my-0 mx-[170px] justify-between items-center">
        <p className="font-semibold">
          <span className="font-semibold">Showing 1-12</span>out of 36 products
        </p>
        <div
          className="my-[10px] mx-[20px] rounded-[40px]
        border border-[#888]"
        >
          sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div
        style={{
          display : "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr ",
          margin: "20px 170px",
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
