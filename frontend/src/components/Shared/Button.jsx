import React from 'react'

export const Button = (props) => {
  return (
    <div>
        <div>
            <button className='bg-red-500 px-3 py-1 rounded-xl text-white font-bold shadow-md hover:bg-red-700 active:scale-95'>{props.title}</button>
        </div>
    </div>
  )
}
