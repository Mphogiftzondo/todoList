
import {Link} from 'react-router-dom';
import React from 'react';
import './style.css'
const Register = () => {
    return(
        <body>
<form class="modal">
<h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <hr/>
      <label for="email"><b>Email</b></label><br/>
      <input type="text" placeholder="Enter Email" name="email" class="username" required/>
      <br/><br/>
      <label for="psw"><b>Password</b></label><br/>
      <input type="password" placeholder="Enter Password" name="psw"  class="password" required/><br/>
      <label for="psw-repeat"><b>Repeat Password</b></label><br/>
      <input type="password" placeholder="Repeat Password" name="psw-repeat" class="password" required/><br/>
      <label>
        <input type="checkbox"  name="remember" /> Remember me
      </label>
      <div class="clearfix">
        <button type="submit" class="signupbtn">Sign Up</button>
      </div>
</form>

<footer class="footer">&copy;mphogiftzondo</footer>
</body>

    );
}
export default Register;