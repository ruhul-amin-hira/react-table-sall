import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import formateDate from './utils/dateFormatter';



const DatePicker = ({date, setDate}) => {
    const [value, onChange] = useState(date);
    console.log(value)
   // console.log(formateDate(value))
   useEffect(()=>{
    setDate(value)
   }, [value, setDate])

    return (
      <div>
        <Calendar onChange={onChange} value={value} maxDate={new Date()} />
      </div>
    );
}

export default DatePicker
