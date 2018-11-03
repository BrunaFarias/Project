import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
  Animated,
  Dimensions,
  Keyboard,
  Platform,
  Button
} from "react-native";

import {
    createStackNavigator,
  } from 'react-navigation';

import { Icon } from 'native-base'
const SCREEN_HEIGHT = Dimensions.get('window').height
import * as Animatable from 'react-native-animatable'

class LoginScreen extends React.Component {

  static navigationOptions = {
      header: null
  }

  constructor() {
      super()
  }

  render() {
    
      return (
          <View style={{ flex: 1 }}>
              <Animated.View
                  style={{
                      position: 'absolute',
                      height: 60, width: 60,
                      top: 60,
                      left: 25,
                      zIndex: 100,

                  }}
              >  
              </Animated.View>
              <ImageBackground
                  source={require('../imgs/login_bg.jpg')}
                  style={{ flex: 1 }}
              >
                  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                      <Animatable.View
                          animation="zoomIn" iterationCount={1}
                          style={{ height: 100, width: 100, alignItems: 'center', justifyContent: 'center' }}>
                          <Image
                                source={require('../imgs/icon.png')}
                                style={{ height: 100, width: 100, alignItems: 'center', justifyContent: 'center'}}/>
                      </Animatable.View>
                      <Text style={{ fontWeight: 'bold', fontSize: 26 }}>GWINCH</Text>
                  </View>
                </ImageBackground>
                  
            {/**Parte branca**/}
            <Animatable.View animation="slideInUp" interationCount={1}>
                  <Animated.View
                    style={{
                            height: 170,
                            backgroundColor: 'white',
                            
                        }}>
            <View style={styles.buttonStyle}>
                {/**Button entrar**/}
                <TouchableOpacity 
                    onPress={this.onPress}>
                        <Image source={require('../imgs/buttons/btn_entrar.png')}
                            style={{
                                    width:150,
                                    height:150,
                                    resizeMode:'contain',
                                }}
                        />
                </TouchableOpacity>
                {/**Button de registro**/}
                <TouchableOpacity 
                    onPress={() =>
                        navigate('registroScreen', {name:'registroScreen'})}>
                        <Image source={require('../imgs/buttons/btn_registro.png')}
                            style={{
                                    width:150,
                                    height:150,
                                    resizeMode:'contain',
                                }}
                        />
                </TouchableOpacity>
            </View>  
                </Animated.View> 
            </Animatable.View>
                        
            </View>
      );
  }
}
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal:20,
  },
buttonStyle:{
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'

}
});

