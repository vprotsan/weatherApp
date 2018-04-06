import React from 'react';

class NightForecast extends React.Component {
 render() {
   return (
     <div className="nighttime">
      <div className="day-night-info">
        <div className="left-side">
          <h2>NIGHT</h2>
          <div className="temp">
            {this.props.currentDay.temp_min}&deg;
            <span className="label">LO</span>
          </div>
          <div className="precipitation">
            Precipitation: <span>{this.props.currentDay.night.precipitation}</span>
          </div>
        </div>
        <img src={process.env.PUBLIC_URL + "/weather_icons/"+ this.props.currentDay.night.icon + ".png"} alt="weather" />
      </div>
      <p>{this.props.currentDay.night.description}</p>
    </div>
   )
 }
}
export default NightForecast;
