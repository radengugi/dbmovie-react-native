import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements';
import Genre from '../components/genre';
import HomePage from '../pages/home';

const Tab = createBottomTabNavigator()

const TabNavigation = (props) => {
    return (
        <Tab.Navigator initialRouteName="Home"
            screenOptions={
                ({ route }) => ({
                    tabBarIcon: ({ color }) => {
                        let iconName;
                        if (route.name == "HomePage") {
                            iconName = "home"
                        } else if (route.name == "Genre") {
                            iconName = "search"
                        }
                        return <Icon type="feather" name={iconName} size={18} color={color} />
                    }
                })
            }
            tabBarOptions={{
                showLabel: false
            }}
        >
            <Tab.Screen name="HomePage" component={HomePage} />
            <Tab.Screen name="Genre" component={Genre} />
        </Tab.Navigator>
    )
}

export default TabNavigation;