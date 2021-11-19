
import Home from "./Home";
import Learn from "./Learn"
import Learn1 from "./learn1"
import{
  BrowserRouter as Router,
  Switch,Route 
 }
 from "react-router-dom";




const App = ()=> {
  return(
    <Router>
         <Switch>
         <Route path="/learn1" component={Learn1}/>
        <Route path="/learn"  component={Learn}/>
        <Route path=""   component={Home}/>
        
        </Switch>

    </Router>
  
  )
}

  

export default App;


      