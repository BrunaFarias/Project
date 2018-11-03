import React, {Component} from 'react';
import {
        Platform,
        AppRegistry, 
        StyleSheet, 
        Text, 
        View
      } from 'react-native';
import {StackNavigator} from 'react-navigation';
import { Navigator } from 'react-native-deprecated-custom-components';
import LoginScreen from './screens/LoginScreen';
import LoginRegistred from './screens/LoginRegistred';
import Registro from './screens/Registro';

export default class gWinch extends React.Component{
  render(){
    return(
      <Navigator
				initialRoute={{ id: 'a' }}
				renderScene={(route, navigator) => {
					/* definir a cena com base na rota */
					if (route.id === 'a') {
						//exibir a LoginScreen
						return (<LoginScreen navigator={navigator} />);
					}

					if (route.id === 'b') {
						//exibir a LoginRegistred para registrar login
						return (<LoginRegistred />);
          }
          if (route.id === 'c'){
            //exibe a tela de registro
            return(<Registro />);
          }
        }}/>    
      );
  }
}



const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('gWinch', () => gWinch);