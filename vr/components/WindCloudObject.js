import React from 'react';
import { Model, View, asset, Animated } from 'react-vr';

export default class WindCloudObject extends React.Component {
  
  state = {
    xValue: new Animated.Value(100)
  }

  componentDidMount() {
    this.animateCloud();
    setInterval(() => this.animateCloud(), 5000);
  }

  animateCloud() {
    if (this.state.xValue._value < 0) {
      this.setState({ xValue: new Animated.Value(100) });
    } else {
      Animated.timing(this.state.xValue, {
        toValue: -100,
        duration: 30000 / this.props.wind.speed
      }).start();
    }
  }

  render() {
    return <Animated.View
      style={{ transform: [{ translate: [0,-25,-150] }, { rotateX: -90 }, { rotateZ: this.props.wind.deg }, { translateX: this.state.xValue }] }}>
      <Model source={{ obj: asset('multi_clouds.obj') }} scale={0.01} />
    </Animated.View>;
  }
}