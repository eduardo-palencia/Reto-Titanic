import { View, Text, Button, VirtualizedList, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import React, { useState, useLayoutEffect } from 'react';
import { TextInput } from 'react-native-paper';
import { Formik } from 'formik';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function PredictionScreen() {
  const navigation = useNavigation();
  const [lg, setLg] = useState('');
  const [rf, setRf] = useState('');
  const [show, setShow] = useState(0);

  return (
    <SafeAreaView>
      <Formik
        initialValues={{ Sex: 0, Pclass: 0, SibSp: 0, Parch: 0, Embarked: 0 }}
        onSubmit={(values) => {
          values.Sex = parseInt(values.Sex);
          values.Pclass = parseInt(values.Pclass);
          values.SibSp = parseInt(values.SibSp);
          values.Parch = parseInt(values.Parch);
          values.Embarked = parseInt(values.Embarked);
          axios
            .post('http://10.48.207.114:8080/predict', {
              Sex: values.Sex,
              Pclass: values.Pclass,
              SibSp: values.SibSp,
              Parch: values.Parch,
              Embarked: values.Embarked
            })
            .then((response) => {
              setLg(response.data.lg);
              setRf(response.data.rf);
              setShow(1);
            })
            .catch((error) => console.log(error));
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <ScrollView>
            <View className='bg-slate-500 rounded-md'>
              <Text className='text-xl text-center font-bold py-4 text-white'>Predicción</Text>
            </View>
            <View className='px-4 pt-4'>
              <Text className='py-2 font-bold'> Sex </Text>
              <TextInput
                onChangeText={handleChange('Sex')}
                onBlur={handleBlur('Sex')}
                value={values.Sex}
                placeholder='(Masculino: 0, Femenino: 1)'
              />
              <Text className='py-2 font-bold'> Pclass: </Text>
              <TextInput
                onChangeText={handleChange('Pclass')}
                onBlur={handleBlur('Pclass')}
                value={values.Pclass}
                placeholder='(Primera: 1, Segunda: 2, Tercera: 3)'
              />
              <Text className='py-2 font-bold'> SibSp: </Text>
              <TextInput
                onChangeText={handleChange('SibSp')}
                onBlur={handleBlur('SibSp')}
                value={values.SibSp}
                placeholder='Número de hermanos/cónyuges'
              />
              <Text className='py-2 font-bold'> Parch: </Text>
              <TextInput
                onChangeText={handleChange('Parch')}
                onBlur={handleBlur('Parch')}
                value={values.Parch}
                placeholder='Número de padres/hijos'
              />
              <Text className='py-2 font-bold'> Embarked: </Text>
              <TextInput
                onChangeText={handleChange('Embarked')}
                onBlur={handleBlur('Embarked')}
                value={values.Embarked}
                placeholder='(Southampton: 1, Cherbourg: 2, Queenstown: 3)'
              />
            </View>

            <View className='flex-row justify-center py-4'>
              <Button onPress={handleSubmit} title='Submit' color='darkblue' />
            </View>
            <View className={show ? 'p-4 bg-gray-200' : 'p-4 bg-gray-200 hidden'}>
              <Text style={{ fontSize: 20, color: 'red' }} className='py-2'>
                Logistic Regression: {lg ? 'Vive :)' : 'Muere :('}
              </Text>
              <Text style={{ fontSize: 20, color: 'red' }} className='py-2'>
                Random Forrest: {rf ? 'Vive :)' : 'Muere :('}
              </Text>
            </View>
          </ScrollView>
        )}
      </Formik>
    </SafeAreaView>
  );
}
