
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
import Async from "./JS/Async";
import Sum from "./Sum";




const App = ()=> {
  return(
    <Router>
         <Switch>
         <Route path="/sum"  component={Sum}/>
         <Route path="/js/async"  component={Async}/>
        <Route path="/learn/user"  component={Learn}/>
        <Route path="/learn/login"  component={Login}/>
        <Route path="/learn" component={CreateUser}/>
        <Route path=""   component={Home}/>
        
        </Switch>

    </Router>
  
  )
}

  

export default App;


      