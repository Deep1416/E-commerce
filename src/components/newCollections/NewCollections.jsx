import React from "react";
import new_collection from "../../Assets/new_collections";
import Items from "../item/Items";

const NewCollections = () => {
  return (
    <div className="flex flex-col items-center gap-[10px] h-[90%] mb-[100px]">
      <h1 className="text-[#171717] text-[50px] font-semibold">NEW COLLECTIONS</h1>
      <hr className="popular_hr" />
      <div style={{ gridTemplateColumns: '1fr 1fr 1fr 1fr' }} className="grid mt-[50px] gap-[30px]">
        {new_collection.map((item, i) => (
          <Items
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default NewCollections;
