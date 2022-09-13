import React, { useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TailwindProvider } from 'tailwindcss-react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar, Animated } from 'react-native';
import HomeScreen from './screens/HomeScreen';

const Slack = createNativeStackNavigator();
StatusBar.setBarStyle('dark-content', true);

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <SafeAreaProvider>
          <SafeAreaView className='flex-1' forceInset={{ top: 'always' }}>
            <Slack.Navigator screenOptions={{ headerShown: false }}>
              <Slack.Screen name='HomeScreen' component={HomeScreen} />
            </Slack.Navigator>
          </SafeAreaView>
        </SafeAreaProvider>
      </TailwindProvider>
    </NavigationContainer>
  );
}
