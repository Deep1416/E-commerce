import React from "react";
import data_product from "../../Assets/data";
import {Items} from "../../components"
const RelatedProducts = () => {
  return (
    <div className="flex flex-col items-center gap-[10px] h-[90%] ">
      <h1 className= "text-[#171717] text-[50px] font-semibold ">Related Products</h1>
      <hr className="popular_hr" />
      <div className="mt-[50px] flex gap-[30px]  ">
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
  );
};

export default RelatedProducts;
