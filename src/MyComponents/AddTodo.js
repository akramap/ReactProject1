import React, { useState } from "react";

export const AddTodo = ({addTodo}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
      e.preventDefault();
      if (!title || !desc) {
          alert("Title or Description cannot be blank");
      }
      else {
        console.log("************************12345");

          addTodo(title, desc);
          setTitle("");
          setDesc("");
      }
  }
  return (
    <div className="container">
      <h3>Add a Todo</h3>

      <form onSubmit={submit}>
        <div className="container"></div>
        <div class="mb-3">
          <label htmlFor="title" class="form-label">
            Todo Title
          </label>
          <input
            type="text"
            class="form-control"
            id="title"
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label htmlFor="desc" class="form-label">
            Todo Description
          </label>
          <input
            type="text"
            class="form-control"
            id="desc"
            value={desc}
            onChange={(e)=> setDesc(e.target.value)}
          />
        </div>
  
        <button type="submit" class="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};
