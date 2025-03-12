import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import './global.css';
import AuthOptionsScreen from '~/screens/AuthOptionsScreens';
import UnloadingScreen from '~/screens/UnloadingScreen';
import SignUpScreen from '~/screens/SignUpScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Unloading"
          component={UnloadingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AuthenticationOptions"
          component={AuthOptionsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
