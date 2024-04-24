import React from "react";
import start_icon from "../../Assets/star_icon.png";
import start_dull_icon from "../../Assets/star_dull_icon.png";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/Slice";
const ProductDisplay = (props) => {
  const { product } = props;

  const dispatch = useDispatch();

  return (
    <div className="flex my-0 mx-[170px]">
      <div className="flex gap-[17px]">
        <div className="flex flex-col gap-4">
          <img className="h-[163px]" src={product.image} alt="" />
          <img className="h-[163px]" src={product.image} alt="" />
          <img className="h-[163px]" src={product.image} alt="" />
          <img className="h-[163px]" src={product.image} alt="" />
        </div>
        <div className="w-[586px] h-[700px]">
          <img className="w-full h-full" src={product.image} alt="" />
        </div>
      </div>
      <div className="my-0 mx-[70px] flex flex-col">
        <h1 className="text-[#3d3d3d] text-[40px] font-bold ">
          {product.name}
        </h1>
        <div className="flex items-center mt-[13px] gap-[5px] text-[#1c1c1c] text-base">
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="flex my-[40px] mx-0 gap-[30px] text-2xl font-bold">
          <div className="text-[#818181] line-through">
            ${product.old_price}
          </div>
          <div className="text-[#ff4141]">${product.new_price}</div>
        </div>
        <div>
          A light weight, Usually Knitted , Pullover Shirt Close-Fitting and
          with a rounde neckLine and short Sleeves , warn as an UnderShirt or
          Outer Garment.
        </div>
        <div>
          <h1 className="mt-[55px] text-[#656565] text-[20px] font-semibold ">
            Select Size
          </h1>
          <div className="flex my-[30px] mx-0 gap-[20px]">
            <div className="py-[18px] px-[24px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer ">
              S
            </div>
            <div className="py-[18px] px-[24px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer ">
              M
            </div>
            <div className="py-[18px] px-[24px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer ">
              L
            </div>
            <div className="py-[18px] px-[24px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer ">
              XL
            </div>
            <div className="py-[18px] px-[24px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer ">
              XXL
            </div>
          </div>
        </div>
        <button
          className="py-5 px-10 w-[200px] text-base text-white font-semibold bg-[#ff4141] mb-10 border-none outline-none"
          // onClick={()=>addToCart(product.id)}
          onClick={() => dispatch(addToCart(product))}
        >
          ADD TO Cart
        </button>
        <p className="mt-[10px] ">
          <span className="font-semibold">Category :</span>Women , T-shirt ,
          Crop Top
        </p>
        <p className="mt-[10px]">
          <span className="font-semibold">Tags :</span>Moder , Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
