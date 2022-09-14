import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Card({ title, navigate }) {
  const navigation = useNavigation();
  return (
    
    <TouchableOpacity className='bg-white p-10 mx-7 my-5 rounded-md' onPress={()=>navigation.navigate(navigate)}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
