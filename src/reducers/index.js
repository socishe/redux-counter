import { combineReducers } from "redux";


 const countReducer = (count=0, action) => {
     if(action.type ==="INCREMENT"){
         return count + 1;
     }else if(action.type==="DECREMENT"){
        return count - 1;
     }

     return count;
 }
 const allReducer= combineReducers({
    count: countReducer
   })
 export default allReducer;