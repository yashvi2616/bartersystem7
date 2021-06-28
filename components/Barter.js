import React from 'react';
import LottieView from 'react-native-lottie';


export default class SantaAnimation extends React.Component {
  render() {
    return (
      <LottieView
      source={require('../assets/animation.json')}
      style={{width:"60%"}}
      autoPlay loop />
    )
  }
}