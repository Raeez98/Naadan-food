
import Home from "./Home";
import Learn from "./Learn"
import Login from './Login'
// import Learn1 from "./learn1"

import{
  BrowserRouter as Router,
  Switch,Route 
 }
 from "react-router-dom";
import CreateUser from "./CreateUser";




const App = ()=> {
  return(
    <Router>
         <Switch>
         
         
        <Route path="/learn/user"  component={Learn}/>
        <Route path="/learn/login"  component={Login}/>
        <Route path="/learn" component={CreateUser}/>
        <Route path=""   component={Home}/>
        
        </Switch>

    </Router>
  
  )
}

  

export default App;


      