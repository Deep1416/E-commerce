import React from "react";
import {Link} from "react-router-dom"
const Items = (props) => {
  return (
    <div className="w-[260px]">
      <Link to={`/product/${props.id}`}>
        {" "}
        <img  onClick={window.scrollTo(0,0)} className="item overflow-hidden" src={props.image} alt="" />
      </Link>
      <p className="my-1">{props.name}</p>
      <div className="flex gap-5">
        <div className="text-[#374151] text-lg font-semibold">
          ${props.new_price}
        </div>
        <div className="text-[#8c8c8c] text-lg font-medium line-through ">
          ${props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Items;
