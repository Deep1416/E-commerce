import React from 'react'

const NewsLetter = () => {
  return (
    <div className='offers justify-center items-center flex-col gap-[30px]'>
        <h1 className='text-[#454545] text-[55px] font-semibold'>Get Exclusive offers on Your Email</h1>
        <p className='text-[#454545] text-[20px] '> Subscribe to our newletter and stay updated</p>
        <div className='flex items-center justify-between bg-white w-[730px] h-[70px] rounded-[80px] border border-[#e3e3e3e]'>
            <input type="email" placeholder='Your Email id' className='w-[500px] ml-[30px] border-none outline-none text-[#616161] text-[16px]' />
            <button className='w-[210px] h-[70px] rounded-[80px] bg-black text-white text-[16px]
            cursor-pointer'>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter