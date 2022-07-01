import { useEffect, useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import Navbar from "../NavBar/Navbar";
import { useNavigate } from "react-router-dom";
import "./Mainpage.css"
import Profile from "../Profile/Profile";
import Homepage from "../HomePage/Homepage";
function Mainpage (){
    const navigate=useNavigate()
    useEffect(() => {
        if (!localStorage.getItem("userId")){
            navigate('/')
        }});
    const {isLogged,userId}=useSelector((state)=>state)
    const [tab,changetab]=useState("H")
    console.log(tab)
    return(<div>
        <Navbar tabChange={changetab}/>
        <Homepage/>
        {(tab=='P')?(<Profile/>):(<h1>Its Home</h1>)}
        
        
        </div>
    )
}
export default Mainpage