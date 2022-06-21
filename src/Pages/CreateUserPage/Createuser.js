import "./Createuser.css"
import {DropdownDate} from "react-dropdown-date";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Backconn from "../../BackConn/BackConn";
const Createuser =() =>{
    let navigate = useNavigate();

    
    let dateClasses={
        dayContainer: 'DayBlock',
        yearContainer: 'YearBlock',
        monthContainer: 'MonthBlock',
        year: 'form-control year classes',
        month: 'form-control month classes',
        day: 'form-control day classes',
      }
    const [gender,changegender]=useState("male")
    const [month,monthchange]=useState("Select Month")
    const [day,daychange]=useState("Select Day")
    const [year,yearchange]=useState("Select Year")
    const [email,emailchange]=useState("")
    const [pass,passchange]=useState("")
    const [conpass,conpasschange]=useState("")
    const [name,changename]=useState("")
    const defaultValues={
        year: year,
        month: month,
        day: day
    }
    
    const nameChnageHandler =(e)=>{
        changename(e.target.value)
        console.log(name)
    }

    const genderChnageHandler =(e)=>{
        changegender(e.target.value)
        console.log(gender)
    }
    const emailChnageHandler =(e)=>{
        emailchange(e.target.value)
        console.log(email)
    }

    const passChangeHandler =(e)=>{
        passchange(e.target.value)
        console.log(pass)
    }
    const conpassChangeHandler =(e)=>{
        conpasschange(e.target.value)
        console.log(conpass)
    }
    const onSubmitHandler =(e)=>{
        e.preventDefault()
        if (pass !=conpass){
            alert("password does not match try again")
            return null
        }
        const conn = new Backconn()
        conn.addUser({
            "email":email,
            "name":name,
            "password":pass,
            "dob":day+"-"+month+"-"+year,
            "gender":gender
        }).then((res)=>{
            if (res.data.message=='Email Already Exist '){
                console.log("Hello")
                alert(res.data.message)
            }
            else{
                navigate("/")
            }
            
        })
        

    }


    return(
        <div className="CreateUser">
            <h1>FanMan</h1>
        
    <form className='NewUserForm'>
    
        <h3>Create a new account</h3>
        <hr></hr>
  
  <input type="email" className="NewUserMail form-control" placeholder="Enter Email" name="email" required onChange={emailChnageHandler} />  

  <input type="password" placeholder="Enter Password" className="NewUserPass form-control" name="password" required onChange={passChangeHandler} />
  <input type="password" placeholder="Re-Enter Password" className="NewUserPass form-control" name="password"  required onChange={conpassChangeHandler}/>  
  <input type = 'text' placeholder="Enter FullName" className="NewUserName form-control" name="Name" required onChange={nameChnageHandler}></input>
  <DropdownDate onMonthChange={(mon)=>monthchange(mon)}
  onYearChange={(yea)=>yearchange(yea)}
  onDayChange={(da)=>{daychange(da)}}
  
  defaultValues={defaultValues}
  classes={dateClasses}
  ></DropdownDate>
      <div onChange={genderChnageHandler}>
        <label className="NewUserRadio"><input type="radio" className="NewUserRadio" value="Male" name="gender" /> Male </label>
        <label className="NewUserRadio"><input type="radio" className="NewUserRadio" value="Female" name="gender" /> Female</label>
        <label className="NewUserRadio"><input type="radio" className="NewUserRadio" value="Other" name="gender" /> Other</label> 
      </div>

  <button type="submit" className="btn btn-success " onClick={onSubmitHandler}>Login</button>   
  <a href="/"> Already a User?  </a> 

   
  </form>   
        </div>
    )
}
export default Createuser