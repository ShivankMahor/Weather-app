import './weatherDetails.css';
function WeatherDetails({ details }) {
  return (
    <>
      <div className="containter">
        <div className="temprature">{details? details.current.temp_c.toFixed() : " "}</div>
        <span className="degree">o</span>
      </div>
      <div className="box2">
        <div className="cityName">{details? details.location.name : " "}</div>
        <div className="dateTime">{details? details.current.last_updated: " "}
        </div>
      </div>
      <div className="box3">
        {/* <div className="logo">{image? image : <ion-icon name="add-circle-outline"></ion-icon>}</div> */}
        <img src={details? details.current.condition.icon : 'Loading'} alt="Error" />
        <h2 className="logoname">{details? details.current.condition.text : ''}</h2>
        <div>{details? details.imagee : ""}</div>
      </div>
    </>

  );
}
export default WeatherDetails;