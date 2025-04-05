import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '~/screens/HomeScreen';
import AnotherScreen from '~/screens/AnotherScreen'; // Create this screen as needed
import AuthOptionsScreen from '~/screens/AuthOptionsScreens';
import SignInScreen from '~/screens/SignInScreen';
import SignUpScreen from '~/screens/SignUpScreen';
import UnloadingScreen from '~/screens/UnloadingScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'Another') {
          iconName = 'list';
        } else {
          iconName = 'help'; // Default icon name
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Another" component={AnotherScreen} />
  </Tab.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Unloading" component={UnloadingScreen} />
      <Stack.Screen
        name="AuthenticationOptions"
        component={AuthOptionsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="Home" component={TabNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
