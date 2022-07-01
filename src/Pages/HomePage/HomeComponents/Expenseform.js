import { useState } from "react"
import Backconn from "../../../BackConn/BackConn"
import "./Expenseform.css"

const Expenseform =() =>{

    const  [amount,changeamount]=useState(0)
    const [remark,changeremark]=useState("")
    const [type,changetype]=useState("Housing or Rent")
    const [cat,changecat]=useState("Needs")
    const onChangeAmount = (e) =>{
        changeamount(e.target.value)
        console.log(amount)
    }
    const onChangeRemark = (e) =>{
        changeremark(e.target.value)
        console.log(remark)
    }

    const onChangeType = (e) =>{
        changetype(e.target.value)
        console.log(type)
    }

    const onChangeCat = (e) =>{
        changecat(e.target.value)
        console.log(cat)
    }

    const onSubmitHandler = (e) =>{
        e.preventDefault()
        const conn = new Backconn()
        conn.addExpense({
        Userid: localStorage.getItem("userId"),
        Amount:amount,
        Remark: remark,
        Type:type,
        Category: cat
        }).then(
            (res)=>{console.log(res.data)}
        )
    } 
    return(
        <div className="ExpenseFormContainer">
        <form className="form-group">
        <input type="number" placeholder="Enter Amount" step="0.01" class="form-control" name="amount" onChange={onChangeAmount}/>
        <input type="text" name="remark" placeholder="Enter Remark" class="form-control" onChange={onChangeRemark}/>
        <select name="type" class="form-control" onChange={onChangeType}>
            <option value="Housing or Rent">Housing or Rent</option>
            <option value="Transportation and Car Insurance">Transportation and Car Insurance</option>
            <option value="Travel Expenses">Travel Expenses</option>
            <option value="Food and Groceries">Food and Groceries</option>
            <option value="Utility Bills">Utility Bills</option>
            <option value="Cell Phone">Cell Phone</option>
            <option value="Childcare and School Costs">Childcare and School Costs</option>
            <option value="Pet Food and Care">Pet Food and Care</option>
            <option value="Pet Insurance">Pet Insurance</option>
            <option value="Clothing and Personal Upkeep">Clothing and Personal Upkeep</option>
            <option value="Health Insurance">Health Insurance</option>
            <option value="Monthly Memberships and Subscriptions">Monthly Memberships and Subscriptions</option>
            <option value="Life Insurance">Life Insurance</option>
            <option value="Homeowners Insurance">Homeowners Insurance</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Student Loans">Student Loans</option>
            <option value="Credit Card Debt">Credit Card Debt</option>
            <option value="Retirement">Retirement</option>
            <option value="Emergency Fund">Emergency Fund</option>
            <option value="Large Purchases">Large Purchases</option>
        </select>
        <select name="cat" class="form-control" onChange={onChangeCat}>
            <option value="Needs">Needs</option>
            <option value="Wants">Wants</option>
            <option value="Investments">Investments</option>
        </select>
        <button className="btn btn-primary ExpenseFormButton" onClick={onSubmitHandler}>Submit</button>
        </form>
        </div>
    )
    
}
export default Expenseform