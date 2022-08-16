import React from 'react';

export const TodoItem = ({todo,onDelete}) => {
  console.log("dsajdgj",onDelete)

 return (
   <div>
     <h4>{todo?.name}</h4>
      <p>{todo?.description}</p>
     <button  className="btn btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
     <hr/> 
   </div>
  
 
)
}