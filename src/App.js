import logo from './logo.svg';
import './App.css';

// 1. How Many Days Between Two Dates - 15 minutes

// Create a function that takes two dates and returns the number of days between the first and second dates.

// Examples:
// getDays(
//   new Date("June 14, 2019"),
//   new Date("June 20, 2019")
// ) ➞ 6

// getDays(
//   new Date("December 29, 2018"),
//   new Date("January 1, 2019")
// ) ➞ 3
// // Dates may not all be in the same month/year.

// getDays(
//   new Date("July 20, 2019"),
//   new Date("July 30, 2019")
// ) ➞ 10

function getDaysBetweenDates(date1,date2){
  const date1_ms = date1.getTime()
  const date2_ms = date2.getTime()

  const diffrence_ms = Math.abs(date2_ms - date1_ms)

  const diffrence_days = Math.ceil(diffrence_ms / (1000 * 3600 *24));

  return diffrence_days

}


function App() {

  const date1 = new Date("July 20, 2019")
  const date2 = new Date("July 30, 2019")

  const daysDiffrence = getDaysBetweenDates(date1,date2)





  return (
    <div className="App">
      <p>Number Of days between two dates : {daysDiffrence}</p>
    </div>
  );
}

export default App;
