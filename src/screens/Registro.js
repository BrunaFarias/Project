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



class Registro extends React.Component {

  _navigate(){
		this.props.navigator.push({
			name: 'LoginScreen', // Matches route.name
		})
	}

  constructor(props) {
    super(props);
    
    this.state = {
      name: '',
      lastname: '',
      email: '',
      telefone: '',
      password: '',
    };
  }
  
  onLogin() {
    const { name, lastname, email, telefone, password } = this.state;

    Alert.alert('Credentials', `${name} + ${lastname} + ${email} + ${telefone} + ${password}`);
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
         </View>
         <View style={styles.buttonStyle}>
            {/**Button de registro com o face**/}
            <TouchableOpacity
                       onPress={() => {
                           this.props.navigator.push({ id: 'a' });}}>
                           <Image source={require('../imgs/buttons/btn_Facebook2.png')}
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
                           <Image source={require('../imgs/buttons/btn_Google2.png')}
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
                      value={this.state.name}
                      onChangeText={(name) => this.setState({ name })}
                      placeholder={'Nome'}
                      style={styles.input}
                    />
                    </View>
                    <View style={{flex:1}}>
                    <TextInput
                      value={this.state.lastname}
                      onChangeText={(lastname) => this.setState({ lastname })}
                      placeholder={'Sobrenome'}
                      secureTextEntry={true}
                      style={styles.input}
                    />
                    </View>
                </View>
                 
                <View>
                <View style={{flexDirection:"row"}}>
                    <View style={{flex:1}}>
                    <TextInput
                       value={this.state.email}
                       onChangeText={(email) => this.setState({ email })}
                       placeholder={'Email'}
                       style={styles.input}
                    />
                    </View>
                </View>
                <View style={{flexDirection:"row"}}>
                    <View style={{flex:1}}>
                    <Text style={{
                          fontSize: 15,
                          paddingHorizontal: 10
                        }}>Telefone</Text>
                    </View>
              </View>
              <View style={{flexDirection:"row"}}>
                
                <Image
                    source={require('../imgs/brasil.jpg')}
                    style={{ height: 24, width: 24, resizeMode: 'contain' }}
                />
                <Text style={{
                    fontSize: 15,
                    paddingHorizontal: 10
                    }}>+55
                </Text>

                <View style={{flex:1}}>
                    <TextInput
                       value={this.state.telefone}
                       onChangeText={(telefone) => this.setState({ telefone })}
                       placeholder={'9299999-9999'}
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
                           <Image source={require('../imgs/buttons/btn_Prosseguir.png')}
                               style={{
                                       width:250,
                                       height:250,
                                       resizeMode:'contain',
                                   }}
                           />
                   </TouchableOpacity>
            </View>
            </View>

       </View>
     )
   }
}
export default Registro;

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
  itemInput: {
    marginTop: 10,
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row'
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

  