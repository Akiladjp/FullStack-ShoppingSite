import React from 'react'

export const Item = (props) => {
  return (
    <div className='flex mx-4  hover:scale-105 hover:shadow-xl rounded-lg pb-2'>
        <div className='flex flex-col w-52'>
            <img src={props.image} alt="" className='w-52 mx-auto rounded-lg'/>
            <p className='text-[12px] mt-3 ml-1'>{props.name}</p>
            <div className='flex justify-between w-[60%] text-[16px] mt-2  ml-1'>
                <div className='font-bold'>
                    ${props.new_price}
                </div>
                <div className='font-thin'>
                    ${props.old_price}
                </div>
            </div>
        </div>
    </div>
  )
}
