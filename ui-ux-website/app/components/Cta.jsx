import Image from 'next/image'
import React from 'react'
import Aroow from "../../public/assets/arrow.png"

function Cta() {
  return (
    <div className='w-full rounded-[16px] bg-gradient-to-br from-yellow-600 to-red-600 py-[56px] px-[32px] text-center lg:my-[60px] lg:px-[324px] lg:py-[89px]'>
        <h1 className='text-white text-[32px] font-medium lg:text-[56px] leading-[64px]'>Monitor your website like a pro</h1>
        <p className='text-white pt-[24px] lg:pt-[48px] lg:text-[18px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi consequatur eum nisi nobis autem nihil, voluptas omnis. Dolorum sapiente consequatur eos pariatur, cumque iste consequuntur cupiditate, quasi, hic ex dolore?
        </p>
        <div className='mt-[40px] flex flex-col w-full items-center lg:flex-row lg:mt-[56px] lg:justify-center gap-x-[40px]'>
            <button className='py-[16px] px-[32px] bg-white rounded-[4px] text-yellow-600 w-fit font-medium'>Try for free</button>
            <button className='flex w-full items-center justify-center gap-x-3 mt-[32px] text-white font-medium lg:w-fit lg:mt-0'>Contact Sales <span><Image src={Aroow} alt='Learn More'/></span></button>
        </div>
    </div>
  )
}

export default Cta