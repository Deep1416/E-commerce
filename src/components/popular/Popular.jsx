import React from "react";
import data_product from "../../Assets/data";
import Items from "../item/Items";
const Popular = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-[10px] h-[90%]">
        <h1 className="text-[#171717] text-[50px] font-semibold">POPULAR IN WOMEN</h1>
        <hr className="popular_hr"/>
        <div className="mt-12 flex gap-8">
          {data_product.map((item, i) => {
            return (
              <Items
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Popular;
