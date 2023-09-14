// import './App.css';
import {Route} from "react-router-dom";
import Home from "../src/views/home/home.component"
import Detail from "../src/views/detail/detail.component"
import Form from "../src/views/form/form.component"
function App() {
  return (
    <div>

      <Route exact path="/home" component={Home}/>
      <Route  path="/home/:id" component={Detail}/>
      <Route  path="/form" component={Form}/>
      


    </div>
    );
}

export default App;
