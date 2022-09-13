import { View, Text, ImageBackground, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import backgroundImage from '../assets/titanic.jpg';
import { axios } from 'axios';
import Card from '../components/Card';

export default function Home() {
  return (
    <View className='flex-1'>
      <ImageBackground source={backgroundImage} resizeMode='cover' className='flex-1 justify-center'>
        <ScrollView vertical className='mb-32'>
          <View className='flex-row flex-wrap py-5'>
            <Card title='Ejercicio 1' />
            <Card title='Ejercicio 2' />
            <Card title='Ejercicio 3' />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
