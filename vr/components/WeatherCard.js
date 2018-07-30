import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-vr';

export default class WeatherCard extends React.Component {
  render() {
    return <View style={styles.weatherCard}>
      <Text style={styles.weatherText}>{this.props.weatherObject.name}</Text>
      <Text style={styles.weatherText}>{this.props.weatherObject.weather[0].description}</Text>
      <Text style={styles.weatherText}>{this.props.weatherObject.main.temp}°</Text>
      <Text style={styles.weatherText}>{this.props.weatherObject.wind.speed}mph</Text>
    </View>;
  }
}

const styles = StyleSheet.create({
  weatherCard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    opacity: 0.8,
    borderRadius: 0.1,
    borderColor: '#000',
    borderWidth: 0.05,
    padding: 0.5,
    layoutOrigin: [-0.5, 0],
    transform: [
      { translate: [0, 0, -7]}
    ]
  },
  weatherText: {
    textAlign: 'center',
    fontSize: 0.3,
    color: '#000'
  }
});