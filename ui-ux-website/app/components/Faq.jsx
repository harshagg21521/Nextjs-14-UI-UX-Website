"use client";
import React from 'react'
import * as Accordian from "@radix-ui/react-accordion";
import Plus from "../../public/assets/Plus.svg"
import Image from 'next/image';

const items=[
    {
        question:"lorem Lorem Ipsum er ganske enkelt fyldtekst fra print- ? ",
        answer:"Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien. Lorem Ipsum har været standard fyldtekst siden 1500-tallet, hvor en ukendt trykker sammensatte en tilfældig spalte for at trykke en bog til sammenligning af forskellige skrifttyper. Lorem Ipsum har ikke alene overlevet fem århundreder, men har også "

    },
    {
        question:"lorem Lorem Ipsum er ganske enkelt fyldtekst fra print- ? ",
        answer:"Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien. Lorem Ipsum har været standard fyldtekst siden 1500-tallet, hvor en ukendt trykker sammensatte en tilfældig spalte for at trykke en bog til sammenligning af forskellige skrifttyper. Lorem Ipsum har ikke alene overlevet fem århundreder, men har også "

    }, 
    {
        question:"lorem Lorem Ipsum er ganske enkelt fyldtekst fra print- ? ",
        answer:"Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien. Lorem Ipsum har været standard fyldtekst siden 1500-tallet, hvor en ukendt trykker sammensatte en tilfældig spalte for at trykke en bog til sammenligning af forskellige skrifttyper. Lorem Ipsum har ikke alene overlevet fem århundreder, men har også "

    },
    {
        question:"lorem Lorem Ipsum er ganske enkelt fyldtekst fra print- ? ",
        answer:"Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien. Lorem Ipsum har været standard fyldtekst siden 1500-tallet, hvor en ukendt trykker sammensatte en tilfældig spalte for at trykke en bog til sammenligning af forskellige skrifttyper. Lorem Ipsum har ikke alene overlevet fem århundreder, men har også "

    }, 
    {
        question:"lorem Lorem Ipsum er ganske enkelt fyldtekst fra print- ? ",
        answer:"Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien. Lorem Ipsum har været standard fyldtekst siden 1500-tallet, hvor en ukendt trykker sammensatte en tilfældig spalte for at trykke en bog til sammenligning af forskellige skrifttyper. Lorem Ipsum har ikke alene overlevet fem århundreder, men har også "

    }
];

function Faq() {
  return (
    <div className='flex flex-col w-full py-[48px] lg:py-[60px] lg:flex-row lg:gap-x-6'>
        <div className='lg:w-1/3 lg:py-[42px] lg:pr-[56px]'>
            <h3 className='text-[#EB2891] text-[14px] font-medium lg:text-base'>Frequently Asked Questions</h3>
            <h1 className='py-4 text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]'>Lets clarify some of your questions</h1>
            <p className='text-[#36485C] pb-[24px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iusto, asperiores rem enim corrupti suscipit quidem </p>
        </div>
        <div className='lg:w-2/3'>
            <Accordian.Root 
            type='single'
            defaultValue='item-1'
            collapsible
            className='flex flex-col gap-y-4'>
                {items.map((item,index)=>(
                    <div key={index}>
                        <Accordian.Item value={`item-${index+1}`} className='bg-[#E3F1FF] p-[16px] rounded-[8px]'>
                            <Accordian.Header>
                                <Accordian.Trigger className='flex w-full items-center justify-between'
                                 >
                                    <p className='text-left font-medium text-[#172026] lg:text-[18px]'>{item.question}</p>
                                    <span> 
                                        <Image src={Plus} alt='see more' className='h-10 w-10 lg:w-6 lg:h-6'/>
                                    </span>
                                </Accordian.Trigger>
                            </Accordian.Header>
                            <Accordian.Content>
                                <p className='pt-2 text-[#36485C]'>{item.answer}</p>
                            </Accordian.Content>
                        </Accordian.Item>
                    </div>
                ))}
            </Accordian.Root>
        </div>
    </div>
  )
}

export default Faq