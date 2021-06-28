import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  Modal,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader';
import {AppTabNavigator} from '../components/AppTabNavigator';
import HomeScreen from './HomeScreen';

export default class ExchangeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      itemName: '',
      reasonForExchange: '',
    };
  }

  createUniqueId() {
    return Math.random().toString(36).substring(7);
  }

  addRequest = (itemName, reasonForExchange) => {
    var userId = this.state.userId;
    var randomRequestId = this.createUniqueId();
    db.collection('requested_items').add({
      user_id: userId,
      item_name: itemName,
      reason_for_exchange: reasonForExchange,
      request_id: randomRequestId,
    });

    this.setState({
      itemName: '',
      reasonForExchange: '',
    });

    return Alert.alert('Item Requested Successfully', '', [
      {
        text: 'OK',
        onPress: () => {
          this.props.navigation.navigate('Home');
        },
      },
    ]);
    
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MyHeader title="Exchange Item" navigation={this.props.navigation} />
        <KeyboardAvoidingView style={styles.keyBoardStyle}>
          <TextInput
            style={styles.formTextInput}
            placeholder={'Enter Item Name'}
            placeholderTextColor="#9985c4"
            onChangeText={(text) => {
              this.setState({
                itemName: text,
              });
            }}
            value={this.state.itemName}
          />
          <TextInput
            style={[styles.formTextInput, { height: 300 }]}
            multiline
            numberOfLines={8}
            placeholder={'Why do you need the Item?'}
            placeholderTextColor="#9985c4"
            onChangeText={(text) => {
              this.setState({
                reasonForExchange: text,
              });
            }}
            value={this.state.reasonForExchange}
          />
          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#e2d810' }]}
            onPress={() => {
              this.addRequest(
                this.state.itemName,
                this.state.reasonForExchange
              );
            }}>
            <Text style={styles.buttonText}>Request</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  keyBoardStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formTextInput: {
    width: '75%',
    height: 35,
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 1.3,
    marginTop: 20,
    padding: 10,
    borderColor: '#12a4d9',
    fontSize: 20,
    margin: 10,
    paddingLeft: 10,
    color: '#e2d810',
  },

  button: {
    width: '75%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#ff5722',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: 12,
  },
  buttonText: {
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
