import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';

const Slack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Slack.Navigator>
        <Slack.Screen name='Home' component={Home} />
      </Slack.Navigator>
    </NavigationContainer>
  );
}
