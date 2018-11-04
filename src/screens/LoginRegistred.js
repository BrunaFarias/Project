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
      email_or_tel: '',
      password: '',
    };
  }
  
  onLogin() {
    const { email_or_tel, password } = this.state;

    Alert.alert('Credentials', `${email_or_tel} + ${password}`);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>
            this.props.navigator.push({id: 'a'})}>
            <Image source={require('../imgs/buttons/btn_back2.png')} 
                  style={styles.buttonBack} 
            />
            <Text style={styles.txtRegistro}>Entrar</Text>
        </TouchableOpacity>
        
        <View style={[styles.countContainer]}>
          <Text style={[styles.countText]}>
             { this.state.count !== 0 ? this.state.count: null}
           </Text>
         </View>
         <View style={styles.buttonStyle}>
            {/**Button de registro com o face**/}
            <TouchableOpacity
                       onPress={() => {
                           this.props.navigator.push({ id: 'b' });}}>
                           <Image source={require('../imgs/buttons/btn_Facebook.png')}
                               style={{
                                       width:150,
                                       height:150,
                                       resizeMode:'contain',
                                   }}
                           />
                   </TouchableOpacity>
                   {/**Button de registro com o google**/}
                   <TouchableOpacity 
                       onPress={() => {
                       this.props.navigator.push({ id: 'c' });}}>
                           <Image source={require('../imgs/buttons/btn_Google.png')}
                               style={{
                                       width:150,
                                       height:150,
                                       resizeMode:'contain',
                                   }}/>
                   </TouchableOpacity>
              </View>
            <View>
                <View style={{flexDirection:"row"}}>
                    <View style={{flex:1}}>
                    <TextInput
                      value={this.state.email_or_tel}
                      onChangeText={(email_or_tel) => this.setState({ email_or_tel })}
                      placeholder={'Email ou Telefone'}
                      style={styles.input}
                    />
                    </View>
                    <View style={{flex:1}}>
                    <TextInput
                      value={this.state.password}
                      onChangeText={(password) => this.setState({ password })}
                      placeholder={'Senha'}
                      secureTextEntry={true}
                      style={styles.input}
                    />
                    </View>
                </View>
            </View>

            <View style={styles.buttonEntrar}>
            {/**Button de registro com o face**/}
            <TouchableOpacity
                       onPress={() => {
                           this.props.navigator.push({ id: 'b' });}}>
                           <Image source={require('../imgs/buttons/btn_entrar2.png')}
                               style={{
                                       width:250,
                                       height:250,
                                       resizeMode:'contain',
                                   }}
                           />
                   </TouchableOpacity>
            </View>

       </View>
     )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 0,
   
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#99b3ff',
    padding: 10,
    flexDirection: 'row', 
    
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  
  countText: {
    color: '#FF00FF'
  },

  txtRegistro: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    
  },
  buttonBack:{
    resizeMode:'contain',
  },
  buttonStyle:{
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  buttonEntrar:{
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
},
  
})