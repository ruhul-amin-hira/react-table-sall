/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react'
import DatePicker from "./DatePicker"

const CalenderCon = ({date, setDate}) => {

  const dateFomate = date.toISOString().split("T")[0]

  const [show, setShow] = useState(false)
  const inRef = useRef(null)


  useEffect(()=>{
    const onBodyClick = (e) =>{
      if(inRef.current && inRef.current.contains(e.target) || e.target.closest(".date__con")){
        return;
      }
      setShow(false)
    }

    if(show){
      document.body.addEventListener("click", onBodyClick)
    }
    return () =>{
      document.body.removeEventListener("click", onBodyClick)
    }

  },[show])


  return (
    <div>
      <div className="date__input" ref={inRef}>
        <p  onClick={()=>{setShow(!show)}} >{dateFomate}</p>
      </div>
      {
        show && <div className="date__con">
        <DatePicker date={date} setDate={setDate} />
      </div>
      }
      
    </div>
  )
}

export default CalenderCon;
