import { View, Text, SafeAreaView, TextComponent, ScrollView, Image } from 'react-native';
import React from 'react';
import mtz_sel from '../assets/conf_mat_rf.png';
import roc_sel from '../assets/roc_rf.png';


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
            <Text className='text-center text-red-600'>0.8372615039281706</Text>
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
            <Text className='text-center text-red-600'>0.8056514236410699</Text>
          </View>
          <View className='bg-gray-200 rounded-md p-2 m-4'>
            <Text className='text-center font-semibold pb-3'>Puntaje en Kaggle: </Text>
            <Text className='text-center text-red-600'>0.76315</Text>
          </View>
        </View>
        <View>
          <Text className='text-center py-3 text-xl font-bold'>Justificación de Selección:</Text>
        </View>
        <View className='bg-gray-200 rounded-lg py-3 px-10 m-4'>
          <Text className='text-center px- 4'>La razon por la cual decidimos utilizar el random forest fue para poder clasificar de mejor manera datos que estuvieran separados por clusters, es decir para poder conseguir mas  informacion que la linea que dibuja la regresion  logistica, y poder segmentar los datos de mejor manera, decidiemos un random forest en lugar de  un decision tree para poder conseguir datos mas ponderados  que un solo valor.</Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
