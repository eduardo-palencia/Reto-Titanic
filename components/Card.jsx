import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Card({ title, navigate }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity className='bg-white p-10 my-4 rounded-md' onPress={() => navigation.navigate(navigate)}>
      <Text className='text-center'>{title}</Text>
    </TouchableOpacity>
  );
}
