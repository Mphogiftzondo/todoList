import React,{useState} from 'react';
import './style.css'

function AddPopUp(props){
    const [input,setInput]=useState('');
    const [todos,setTodos] = useState([]);
   
    
    
return(props.trigger) ?(
    <div className="popUp">
    <div className="popUp-inner" >

         {props.children}
    </div>
    </div>
) :"";
}
export default AddPopUp;