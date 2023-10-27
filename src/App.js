import './App.css';
import Registration from './Components/Registration';
import Login from './Components/Login';
import { Signin } from './Components/Signin';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormGroupExample from "./Components/Login"
const App=()=>{
  return (
    <div className="App">
      {/* <Signin/> */}
      <Registration/>
      {/* <FormGroupExample/> */}
     
    </div>
  );
}

export default App;
