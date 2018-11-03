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
  Button,
  Navigator
}from "react-native";

const SCREEN_HEIGHT = Dimensions.get('window').height

export default class LoginRegistred extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }
  
  onLogin() {
    const { username, password } = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.cabecalho}>
         <Image source={require('../imgs/buttons/btn_voltar.png')}  />
         <Text style={styles.txtLogin}>Login</Text>
        </View>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          style={styles.input}
          onPress={this.onLogin.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  input: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  },
  cabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
    flexGrow: 1,

    //margin: 20,
    backgroundColor:'#8f9ec1', 
    padding:30,
  },
  txtLogin: {
    fontSize: 40,
    color: 'white',
    marginHorizontal: 10,
    
    fontFamily:'Ariel'
  }
});