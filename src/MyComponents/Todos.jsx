import React from 'react';
import {TodoItems} from "./Todo"


export const Todos = (props) => {
    
 return (
  <div className="container">
      {props?.todos?.map((todo)=>{
     return (<TodoItems todo={todo} key={todo.id} onDelete={props?.onDelete}/>)
    })}
  </div>
)
}