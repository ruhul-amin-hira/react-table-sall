const formateDate = (date) => {

  // Create a new Date object to represent the current date and time
  const currentDateAndTime = date ? new Date(date) : new Date()

  // Get the individual date and time components
  const year = currentDateAndTime.getFullYear(); // Current year
  const month = String(currentDateAndTime.getMonth() + 1).padStart(2, '0'); // Current month (months are 0-based)
  const day = String(currentDateAndTime.getDate()).padStart(2, '0'); // Current day
  const hours = String(currentDateAndTime.getHours()).padStart(2, '0'); // Current hour
  const minutes = String(currentDateAndTime.getMinutes()).padStart(2, '0'); // Current minute
  const seconds = String(currentDateAndTime.getSeconds()).padStart(2, '0'); // Current second
  const milliseconds = String(currentDateAndTime.getMilliseconds()).padStart(3, '0'); // Current millisecond

  // Create the formatted date and time string
  const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
  return formattedDateTime;
}

export default formateDate; 
