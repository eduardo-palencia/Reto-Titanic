import { View, Text, ImageBackground, ScrollView, Animated, TouchableOpacity } from 'react-native';
import React, { useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { axios } from 'axios';
import backgroundImage from '../assets/deepOcean.jpg';
import Image1 from '../assets/4k.png';
import Card from '../components/Card';
import AnimatedHeader from '../components/AnimatedHeader';

export default function HomeScreen() {
  const navigation = useNavigation();
  const offset = useRef(new Animated.Value(0)).current;

  return (
    <View className='flex-1 bg-black'>
      <ImageBackground source={backgroundImage} resizeMode='cover' className='flex-1 justify-center'>
        <AnimatedHeader animatedValue={offset} headerTitle='Reto - Bloque 1' headerImage={Image1} />
        <ScrollView
          vertical
          scrollEventThrottle={16}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: offset } } }], { useNativeDriver: false })}
          className='pt-60 pb-100'
        >
          <View className='flex-row flex-wrap pb-72'>

            <Card title='Selección' navigate="SelectionScreen" /> 
            <Card title='Predicción' navigate="PredictionScreen"/>
            <Card title='Algoritmo 1' navigate="Alg1Screen"/>
            <Card title='Algoritmo 2' navigate="Alg2Screen"/>

          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
