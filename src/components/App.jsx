import React, { useState } from "react";

function App() {
  const [inputText , channgeText] = useState("");
  const [todoItem, addItems] = useState([]);

  function handleChange(event){
    let input = event.target.value;
    channgeText(input);
  }
  function addEvent(event){
      addItems((prev)=>{
        return [...prev ,inputText]
      }
      )
    event.preventDefault();
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
      <form onSubmit={addEvent}>
        <input type="text" onChange={handleChange} value={inputText}/>
        <button>
          <span>Add</span>
        </button>
      </form>
      </div>
      <div>
        <ul>
          {todoItem.map((item)=>{
             return <li>{item}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
