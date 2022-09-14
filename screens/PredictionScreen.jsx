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
    <SafeAreaView className='flex-1'>
      <Formik
        initialValues={{ Sex: 0, Pclass: 0, SibSp: 0, Embarked: 0 }}
        //onSubmit = {value => console.log(values)}
        onSubmit={(values) => {
          values.Sex = parseInt(values.Sex);
          values.Pclass = parseInt(values.Pclass);
          values.SibSp = parseInt(values.SibSp);
          values.Embarked = parseInt(values.Embarked);

          axios
            .post('http://10.48.207.114:8080/predict', {
              Sex: values.Sex,
              Pclass: values.Pclass,
              SibSp: values.SibSp,
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
            <View className='bg-slate-500'>
              <Text className='text-xl text-center font-bold py-4 text-white'>Predicción</Text>
            </View>
            <View className='px-4 pt-4'>
              <Text className='py-4 font-bold'>Sexo: </Text>
              <TextInput onChangeText={handleChange('Sex')} onBlur={handleBlur('Sex')} value={values.Sex} />
              <Text className='py-4 font-bold'> Clase: </Text>
              <TextInput onChangeText={handleChange('Pclass')} onBlur={handleBlur('Pclass')} value={values.Pclass} />
              <Text className='py-4 font-bold'> Familiares: </Text>
              <TextInput onChangeText={handleChange('SibSp')} onBlur={handleBlur('SibSp')} value={values.SibSp} />
              <Text className='py-4 font-bold'> Embarco en: </Text>
              <TextInput
                onChangeText={handleChange('Embarked')}
                onBlur={handleBlur('Embarked')}
                value={values.Embarked}
              />
            </View>

            <View className='flex-row justify-center py-4'>
              <Button onPress={handleSubmit} title='Submit' color='darkblue' />
            </View>
            <View className={show ? 'py-4 bg-gray-200' : 'py-4 bg-gray-200 hidden'}>
              <Text style={{ fontSize: 20, color: 'red' }}> Logistic Regression: {lg ? 'Vive :)' : 'Muere :('}</Text>
              <Text style={{ fontSize: 20, color: 'red' }}> Random Forrest: {rf ? 'Vive :)' : 'Muere :('}</Text>
            </View>
          </ScrollView>
        )}
      </Formik>
    </SafeAreaView>
  );
}
