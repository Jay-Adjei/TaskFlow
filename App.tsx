import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import './global.css';
import AuthOptionsScreen from '~/screens/AuthOptionsScreens';
import HomeScreen from '~/screens/HomeScreen';
import SignInScreen from '~/screens/SignInScreen';
import SignUpScreen from '~/screens/SignUpScreen';
import UnloadingScreen from '~/screens/UnloadingScreen';

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
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
