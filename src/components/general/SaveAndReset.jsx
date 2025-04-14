import React from 'react'

function SaveAndReset(data) {
  return (
    <div className='h-14 w-full flex justify-between'>
        <button className='w-4/12 bg-white rounded-xl text-2xl font-semibold outline-none '>{data.button1}</button>
        <button className='w-4/12 bg-white rounded-xl text-2xl font-semibold outline-none '>{data.button2}</button>
    </div>
  )
}

export default SaveAndReset