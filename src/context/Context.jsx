/* eslint-disable react/prop-types */
import {  createContext, useState } from "react";

export const MyContext = createContext();



// eslint-disable-next-line react/prop-types
export const ContextProvider = (props) => {

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    const value={
        startDate,
        setStartDate,
        endDate,
        setEndDate
    }

  return (
    <MyContext.Provider value={value}>
       {props.children}
    </MyContext.Provider>
  )
}
