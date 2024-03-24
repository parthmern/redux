import React, { useEffect } from 'react'
import { useSelector } from "react-redux";

import { useDispatch} from "react-redux";
import { decrement, increment } from './toolkit/slices/counterSlice';


export const Home = () => {

    const value = useSelector( (state)=> state.counter.value )
    const dispatch = useDispatch();

    useEffect(()=>{
        console.log("changed value", value);
    }, [value])

  return (
    <div>

        <h2>{value}</h2>

        <button onClick={()=>dispatch( increment() )}>increment</button>
        <button onClick={()=>dispatch( decrement() ) }>decrement</button>

    </div>
  )
}
