import './formbox.css';
import { useState,useEffect } from 'react';
function Formbox({getDetails,details}) {
  const [city, setCity] = useState('');
  async function handleSubmit(e) {
    e.preventDefault();
    getDetails(city);
  }
  function handleChange(e){
    setCity(e.target.value);
  }
  useEffect(() => {
    console.log('Updated details:', details);
    
  }, [details]);
  const nan = "--"
return (
  <>

    <form onSubmit={handleSubmit}>
      <div>
        <input onChange={handleChange} type="text" name="city" id="cityinp" placeholder='Search' />
        <div id='lineInsideForm'></div>
      </div>
      <button type="submit"><ion-icon name="search"></ion-icon></button>
    </form>
    {/* <div className="line"></div> */}
    <h4 className='heading4'>Weather Details</h4>
    <div className="details">
      <div className="det">Cloudy</div>
      <div className="det values">{details?.current.cloud || '0' || nan} %</div>
      <div className="det ">Humidity</div>
      <div className="det values">{details?.current.humidity || nan} %</div>
      <div className="det">Wind</div>
      <div className="det values">{details?.current.wind_kph || nan} Km/h</div>
    </div>
  </>
);
}

export default Formbox;