import React from "react";

function App() {

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }
  return (
<<<<<<< Updated upstream
    <div className="App">
      <h1>Hello world</h1>
=======
    <div className="app">
      <main>
        <div className="search-box">
          <input 
            type="text" 
            className="search-bar"
            placeholder="Search..."
          />
        </div>
        <div className="location-box">
          <div className="location">New York City, US</div>
          <div className="data">{dateBuilder(new Date())}</div>
        </div>
      </main>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
