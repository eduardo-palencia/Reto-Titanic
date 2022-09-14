import React, { useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TailwindProvider } from 'tailwindcss-react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar, Animated } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import PredictionScreen from './screens/PredictionScreen';
import SelectionScreen from './screens/SelectionScreen';
import Alg1Screen from './screens/Alg1Screen';
import Alg2Screen from './screens/Alg2Screen';

const Slack = createNativeStackNavigator();
StatusBar.setBarStyle('dark-content', true);

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <SafeAreaProvider>
          <SafeAreaView className='flex-1' forceInset={{ top: 'always' }}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name='HomeScreen' component={HomeScreen} />
              <Stack.Screen name='PredictionScreen' component={PredictionScreen}/>
              <Stack.Screen name='SelectionScreen' component={SelectionScreen}/>
              <Stack.Screen name='Alg1Screen' component={Alg1Screen}/>
              <Stack.Screen name='Alg2Screen' component={Alg2Screen}/>
            </Stack.Navigator>
          </SafeAreaView>
        </SafeAreaProvider>
      </TailwindProvider>
    </NavigationContainer>
  );
}
