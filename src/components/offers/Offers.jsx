import React from 'react'
import exclusive_image from "../../Assets/exclusive_image.png"

const Offers = () => {
  return (
    <>
    <div className='offers'>
        <div className='flex-1 flex flex-col justify-center'>
            <h1 className='text-[#171717] text-7xl font-semibold'>Exclusive</h1>
            <h1 className='text-[#171717] text-7xl font-semibold'>Offer For You</h1>
            <p className='text-[#171717] text-[22px] font-semibold'>ONLY ON BEST SELLERS PRODUCTS</p>
            <button className='w-[282px] h-[70px] bg-[#ff4141] border-none text-white
             text-[22px] rounded-[35px] font-medium mt-[30px] cursor-pointer'>Check Now</button>
        </div>
        <div className='flex-1 flex items-center justify-end pt-[50px]'>
            <img src={exclusive_image} alt="" />
        </div>
    </div>
    </>
  )
}

export default Offers