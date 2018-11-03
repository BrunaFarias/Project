import React, {Component} from 'react';
import {
        Platform,
        AppRegistry, 
        StyleSheet, 
        Text, 
        View
      } from 'react-native';
import {StackNavigator} from 'react-navigation';
import LoginScreen from './screens/LoginScreen';

export default class gWinch extends React.Component{
  render(){
    return(
      <AppStackNavigator/>
    );
  }
}

const AppStackNavigator = StackNavigator({
  LoginScreen: {screen: LoginScreen}
  
})

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('gWinch', () => gWinch);