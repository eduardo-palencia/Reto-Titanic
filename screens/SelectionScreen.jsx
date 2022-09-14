import { View, Text, SafeAreaView, TextComponent, ScrollView, Image } from 'react-native';
import React from 'react';
import mtz_sel from '../assets/favicon.png';
import roc_sel from '../assets/favicon.png';
import auc_sel from '../assets/favicon.png';

export default function SelectionScreen() {
  return (
    <SafeAreaView className='px-3 py-2'>
      <ScrollView>
        <View className='bg-slate-500 rounded-md'>
          <Text className='font-bold text-center py-4 text-xl text-white'>El mejor algoritmo</Text>
        </View>
        <View className='py-6'>
          <Text className=' font-semibold text-center text-red-600 text-2xl'>Random Forest</Text>
        </View>
        <Text className='text-center font-bold text-xl'>Resultados:</Text>
        <View className='m-4'>
          <View className=' bg-gray-200 rounded-md p-2 m-4'>
            <Text className='text-center font-semibold'>Precisión Obtenida: </Text>
            <Text className='text-center text-red-600'>50</Text>
          </View>
          <View className=' bg-gray-200 rounded-md p-2 m-4 items-center'>
            <Text className='text-center font-semibold pb-3'>Matriz de confusión: </Text>
            <Image source = {mtz_sel} alt = "Profile" className='h-40 w-40'/>
          </View>
          <View className=' bg-gray-200 rounded-md p-2 m-4 items-center'>
            <Text className='text-center font-semibold pb-3'>ROC: </Text>
            <Image source = {roc_sel} alt = "Profile" className='h-40 w-40'/>
          </View>
          <View className=' bg-gray-200 rounded-md p-2 m-4 items-center'>
            <Text className='text-center font-semibold pb-3'>AUC: </Text>
            <Image source = {auc_sel} alt = "Profile" className='h-40 w-40'/>
          </View>
          <View className='bg-gray-200 rounded-md p-2 m-4'>
            <Text className='text-center font-semibold pb-3'>Puntaje en Kaggle: </Text>
            <Text className='text-center text-red-600'>50</Text>
          </View>
        </View>
        <View>
          <Text className='text-center py-3 text-xl font-bold'>Justificación de Selección:</Text>
        </View>
        <View className='bg-gray-200 rounded-lg py-3 px-10 m-4'>
          <Text className='text-center px- 4'>Justificaciónxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx x x x s s s a</Text>
          <Text className='text-center px- 4'>Justificaciónxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx x x x s s s a</Text>
          <Text className='text-center px- 4'>Justificaciónxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx x x x s s s a</Text>
          <Text className='text-center px- 4'>Justificaciónxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx x x x s s s a</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
