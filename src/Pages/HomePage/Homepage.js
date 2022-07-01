
import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Expenseform from './HomeComponents/Expenseform';
const Homepage =()=>{   
    const [eflag,eflagchnage]=useState(true)
    const expenseButtonChange = (e) =>{
        e.preventDefault()
        eflagchnage(!eflag)
    }
    return(
        <div class>
        <button onClick={expenseButtonChange}>Add Expense</button>
        {eflag?<Expenseform/>:<></>}
        
        </div>
        
    )
    
}
export default Homepage