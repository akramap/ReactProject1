import React from 'react';

export const TodoItems = ({todo,onDelete}) => {
  console.log("dsajdgj",onDelete)

 return (
   <div>
     <h4>{todo?.name}</h4>
      <p>{todo?.description}</p>
     <button  className="btn btn-danger" onClick={onDelete}>Delete</button>
   </div>
  
 
)
}