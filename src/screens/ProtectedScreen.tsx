import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { AutContext } from '../context/AuthContext'

const ProtectedScreen = () => {

  const {token, user, logOut} = useContext(AutContext)

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Protected Screen</Text>

        <Button
          title='logout'
          color='#5856D6'
          onPress={logOut}
        />

        <Text>
          {JSON.stringify(user, null, 5)}
        </Text>

        <Text>
          {token}
        </Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title:{
    fontSize: 20,
    marginBottom: 20,
  },

})

export default ProtectedScreen;

