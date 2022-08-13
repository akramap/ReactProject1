import React from 'react';
import './App.css';
import Header from './MyComponents/Header'
import {Footer} from './MyComponents/Footer'
import {TodoItems} from './MyComponents/Todo'
import {Todos} from './MyComponents/Todos'

let todosList = [{id:1,name:"Deployment",description:"resolve ocp issue and deploy"},{id:2,name:"ACM",description:"Clone the code from ACM Repo and start working"},{id:3,name:"Unit Test of HPD",description:"Unit Test of HPD"}]

const onDelete =()=>{
  console.log("Im on delete")
 // todosList= todosList.filter(item=>item.id!=todo.id);
}
function App() {
  
  return (
  <>
  <Header title="My React App" searchBar={true} />
    <TodoItems/>
    <Todos todos={todosList} onDelete={onDelete}/>
    <Footer/>
  </>
  );
}

export default App;