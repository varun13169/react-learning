import React, { useState } from 'react';


function ExpenseForm(props) {
    const [titleVal, setTitle] = useState('')
    const [amountVal, setAmount] = useState('')
    const [dateVal, setDate] = useState('')

    function submitHandler(e) {
        e.preventDefault();

        const vaal = {
            title: titleVal,
            amount: amountVal,
            date: new Date(dateVal)
        }
        console.log(vaal)


        setTitle('')
        setAmount('')
        setDate('')
    }

    function titleChangeHandler(e) {
        setTitle(e.target.value)
    }
    function amountChangeHandler(e) {
        setAmount(e.target.value)
    }
    function dateChangeHandler(e) {
        setAmount(e.target.value)
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Title</label>
                    <input type='text' value={titleVal} onChange={titleChangeHandler}/>
                </div>
                <div>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={amountVal} onChange={amountChangeHandler}/>
                </div>
                <div>
                    <label>Data</label>
                    <input type='date' min='2019-01-01' max='2022-12-31'  onChange={dateChangeHandler}/>
                </div>
                <div>
                    <button type='submit'>Add Expense</button>
                </div>
            </form>
        </div>
    )

}


export default ExpenseForm;