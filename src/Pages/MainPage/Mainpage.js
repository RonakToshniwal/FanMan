import { useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
import Navbar from "../NavBar/Navbar";
import { useNavigate } from "react-router-dom";
import "./Mainpage.css"
function Mainpage (){
    const navigate=useNavigate()
    useEffect(() => {
        if (!localStorage.getItem("userId")){
            navigate('/')
        }
      });
    const {isLogged,userId}=useSelector((state)=>state)
    console.log(isLogged)
    
    
    
    return(<div>
        <Navbar/>
        </div>
    )
}
export default Mainpage