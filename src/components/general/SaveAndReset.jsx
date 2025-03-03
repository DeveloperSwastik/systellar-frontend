import React from 'react'

function SaveAndReset(data) {
  return (
    <>
    <div className='flex justify-between mt-7'>
        <button className='bg-white m-1 px-6 py-3 rounded-xl text-2xl font-semibold outline-none '>{data.button1}</button>
        <button className='bg-white m-1 px-6 py-3 rounded-xl text-2xl font-semibold outline-none '>{data.button2}</button>
    </div>
    </>
  )
}

export default SaveAndReset