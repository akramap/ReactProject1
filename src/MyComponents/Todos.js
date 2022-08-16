import React from "react";
import { TodoItem } from "./Todo";

export const Todos = (props) => {
  const filterStyle = {
    minHeight: "70vh",
    margin: "40px auto",
  };
  return (
    <div className="container" style={filterStyle}>
      <h3 className="my-3">Todos List</h3>

      {props.todos.length
        ? props?.todos?.map((todo) => {
            return (
              <TodoItem todo={todo} key={todo.id} onDelete={props?.onDelete} />
            );
          })
        : "No Todos to Display"}
    </div>
  );
};
