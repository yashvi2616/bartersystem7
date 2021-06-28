import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';

const MyHeader = props => {
  return (
    <Header
      centerComponent={{ text: props.title, style: { color: '#ffffff', fontSize:20,fontWeight:"bold", justifyContent:'center'} }}
      backgroundColor = "#b74fa5"
    />
  );
};

export default MyHeader;