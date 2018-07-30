import React from 'react';
import axios from 'axios';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

import WeatherCard from './vr/components/WeatherCard';
import WindCloudObject from './vr/components/WindCloudObject';

const API_KEY = '076c86c46532d43c144ab9c4b368b7eb';

export default class WeatherSimulator extends React.Component {
  state = {
    weatherObject: {
      name: '',
      main: {
        temp: 0
      },
      weather: [
        { description: '' }
      ],
      wind: {
        deg: 1,
        speed: 1
      }
    }
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Truckee,us&appid=${API_KEY}`);
      this.setState({ weatherObject: data });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Pano source={asset('vvv.jpg')}/>
        <WeatherCard weatherObject={this.state.weatherObject} />
        <WindCloudObject wind={this.state.weatherObject.wind} />
      </View>
    );
  }
};

AppRegistry.registerComponent('WeatherSimulator', () => WeatherSimulator);
