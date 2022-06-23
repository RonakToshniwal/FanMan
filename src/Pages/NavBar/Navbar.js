import { useDispatch ,useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Navbar.css"
function Navbar (props){
    const navigate=useNavigate()
    const LogoutHandler = () =>{
        localStorage.removeItem("userId")

        navigate('/')
        
    }
    const ProfileHandler =() =>{
        props.tabChange('P')
    }
    
    
    return(<div>
        
        <nav className="HomeNavBar">
            <h1>Finman</h1>
            <div className="ButtonContainer">
            <button className="btn btn-light">Home</button>
            <button className="btn btn-light">Aticles</button>
            <button className="btn btn-light" onClick={ProfileHandler}>Profile</button>
            <button className="btn btn-light" onClick={LogoutHandler}>Log Out</button>
            </div>
        </nav>
        </div>
    )
}
export default Navbar