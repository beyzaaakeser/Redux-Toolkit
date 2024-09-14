import React from 'react';
import counterSlice from '../redux/slices/counterSlice';



const Counter = () => {
    console.log(counterSlice);
  return (
    <div>
      <div className='flex gap-2 items-center justify-center'>
        <button className="border text-3xl font-bold inline-flex items-center justify-center rounded-md px-3 py-1 text-red-700">
          -
        </button>
        <span className="border text-3xl font-bold inline-flex items-center justify-center rounded-md px-3 py-1 text-white">
          0
        </span>
        <button className="border text-3xl font-bold inline-flex items-center justify-center rounded-md px-3 py-1 text-green-700">
          +
        </button>
        <button className="border text-3xl font-semibold inline-flex items-center justify-center rounded-md px-3 py-1 text-yellow-700">
          SIFIRLA
        </button>
      </div>
    </div>
  );
};

export default Counter;
