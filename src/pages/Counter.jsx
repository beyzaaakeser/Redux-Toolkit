import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase,decrease,setCount } from '../redux/slices/counterSlice';

const Counter = () => {
  const { count } = useSelector((store) => store.counterReducer);

  const dispatch = useDispatch();
  return (
    <div className='min-h-100 mt-40 '>
      <div className="flex gap-3 items-center justify-center">
        <button onClick={() => dispatch(decrease())} className="border text-3xl font-bold inline-flex items-center justify-center rounded-md px-3 py-1 text-red-700">
          -
        </button>
        <span className="border text-3xl font-bold inline-flex items-center justify-center rounded-md px-3 py-1 text-white">
          {count}
        </span>
        <button onClick={() => dispatch(increase())}  className="border text-3xl font-bold inline-flex items-center justify-center rounded-md px-3 py-1 text-green-700">
          +
        </button>
        <button onClick={()=> dispatch(setCount(99))} className="border text-3xl font-semibold inline-flex items-center justify-center rounded-md px-3 py-1 text-yellow-700">
          Set Number
        </button>
      </div>
    </div>
  );
};

export default Counter;
