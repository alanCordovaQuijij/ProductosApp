import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {LoginScreen} from '../screens/LoginScreen';
import RegistrerScreen from '../screens/RegistrerScreen';
import ProtectedScreen from '../screens/ProtectedScreen';
import { AutContext } from '../context/AuthContext';
import { LoadingScreen } from '../screens/LoadingScreen';

const Stack = createStackNavigator();

export const Navigator = () => {

  const {status} = useContext(AutContext);

  if(status === 'checking') return <LoadingScreen/>

  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
        cardStyle:{
            backgroundColor:'white'
        }
        
    }}>

      {status !== 'autenticated' ?
        (
          <>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegistrerScreen} />
          </>
        ):(
          <Stack.Screen name="ProtedtedScreen" component={ProtectedScreen} />
        ) 
  
      }

      
      
      
    </Stack.Navigator>
  );
}