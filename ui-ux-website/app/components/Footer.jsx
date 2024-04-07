import Logo from "../../public/assets/Logo.svg"
import Facebook from "../../public/assets/Facebook.svg"
import Twitter from "../../public/assets/X.svg"
import Feed from "../../public/assets/Feed.svg"
import Image from "next/image"

export function Footer(){
    return(
        <>
        <div className="pt-[80px] pb-[40px]">
            <div className="flex items-center justify-center gap-x-[12px]" >
                <Image src={Logo} alt="logo"/>
                <p className="font-bold text-[#36485C] text-[17px]">Harsh Aggarwal</p>
            </div>
            <ul className="flex flex-col gap-x-[50px] items-center gap-y-[32px] pt-[56px] text-[#36485C] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5">
                <li>Features</li>
                <li>Pricing</li>
                <li>Enterprise</li>
                <li>Careers</li>
            </ul>
            <p className="pt-[56px] text-center text-[14px] text-[#5F7896] font-medium sm:pt-5">@ Copyright 2024 , Harsh Aggarwal. All rights reserved.</p>
            <div className="flex items-center justify-center gap-x-[56px] pt-[40px]">
                <Image src={Facebook} alt="facebook"/>
                <Image src={Twitter} alt="Twitter"/>
                <Image src={Feed} alt="Feed"/>
            </div>
        </div>
        </>
    )
}