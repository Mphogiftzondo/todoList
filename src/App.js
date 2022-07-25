//import logo from './logo.svg';
//mport './App.css';
import Login from './login';
import Register from './register';
import Todolist from './todolist';

import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <Router>
       <Switch>
      <Route  exact path="/">   <Login/></Route>
         <Route exact path="/register"><Register/></Route>
         <Route exact path="/todo"><Todolist/></Route>
         </Switch>
         </Router>
    </div>
  );
}

export default App;
