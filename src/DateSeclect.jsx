import React, { useContext, useState } from 'react'
import CalenderCon from './CalenderCon';
import { MyContext } from './context/Context';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const DateSeclect = () => {
  const {startDate, endDate, setStartDate, setEndDate}  = useContext(MyContext)
  const handleSubmit = () =>{
    toast.error('Start date is greater than End date',{
      autoClose:2000
    })
  }
  return (
    <div className='date'>
      <div className="date__select">
        <h2>Start Date</h2>
        <CalenderCon date={startDate} setDate={setStartDate} />
      </div>
      <div className="date__select">
        <h2>End Date</h2>
        <CalenderCon date={endDate} setDate={setEndDate} /> 
      </div>
      <div>
        <button onClick={handleSubmit}>
          submit
        </button>
        <ToastContainer />
      </div >
    </div>
  )
}

export default DateSeclect;
