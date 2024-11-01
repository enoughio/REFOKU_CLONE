import React from 'react'

const Stripe = ({ item, isLast }) => {
  const { url, number } = item;
  return (
    <div className={`flex justify-between border-y-2 px-4 ${!isLast ? 'border-r-2' : ''} py-6 h-20 w-[16.66%]`}>
      <img className='h-[80%]' src={url} alt="Stripe image" />
      <h4 className='font-semibold'>{number}</h4>
    </div>
  );
};

export default Stripe