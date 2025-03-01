import React from 'react'

const Footer = (data) => {
  return (
    <>
        <div className="fixed left-0 bottom-3 w-full text-center">
            
            <button className="px-1">{data.text}</button>
            <button className="px-1 font-semibold">{data.button}</button>
            
        </div>
    </>
  )
}

export default Footer