import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Backconn from '../../BackConn/BackConn';
import './Login.css'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";




function Login(){
    
    const [email,emailchange]=useState("")
    const [pass,passchange]=useState("")
    const navigate=useNavigate()

    const {isLogged,userId} = useSelector( (state)=> state );
    console.log(isLogged,userId)
    const dispatch = useDispatch();
    useEffect(() => {
        if (localStorage.getItem("userId")){
            navigate('home')
        }
      });
    

    const onSubmitHandler =(e)=>{
        e.preventDefault()
        const conn = new Backconn()
        conn.login({
            "email":email,
            "password":pass,
        }).then((res)=>{

            if(res.data.isAuth=="True"){
            dispatch({type:"isLogged" ,value:true})
            localStorage.setItem('userId',res.data.id)
            navigate('home/')
            }
        })
    }
    const emailchangehandler =(e)=>{
        emailchange(e.target.value)
        console.log(email)
    }
    const passwordchangehandler =(e)=>{
        passchange(e.target.value)
        console.log(pass)
    }
    return(<div className='Loginpage'>
        <div  className="LoginPageText"><h1>Finman</h1><br/><p>A place to manage your personal expenses and categorize transactions </p></div>
        <div className='LoginFormBlock'>
        <form className='LoginForm'>
  
        <input type="email" className="Loginpass form-control" placeholder="Enter Email" name="email" required onChange={emailchangehandler}/>  
     
        <input type="password" placeholder="Enter Password" className="Loginpass form-control" name="password" required onChange={passwordchangehandler}/>  
        <button type="submit" className="btn btn-success" onClick={onSubmitHandler}>Login</button>    
         <a href="#">Forgot password? </a>   
         <hr></hr>
         
        </form> 
        <Link to='/newuser'>  
        <button className="btn btn-outline-info" >Create New Account</button>
        </Link>
    </div>  
    </div>
    )
}
export default Login