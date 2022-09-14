import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import mtz_alg1 from '../assets/conf_mat_lg.png';
import roc_alg1 from '../assets/roc_lg.png';


export default function Alg1Screen() {
  return (
    <SafeAreaView className='px-3 py-2'>
        <ScrollView>
        <View className='bg-slate-500 rounded-md'>
          <Text className='font-bold text-center py-4 text-xl text-white'>El mejor algoritmo</Text>
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
            <Text className='text-center px- 4'>Justificaciónxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx x x  x s s s a</Text>
            <Text className='text-center px- 4'>Justificaciónxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx x x  x s s s a</Text>
            <Text className='text-center px- 4'>Justificaciónxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx x x  x s s s a</Text>
            <Text className='text-center px- 4'>Justificaciónxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx x x  x s s s a</Text>
        </View>
        </ScrollView>
    </SafeAreaView>
  )
}