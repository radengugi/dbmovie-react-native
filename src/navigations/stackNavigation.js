import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import TabNavigation from './tabNavigation';
import Genre from '../components/genre';

const Stack = createStackNavigator()

const StackNavigation = (props) => {
    return (
        <Stack.Navigator initialRouteName="TabNav">
            <Stack.Screen name="TabNav" component={TabNavigation} options={{ headerShown: false }} />
            <Stack.Screen name="Genre" component={Genre} options={{ headerShown: false }} />
            {/* <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />  */}
        </Stack.Navigator>
    )
}

export default StackNavigation;