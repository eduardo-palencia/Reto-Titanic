import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { Formik } from 'formik';
import { axios } from 'axios';

export default function Home() {
  const [prediction, setPrediction] = useState('');

  return (
    <View>
      <Formik
        initialValues={{ septalLength: '', sepalWidth: '', petalLength: '', petalWidth: '' }}
        onSubmit={(values) =>
          axios
            .post('http://localhost:5000/predict', {
              septalLength: values.septalLength,
              sepalWidth: values.sepalWidth,
              petalLength: values.petalLength,
              petalWidth: values.petalWidth
            })
            .then((res) => {
              console.log(res);
              setPrediction(res.data);
            })
            .catch((err) => {
              console.log(err);
            })
        }
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput
              onChangeText={handleChange('septalLength')}
              onBlur={handleBlur('septalLength')}
              value={values.septalLength}
            />
            <TextInput
              onChangeText={handleChange('sepalWidth')}
              onBlur={handleBlur('sepalWidth')}
              value={values.sepalWidth}
            />
            <TextInput
              onChangeText={handleChange('petalLength')}
              onBlur={handleBlur('petalLength')}
              value={values.petalLength}
            />
            <TextInput
              onChangeText={handleChange('petalWidth')}
              onBlur={handleBlur('petalWidth')}
              value={values.petalWidth}
            />
            <Button onPress={handleSubmit} title='submit'>
              Submit
            </Button>
            <Text> The prediction is: {prediction} </Text>
          </View>
        )}
      </Formik>
    </View>
  );
}
