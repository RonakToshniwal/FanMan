import { useDispatch ,useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Navbar.css"
function Navbar (){
    const navigate=useNavigate()
    const LogoutHandler = () =>{
        localStorage.removeItem("userId")

        navigate('/')
        
    }
    
    
    return(<div>
        
        <nav className="HomeNavBar">
            <h1>Finman</h1>
            <div className="ButtonContainer">
            <button className="btn btn-light">Home</button>
            <button className="btn btn-light">Aticles</button>
            <button className="btn btn-light">Profile</button>
            <button className="btn btn-light" onClick={LogoutHandler}>Log Out</button>
            </div>
        </nav>
        </div>
    )
}
export default Navbar