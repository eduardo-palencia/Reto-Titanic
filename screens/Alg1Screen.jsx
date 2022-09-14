import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

export default function Alg1Screen() {
  return (
    <SafeAreaView className='px-3 py-2'>
        <ScrollView>
        <View className='bg-slate-500 rounded-md'>
            <Text className='font-bold text-center py-4 text-xl text-white'>Algoritmo 1</Text>
        </View>
        <View className='py-6'>
            <Text className=' font-semibold text-center text-red-600 text-2xl'>LDA</Text>
        </View>
        <Text className='text-center font-bold text-xl'>Resultados:</Text>
        <View className='m-4'>
            <View className=' bg-gray-200 rounded-md p-2 m-4'>
                <Text className='text-center font-semibold'>Precisión Obtenida: </Text>
                    <Text className='text-center text-red-600'>50</Text>
            </View>
            <View className=' bg-gray-200 rounded-md p-2 m-4'>
                <Text className='text-center font-semibold'>ROC: </Text>
                    <Text className='text-center text-red-600'>50</Text>
            </View>
            <View className=' bg-gray-200 rounded-md p-2 m-4'>
                <Text className='text-center font-semibold'>AUC: </Text>
                    <Text className='text-center text-red-600'>50</Text>
            </View>
            <View className='bg-gray-200 rounded-md p-2 m-4'>
                <Text className='text-center font-semibold'>Puntaje en Kaggle: </Text>
                    <Text className='text-center text-red-600'>50</Text> 
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