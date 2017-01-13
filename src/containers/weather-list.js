'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';

class WeatherList extends Component {

  renderWeather(cityData) {
    let name = cityData.city.name;
    let temps = cityData.list.map(weather => weather.main.temp);
    let humidities = cityData.list.map(weather => weather.main.humidity);
    let pressures = cityData.list.map(weather => weather.main.pressure);

    return (
      <tr key={name}>
        <td>{name}</td>
        <Chart data={temps} color="red" units="K" />
        <Chart data={humidities} color="blue" units="hPa" />
        <Chart data={pressures} color="green" units="%" />
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Humidity (hPa)</th>
            <th>Pressure (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather }; // Same as { weather: weather } because same name
}

export default connect(mapStateToProps)(WeatherList);
