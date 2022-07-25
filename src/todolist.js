
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './style.css';
import Popup from './addPopUp';
import Editpopup from './editPopUp';
import sunny from './icons/sunny.png';
import star1 from './icons/star.png';
import date from './icons/date.png';
import all from './icons/all.png'
import task from './icons/task.png'
import assign from './icons/assignment.png'
import alttask from './icons/taskAlt.png'
import add from './icons/add.png'
import edit from './icons/edit.svg'
import ac from './icons/accountircle.svg'
import denisty from './icons/denisty.svg'
import yellow from './icons/yellowstar.png'
import dlt from './icons/delete.svg'

const Todolist = () => {
  const [input, setinput] = useState('');
  const [buttonPopup, setButtonPopup] = useState(false);
  const [editButtonPopup, seteditButtonPopup] = useState(false);
  let [UpdateToDoList, setUpdateToDoList] = useState([]);

  let [List,setList] = useState([
    
  ])

  const [addTaskInput, setaddTaskInput] = useState({
    id: '',
    title: '',
    description: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setaddTaskInput(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

const removetask= (id)=>{
  setList(List.filter((todoListValue)=> todoListValue.id !==id ))
}

  const addTodo = () => {
    addTaskInput.id = List.length + 1 ;
    List.push(addTaskInput)
    setButtonPopup(false)
    // console.log(addTaskInput.id)
    // console.log(List)
  }

  const updateList = (data) => {
    setUpdateToDoList(data)
    console.log(UpdateToDoList)
    seteditButtonPopup(true)
}
const updateToDoList = () => {
  List[UpdateToDoList.id-1] = UpdateToDoList
  alert('Updated List Successfully')
  return seteditButtonPopup(false)
}
const handleChangeUpdate = e => {
  const { name, value,id } = e.target;
  setUpdateToDoList(prevState => ({
      ...prevState,
      [name]: value
  }));

}
let editPopUp = (
  
      <div>
          <h1>Add New Task</h1>
    
      
          <label>Title</label>
          <input type="text" name="title" value={UpdateToDoList.title} onChange={handleChangeUpdate} className="form-control" />
      
      
          <label>Description</label>
          <input type="text" name="description"  cols="30" rows="10" className="form-control" value={UpdateToDoList.description} onChange={handleChangeUpdate}></input>
  
          <button type="submit" className="btn" onClick={updateToDoList}>Update</button><button class="close-btn" >close</button>
      
  </div>
);

  let popAdd = <div className="popup">
    <h1>Add new task</h1>
    <input type="text" placeholder="Enter Title of the task" class="addTaskInput" name='title' value={addTaskInput.title} onChange={handleChange} />
    <input type="text" placeholder="Enter Descriptiom of the task" class="addTaskInput" name='description' value={addTaskInput.description} onChange={handleChange} />
    <br />
    <button onClick={addTodo} >ADD Task</button><button class="close-btn" onClick={() => setButtonPopup(false)}>close</button>
  </div>


  return (
    <body>
      <div class="main">

        <div class="left">
          <span class="dot"><h1 class="header">MG</h1></span>
          <p class="title">Mpho Zondo</p>
          <input class="Search" type="text" name="" placeholder="Search....." />
          <br />
          <a href="#">
            <img src={sunny} class="sunny" alt="sunny" /><h1 class="imageText">My Day</h1>
          </a>
          <a href="#">
            <img src={star1} class="star" alt="star" /><h1 class="imageText">Important</h1>
          </a>
          <a href="#">
            <img src={date} class="star" alt="star" /><h1 class="imageText">Planned</h1>
          </a>
          <a href="#">
            <img src={all} class="star" alt="star" /><h1 class="imageText">All</h1>
          </a>
          <a href="#">
            <img src={task} class="star" alt="star" /><h1 class="imageText">Completed</h1>
          </a>
          <a href="#">
            <img src={assign} class="star" alt="star" /><h1 class="imageText">Assigned to me</h1>
          </a>
          <a href="#">
            <img src={alttask} class="star" alt="star" /><h1 class="imageText">Task</h1>
          </a>
          <hr />
          <button class="addButton2"><img src={add} class="buttonIcon" alt="edit" />new list</button>

        </div>

        <div class="right">
          <div class="lefttitle">
            <h1>To Do List<div class="iconsDiv"><img src={ac} class="icons" alt="star" /><img src={denisty} class="icons" alt="star" /></div></h1>

          </div>
          <hr />.
          <Editpopup editTrigger={editButtonPopup} setTrigger={seteditButtonPopup}>
          {editPopUp}
          </Editpopup >
          {List.map((val, xid) => (
            <div class="list-item" key={xid}>

              <input type="radio" class="check" /><h2 class="list-title">{val.title}</h2>
              <div class="listDescription">{val.description}
                <div class="listIcons">
                  <img src={edit} class="icons" alt="edit" id={val.id} onClick={() => updateList(val)} />|
                  <img src={yellow} class="staricons" alt="star" id="star"/>|
                  <img src={dlt} class="icons" alt="delete"  onClick={() => removetask(val.id)} />
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>
            
          ))}

          <br />
          <button class="addButton" onClick={() => setButtonPopup(true)}><img src={add} class="buttonIcon" alt="edit" />Add Task</button>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            {popAdd}
          </Popup>
          
        </div>

      </div>

      <footer class="footer">&copy;mphogiftzondo</footer>
     
    </body>
  );
}
export default Todolist;