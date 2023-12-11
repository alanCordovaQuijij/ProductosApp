import React, { useContext, useEffect } from 'react'
import { Text, View, TextInput, Platform, Button, KeyboardAvoidingView, Keyboard, Alert } from 'react-native'
import { Background } from '../components/Background'
import { WhiteLogo } from '../components/WhiteLogo'
import { loginStyles } from '../theme/loginTheme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useForm } from '../hooks/useForm'
import { StackScreenProps } from '@react-navigation/stack'
import { AutContext } from '../context/AuthContext'

interface Props extends StackScreenProps<any, any> {};

export const LoginScreen = ({ navigation}:Props) => {

  const {singIn, errorMessage, removeError} = useContext(AutContext);

  const {email, password, onChange} = useForm({
    email: '',
    password: '',
  });

  const onLogin = () => {
    console.log({email, password});
    Keyboard.dismiss();

    singIn({correo: email, password});

  };


  useEffect(() => {
    if (errorMessage.length === 0) return;
      
        Alert.alert(
          'Login Incorrecto',
          errorMessage,
          [
            {
              text: 'Ok',
              onPress: removeError
            }
          ]
        )
      
  }, [errorMessage])
  

  return (
    <>

      <Background />
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}>
        <View style={loginStyles.formContainer}>

          <WhiteLogo/>

          <Text style={loginStyles.title}> Login</Text>
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
            onSubmitEditing={onLogin}
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
              onSubmitEditing={onLogin}
              secureTextEntry
              autoCapitalize='none'
              autoCorrect={false}
            />

            <View style={loginStyles.buttonContainer}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={loginStyles.button}
                onPress={onLogin}
              >
                <Text style={loginStyles.buttonText}>Login</Text>
              </TouchableOpacity>
            </View>

            <View style={loginStyles.newUserContainer}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={loginStyles.button}
                onPress={() => navigation.replace('RegisterScreen')}
              >
                <Text style={loginStyles.buttonText}>Crear Cuenta</Text>
              </TouchableOpacity>
            </View>
          </View>
      </KeyboardAvoidingView>

    </>
  )
}

