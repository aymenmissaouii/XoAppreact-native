import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button, Image, Linking } from 'react-native';
import React, { useCallback }  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import Home from './screens/Home';
const App = () =>  {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");
  const bodyText = "Welcome Back!";
  const forgot = "Forgot Password!";

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerShown:false}}
      >
        <Stack.Screen
          name='Signin'
          component={Signin}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  }
export default App;
