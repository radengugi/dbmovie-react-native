import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BackButton, NativeRouter, Route } from 'react-router-native';
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './src/navigations/stackNavigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <SafeAreaProvider>
      <NativeRouter>
        <BackButton>
          <NavigationContainer>
            <StackNavigation/>
          </NavigationContainer>
        </BackButton>
      </NativeRouter>
    </SafeAreaProvider>
  )
}

export default App;