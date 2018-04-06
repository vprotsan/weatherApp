
import React from 'react';
import Days from './days';
import '../css/weather-app.css';
import DetailedForecast from './detailedforecast';
import sampleCity from '../sample-city'

class WeatherApp extends React.Component {
    constructor() {
      super();
      this.state= {
        city: sampleCity,
        currentDay:sampleCity[0]
      }

      this.updateCurrentDay = this.updateCurrentDay.bind(this)
    }

    componentWillMount(){
      this.setState({
          city:sampleCity
      })
    }

    updateCurrentDay(day){
      this.setState({
         currentDay: day
      });
   }

   today() {
      return new Date().toLocaleDateString('en-US',
      {
         weekday: 'long',
         month: 'short',
         day: 'numeric'
      });
   }
   render() {
      return (
         <main>
            <Days
               cityState={this.props.match.params.weatherId}
               data={ this.state }
               today={this.today()}
               updateCurrentDay={this.updateCurrentDay}
            />
            <DetailedForecast currentDay={this.state.currentDay}/>

         </main>
      )
   }
}
export default WeatherApp;
