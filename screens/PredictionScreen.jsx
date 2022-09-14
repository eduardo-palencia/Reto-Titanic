import { View, Text, Button, StyleSheet, VirtualizedList, TouchableOpacity  } from 'react-native'
import React,  { useState, useLayoutEffect } from 'react'
import { TextInput} from 'react-native-paper'
import { Formik } from 'formik'
import axios from 'axios'
import {ArrowLeftIcon} from 'heroicons-react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

export default function PredictionScreen() {
    const navigation = useNavigation();
    const[prediction, setPrediction] = useState('')
    return (
        <SafeAreaView>
      <Formik
      initialValues={{sepalLength: '', sepalWidth: '', petalLength: '', petalWidth: ''}}
      //onSubmit = {value => console.log(values)}
      onSubmit = {values =>
      axios.post('http://10.48.230.154:5000//predict', {
        sepalLength: values.sepalLength,
        sepalWidth: values.sepalWidth,
        petalLength:values.petalLength,
        petalWidth: values.petalWidth
      }).then(response => setPrediction(response.data)).catch(error => console.log(error))}
      >
          {({handleChange, handleBlur, handleSubmit, values}) => (
              <View className='px-3'>
                <View className='bg-slate-500 rounded-md'>
                    <Text className='text-xl text-center font-bold py-4 rounded-lg text-white'>Predicción</Text>
                </View>
                <View className='px-4 pt-4'>
                    <Text className='py-2 font-bold'>Clase: </Text>
                    <TextInput 
                        onChangeText = {handleChange('sepalLength')}
                        onBlur = {handleBlur('sepalLength')}
                        value = {values.sepalLength}
                    />
                    <Text className='py-2 font-bold'>Sexo: </Text>
                    <TextInput
                        onChangeText = {handleChange('sepalWidth')}
                        onBlur = {handleBlur('sepalWidth')}
                        value = {values.sepalWidth}
                    />
                    <Text className='py-2 font-bold'>Class: </Text>
                    <TextInput
                        onChangeText = {handleChange('petalLength')}
                        onBlur = {handleBlur('petalLength')}
                        value = {values.petalLength}
                    />
                    <Text className='py-2 font-bold'>Class: </Text>
                    <TextInput
                        onChangeText = {handleChange('petalWidth')}
                        onBlur = {handleBlur('petalWidth')}
                        value = {values.petalWidth}
                    />
                </View>
                

            <View className='flex-row justify-center py-4'>
                <Button
                onPress={handleSubmit} title='Submit' color='darkblue'/>
            </View>

            <View className='flex-row justify-center py-4 bg-gray-200 rounded-md'>
                <Text style={{fontSize: 20, color:'darkblue'}}> La Predicción es: {prediction}</Text>
            </View>  
              </View>
          )}
      </Formik>    
      </SafeAreaView>
  )
}
