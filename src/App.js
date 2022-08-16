import "./App.css";
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
import { TodoItem } from "./MyComponents/Todo";
import { Todos } from "./MyComponents/Todos";
import { React, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const todosArr = JSON.parse(localStorage.getItem("todos"));
  console.log("*******16-8-22", todosArr);

  const onDelete = (todo) => {
    console.log("Im on delete", todo);
    //  todosList= todosList.filter(item=>item.id!=todo.id);
    setTodos(todos.filter((item) => item !== todo));
  };

  const addTodo = (title, desc) => {
    console.log("Im on addTodo", title, desc);
    let id;
    if (!todos.length) {
      id = 1;
    } else {
      id = todos[todos.length - 1].id + 1;
    }

    const myTodo = {
      id,
      name: title,
      description: desc,
    };

    //  todosList= todosList.filter(item=>item.id!=todo.id);
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };
  let [todos, setTodos] = useState(todosArr);
  console.log("$$$$$$", todos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Router>
      <Header title="My React App" searchBar={true} />
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <TodoItem />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            );
          }}
        ></Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
