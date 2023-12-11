import React, { useContext, useEffect } from 'react'
import { Alert, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { loginStyles } from '../theme/loginTheme'
import { WhiteLogo } from '../components/WhiteLogo'
import { useForm } from '../hooks/useForm'
import { StackScreenProps } from '@react-navigation/stack'
import { AutContext } from '../context/AuthContext'

interface Props extends StackScreenProps<any, any> {};


const RegistrerScreen = ({navigation}:Props) => {

  const {singUp, errorMessage, removeError} = useContext(AutContext);

  const {email, password,name, onChange} = useForm({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    if (errorMessage.length === 0) return;
      
        Alert.alert(
          'Registro Incorrecto',
          errorMessage,
          [
            {
              text: 'Ok',
              onPress: removeError
            }
          ]
        )
      
  }, [errorMessage])

  const onRegister = () => {
    console.log({email, password, name});
    Keyboard.dismiss();
    singUp({
      nombre: name,
      correo: email,
      password: password
    });
  };
  return (
    <>

  
      <KeyboardAvoidingView
        style={{flex: 1, backgroundColor: '#5856D6'}}
        behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}>
        <View style={loginStyles.formContainer}>

          <WhiteLogo/>

          <Text style={loginStyles.title}> Registro</Text>

          <Text style={loginStyles.label}> Nombre:</Text>

          <TextInput 
            placeholder='Ingrese su nombre'
            placeholderTextColor="rgba(255, 255, 255, 0.4)"
            underlineColorAndroid="White"
            style={[
              loginStyles.inputField,
              (Platform.OS === 'ios') && loginStyles.inputFieldIos 
            ]}
            selectionColor='white'
            onChangeText={(value) => onChange(value,'email')}
            value={name}
            onSubmitEditing={onRegister}
            autoCapitalize='words'
          />

          <Text style={loginStyles.label}> Email:</Text>

          <TextInput 
            placeholder='Ingrese su Email'
            placeholderTextColor="rgba(255, 255, 255, 0.4)"
            keyboardType='email-address'
            underlineColorAndroid="White"
            style={[
              loginStyles.inputField,
              (Platform.OS === 'ios') && loginStyles.inputFieldIos 
            ]}
            selectionColor='white'
            onChangeText={(value) => onChange(value,'email')}
            value={email}
            onSubmitEditing={onRegister}
            autoCapitalize='none'
            autoCorrect={false}
          />

            <Text style={loginStyles.label}> Contraseña:</Text>

            <TextInput 
              placeholder=' ****** '
              placeholderTextColor="rgba(255, 255, 255, 0.4)"
              underlineColorAndroid="White"
              style={[
                loginStyles.inputField,
                (Platform.OS === 'ios') && loginStyles.inputFieldIos 
              ]}
              selectionColor='white'

              onChangeText={(value) => onChange(value,'password')}
              value={password}
              onSubmitEditing={onRegister}
              secureTextEntry
              autoCapitalize='none'
              autoCorrect={false}
            />

            <View style={loginStyles.buttonContainer}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={loginStyles.button}
                onPress={onRegister}
              >
                <Text style={loginStyles.buttonText}>Crear cuenta</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => navigation.replace('LoginScreen')}
              activeOpacity={0.8}
              style={loginStyles.buttonReturn}
            >
               <Text style= {loginStyles.buttonText}>Login</Text>
            </TouchableOpacity>

          </View>
      </KeyboardAvoidingView>

    </>
  )
}

export default RegistrerScreen