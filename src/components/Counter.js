import React from 'react'
import {connect} from 'react-redux'

import { increment } from '../actions'
import { decrement } from '../actions'
import './Counter.css'
const Counter = (props) => {
    
    return (
        <div className="counter">
            <h2>Counter</h2>
            <div>
                <button onClick={()=>props.decrement()}>&ndash;</button>
                
                <span className="count">{props.count}</span>
                <button onClick={()=>props.increment()}>+</button>
            </div>
        </div>
    )
}
const mapStateToProps =(state)=>{
    return {
        count:state.count
           }
}
export default connect(mapStateToProps, {increment, decrement}) (Counter)
