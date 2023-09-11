import React, { useContext, useState } from 'react'
import CalenderCon from './CalenderCon';
import { MyContext } from './context/Context';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import formateDate from './utils/dateFormatter';


const DateSeclect = () => {
  const { startDate, endDate, setStartDate, setEndDate, setData } = useContext(MyContext);
  const  [isLoading, setIsLoading] = useState(false);
  const url = "http://103.149.143.33:8000/filter-dgr-data/";
  const handleSubmit = async () => {
    // console.log(startDate.toLocaleDateString() > endDate.toLocaleDateString())

     //Formating date
     const date1 = formateDate(startDate);
     const date2 = formateDate(endDate);
 
    //console.log(date1, date2)


    if (isLoading ) {
      return
    }

    setIsLoading(true);
    const compareDate = new Date(startDate) > new Date(endDate);
    //console.log(new Date(startDate) > new Date(endDate))
   
    if (compareDate) {
      toast.error('Start date is greater than End date', {
        autoClose: 2000
      })

      setIsLoading(false)
      return
    }

    // //Formating date
    // const date1 = formateDate(startDate);
    // const date2 = formateDate(endDate);

    // console.log(date1, date2)

    try {

      const result = await axios.post(url, {
        start: date1,
        end: date2
      })
      setIsLoading(false)
      setData(result.data)
     // console.log(result)
    } catch (error) {

      console.log(error)
      toast.error(error.toString())
    }

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
          {
            isLoading ? "Loading..." : "submit"
          }
          
         </button>
      <ToastContainer />
        </div  >
      </div>
    )
}

export default DateSeclect;
