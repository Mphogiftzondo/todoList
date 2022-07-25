
import {Link} from 'react-router-dom';
import React from 'react';
import './style.css'
import account from './icons/account.svg'

const Login = () => {
    const users =[
        {id:1,name:"mahesh",password:"mahesh123"},
        {id:2,name:"abc",password:"abc123"}
      ]
      
      const validation = (login, password) => {
        const user = users.find(user => login === user.name) // find the user with same name
        if (typeof user !== 'undefined') { // check the user. If we didn't find a object with same name, user will be undefined 
          return user.password === password // if passwords match it returns true
        }
        return console.log('doesnt exist')
      }
      
    
      

    return(
        <body>
        <div>
        <form class="modal">
                <h2>Login</h2>
                <img src={account}/>
                <hr/>
                <label for="uname"><b>Username</b></label>
      <br/>
      <input type="text" placeholder="Enter Username" name="username" class="username" required/>
      <br/>
      <label for="psw"><b>Password</b></label>
      <br/>
      <input type="password" placeholder="Enter Password" name="password" class="password" required/>
      <br/>
      <Link to={'/todo'}><button type="submit" >Login</button></Link>
      <br/>
      <label>
        <input type="checkbox"  name="remember" onClick={validation()}/> Remember me
      </label>
      <span >Forgot <a href="#">password?</a></span>
            </form>



        </div>
    <footer class="footer">&copy;mphogiftzondo</footer>
    </body>
    );
}
export default Login;