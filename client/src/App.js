import { useState } from 'react';
import './App.css';
import { getWeatherDetails } from './helper/helper';
import Formbox from './components/formbox';
import WeatherDetails from './components/weatherDetails';
function App() {
  const [details, setDetails] = useState();
  async function getDetails(city) {
    if (city !== '') {
      const response = await getWeatherDetails(city)
      setDetails(response);
    } else {
      console.log("City name Required")
    }
  }
  return (
    <div className="mainBox">
      <div className=" rightBox blurrybackground">
        <Formbox getDetails={getDetails} details={details}></Formbox>
      </div>
      <div className="leftBox">
        <h1 className='titleCity'>{details ? details.location.name : " "}</h1>
        <div className="weatherDetails">
          {details ? <WeatherDetails details={details}></WeatherDetails> : ""}
        </div>
      </div>
    </div>

  );
}

export default App;
