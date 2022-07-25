import React,{useState} from 'react';
import './style.css'

function EditPopUp(props){
    const [input,setInput]=useState('');
    const [todos,setTodos] = useState([]);
    
    
return(props.editTrigger) ?(
    <div className="popUp">
    <div className="popUp-inner" >

         {props.children}
    </div>
    </div>
) :"";
}
export default EditPopUp;