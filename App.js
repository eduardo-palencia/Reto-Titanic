import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TailwindProvider } from 'tailwindcss-react-native';
import HomeScreen from './screens/HomeScreen';

const Slack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Slack.Navigator>
          <Slack.Screen name='HomeScreen' component={HomeScreen} />
        </Slack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
