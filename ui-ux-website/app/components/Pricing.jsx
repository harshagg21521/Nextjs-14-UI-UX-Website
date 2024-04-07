import Image from 'next/image'
import React from 'react'
import Check from "../../public/assets/check.svg"

function Pricing() {
    return (
        <div className='py-[48px] lg:py-[60px]'>
            <h1 className='text-[#172026] text-center font-medium text-2xl lg:text-[42px]'>Flexible plans for you</h1>
            <p className='pt-[16px] pb-[40px] text-center text-[#36485C] lg:text-[18px]' >No hidden fees!</p>
            <div className='flex flex-col gap-y-6 gap-x-[24px] lg:flex-row'>
                <div className='w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between'>
                    <div >
                        <h3 className='font-medium text-[#4328Eb] text-[18px] lg:text-xl'>Free trial</h3>
                        <p className='pt-[12px] text-[#36485C] lg:text-[18px]'>
                            Perfect for testing the waters
                        </p>
                        <h2 className='pt-4 text-2xl font-medium lg:text-[32px]'>0$ <span className='text-[#5F7896]'>/mo</span></h2>
                        <ul className='flex flex-col gap-y-2 pt-4 text-[#5F7896]'>
                            <li className='flex items-center gap-x-2'>
                                <span>
                                    <Image src={Check} alt='included' />
                                </span>
                                Lorem ipsum dolor sit amet
                            </li>
                            <li className='flex items-center gap-x-2'>
                                <span>
                                    <Image src={Check} alt='included' />
                                </span>
                                Lorem ipsum dolor sit amet
                            </li>
                            <li className='flex items-center gap-x-2'>
                                <span>
                                    <Image src={Check} alt='included' />
                                </span>
                                Lorem ipsum dolor sit amet
                            </li>
                        </ul>
                    </div>
                    <button className='mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB]' >Start trial</button>
                </div>
                <div className='w-full rounded-[8px] bg-[#4328EB] p-6 flex flex-col lg:justify-between'>
                    <div >
                        <h3 className='font-medium text-white text-[18px] lg:text-xl'>Business</h3>
                        <p className='pt-[12px] text-[#F4F8FA] lg:text-[18px]'>
                            Perfect for small Businessess
                        </p>
                        <h2 className='pt-4 text-2xl font-medium text-white lg:text-[32px]'>500$ <span className='text-[#F4F8FA]'>/mo</span></h2>
                        <ul className='flex flex-col gap-y-2 pt-4 text-[#F4F8FA]'>
                            <li className='flex items-center gap-x-2'>
                                <span>
                                    <Image src={Check} alt='included' />
                                </span>
                                Lorem ipsum dolor sit amet
                            </li>
                            <li className='flex items-center gap-x-2'>
                                <span>
                                    <Image src={Check} alt='included' />
                                </span>
                                Lorem ipsum dolor sit amet
                            </li>
                            <li className='flex items-center gap-x-2'>
                                <span>
                                    <Image src={Check} alt='included' />
                                </span>
                                Lorem ipsum dolor sit amet
                            </li>
                            <li className='flex items-center gap-x-2'>
                                <span>
                                    <Image src={Check} alt='included' />
                                </span>
                                Lorem ipsum dolor sit amet
                            </li>
                            <li className='flex items-center gap-x-2'>
                                <span>
                                    <Image src={Check} alt='included' />
                                </span>
                                Lorem ipsum dolor sit amet
                            </li>   
                        </ul>
                    </div>
                    <button className='mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB]' >Get Started</button>
                </div>
                <div className='w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col'>
                    <div >
                        <h3 className='font-medium text-[#4328Eb] text-[18px] lg:text-xl'>Enterprise</h3>
                        <p className='pt-[12px] text-[#36485C] lg:text-[18px]'>
                            Perfect for big companies
                        </p>
                        <h2 className='pt-4 text-2xl font-medium lg:text-[32px]'>Custom</h2>
                        <p className='pt-4 text-[16px] text-[#36485C]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eum eligendi officia sunt eius vero expedita commodi laudantium quod a doloremque, ipsum, porro aut delectus voluptates dolorem quibusdam eaque suscipit?
                        </p>
                        <p className='pt-4 text-[16px] text-[#36485C]'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam blanditiis non cum, dicta similique neque repudiandae totam et consectetur modi iusto sunt, dolor facere a dolore eius aliquid deleniti sed?
                        </p>
                    </div>
                    <button className='mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB]' >Contact Us</button>
                </div>

            </div>
        </div>
    )
}

export default Pricing