import './App.css';
import { useState } from 'react';

function App() {
  const [listName, setListName] = useState("");
  const [list, setList] = useState([]);

  function toEdit(index) {

    const newlist = [...list];
    const arr = newlist.filter((val, i) => {
      return (i === index)
    })
    setListName(arr);
    const array = newlist.filter((val, i) => {
      return (i !== index)
    })
    setList(array);


  }


  function listItem() {
    if (listName === "") {
      return alert("Pls Write Item 👍");
    }
    setList((oldItem) => {
      return [...oldItem, listName];
    });
    setListName("");
  }

  function toRemove(index) {
    alert('Are you sure you want to delete?');

    const newlist = [...list]
    newlist.splice(index, 1);
    setList(newlist);

  }

  const HandleChange = ((e) => {

    setListName(e.target.value);


  });
  return (

    <div className="App">

      <h1 id='to-do-list'> 📔 TO do list app</h1>
      <br></br>
      <input type={'text'} placeholder=" 📝 Write Item" value={listName} onChange={HandleChange}></input>
      <button style={{ color: "black" }} onClick={listItem} >Add 🙂</button>
      <ul>
        {list.map((item, index) => {
          return <li key={index} style={{ color: "black" }}>{item} <button onClick={() => toEdit(index)}>✏️</button>
            <button style={{ color: "" }} onClick={() => toRemove(index)}> ❎</button>
          </li>
        })}


      </ul>
    </div>
  );
}

export default App;
