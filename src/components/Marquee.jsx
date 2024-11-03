import React from 'react'

const Marquee = ({item}) => {

  return (
    <div className='flex   py-8 items-center gap-20 whitespace-nowrap overflow-hidden  w-full' >
        
            {item.map((url,index) => <img key={index} src={url} className='flex-shrink-0 w-[10vw]' />)}
            {item.map((url, index) => <img key={index} src={url}  className='flex-shrink-0 w-[10vw]' />)}
    
    </div>
  )
}

export default Marquee