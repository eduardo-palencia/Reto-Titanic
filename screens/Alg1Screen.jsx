import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import mtz_alg1 from '../assets/conf_mat_lg.png';
import roc_alg1 from '../assets/roc_lg.png';


export default function Alg1Screen() {
  return (
    <SafeAreaView className='px-3 py-2'>
        <ScrollView>
        <View className='bg-slate-500 rounded-md'>
          <Text className='font-bold text-center py-4 text-xl text-white'>Algortimo 1</Text>
        </View>
        <View className='py-6'>
          <Text className=' font-semibold text-center text-red-600 text-2xl'>Logistic regression</Text>
        </View>
        <Text className='text-center font-bold text-xl'>Resultados:</Text>
        <View className='m-4'>
          <View className=' bg-gray-200 rounded-md p-2 m-4'>
            <Text className='text-center font-semibold'>Precisión Obtenida: </Text>
            <Text className='text-center text-red-600'>0.8024691358024691</Text>
          </View>
          <View className=' bg-gray-200 rounded-md p-2 m-4 items-center'>
            <Text className='text-center font-semibold pb-3'>Matriz de confusión: </Text>
            <Image source = {mtz_alg1} alt = "Profile" className='h-40 w-40'/>
          </View>
          <View className=' bg-gray-200 rounded-md p-2 m-4 items-center'>
            <Text className='text-center font-semibold pb-3'>ROC: </Text>
            <Image source = {roc_alg1} alt = "Profile" className='h-40 w-40'/>
          </View>
          <View className=' bg-gray-200 rounded-md p-2 m-4 items-center'>
            <Text className='text-center font-semibold pb-3'>AUC: </Text>
            <Text className='text-center text-red-600'>0.7779695139488064</Text>
          </View>
          <View className='bg-gray-200 rounded-md p-2 m-4'>
            <Text className='text-center font-semibold pb-3'>Puntaje en Kaggle: </Text>
            <Text className='text-center text-red-600'>0.77272</Text>
          </View>
        </View>
        <View>
            <Text className='text-center py-3 text-xl font-bold'>Justificación de Selección:
            </Text>
        </View>
        <View className='bg-gray-200 rounded-lg py-3 px-10 m-4'>
            <Text className='text-center px- 4'>La explicacion de la eleccion de la regresion logistica es precisamente que existe variables que estan estrechamente correlacionadas con la sobrevivencia, tal es el caso de el sexo, y la clasa social asi como el numero de familiares dentro del barco(Incluso con mas peso que la edad y que datos sesgados como el precio del boleto, se explica mas en el notebook), siendo estas variables sencillas de clasificar en tuplas, la regresion logistica fue muy conveniente para este caso de uso y sobre todo mucho mas rapida de  ejecutar que una red neuronal de varias capas.</Text>
        </View>
        </ScrollView>
    </SafeAreaView>
  )
}