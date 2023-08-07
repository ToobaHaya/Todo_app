import React, { useState } from 'react'
import "./App.css"
import Todolist from "./components/Todo_list"
import Todo_item from './components/Todo_item';

function App() {
  const [listTodo,setListTodo]=useState([]);
  let addList = (inputText)=>{
    if(inputText!=='')
      setListTodo([...listTodo,inputText]);
  }
  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  return (
    <>
         <div className="main-container">
      <div className="center-container">

        <h2 className="app-heading">What's the Plan for today?</h2>
        <hr/>
        <br/>
        <Todolist addList={addList}/>
        <br/>
        {listTodo.map((listItem) => (
  <Todo_item key={listItem.id} item={listItem} deleteItem={deleteListItem} />
))}

      </div>
    </div>
    </>
  )
}

export default App
