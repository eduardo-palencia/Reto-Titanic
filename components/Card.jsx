import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Card({ title }) {
  return (
    <TouchableOpacity className='bg-white p-10 mx-7 my-5'>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
