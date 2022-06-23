import { useEffect, useState } from "react"
import Backconn from "../../BackConn/BackConn";
import './Profile.css'

const Profile = () => {
    const [data,createdata]=useState({})
    useEffect(() => {
        const conn = new Backconn();
        conn.getProfile({
            "id":localStorage.getItem("userId")
        }).then(
            (res)=>{createdata(res.data)}
        )
        },[]);
    return(<div className="ProfileContainer">
      <div className="ProfileImageContainer"> 
      <img src="https://icon-library.com/images/blank-person-icon/blank-person-icon-7.jpg" alt="Logo" />;
      <h2>{data.Name}</h2>
      </div>
        <div className="ProfileTableContainer table table-borderless">
        <table >
   <tbody>
     <tr>
       <td>Name</td>
       <td>{data.Name}</td>
     </tr>
     <tr>
       <td>Email</td>
       <td>{data.Email}</td>
     </tr>
     <tr>
       <td>DOB</td>
       <td>{data.DOB}</td>
     </tr>
     <tr>
       <td>Gender</td>
       <td>{data.Gender}</td>
     </tr>
  </tbody>
  </table>
  </div>
    </div>)
}
export default Profile