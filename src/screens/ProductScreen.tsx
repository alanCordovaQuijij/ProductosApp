import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { ProductsStackParams } from '../navigator/ProductsNavigator'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { Picker } from '@react-native-picker/picker'

interface Props extends StackScreenProps<ProductsStackParams,'ProductScreen'>{};

export const ProductScreen = ({navigation, route}:Props) => {

  const {id, name = ''} = route.params;
  const [selectedLanguage, setSelectedLanguage] = useState();



  useEffect(() => {
    navigation.setOptions({
      title: (name) ? name: 'Nuevo Producto'
    })
  }, [])
  

  return (
    <View style = {styles.container}>
      <ScrollView>
        <Text style = {styles.label}>Nombre del producto</Text>
        <TextInput  
          placeholder='Producto'
          style = {styles.textInput}
        />

        <Text style = {styles.label} >Categorías:</Text>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>

        <Button 
          title='Guardar'
          color="#5856D6"
        />

        <View style = {{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10}}>
            <Button 
              title='Cámara'
              color="#5856D6"
            />

             <Button 
              title='Galería'
              color="#5856D6"
            />

        </View>



      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 10,
    marginHorizontal: 20,
    
  },
  label:{
    fontSize: 18,
  },
  textInput:{
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    borderColor: 'rgba(0,0,0,0.2)',
    height: 45,
    marginTop: 5,
    marginBottom: 10
  }

})
 