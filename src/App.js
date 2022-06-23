
import './App.css';
import Login from './Pages/LoginPage/Login';
import {
  BrowserRouter as Router,Routes,    Route} from "react-router-dom";
import Createuser from './Pages/CreateUserPage/Createuser';
import Mainpage from './Pages/MainPage/Mainpage';

function App() {
  return (
    
  <Router>
  <Routes>
     <Route exact path="/" element={<Login/>}></Route>
     <Route exact path="newUser/" element ={<Createuser/ >}></Route>
     <Route exact path="home/" element ={<Mainpage/>}></Route>
  </Routes>
  </Router>
  );
}

export default App;
