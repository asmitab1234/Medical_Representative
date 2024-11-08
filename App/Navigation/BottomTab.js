import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon, useTheme } from 'react-native-basic-elements';
import { FONTS } from '../Constants/Fonts';
import { moderateScale } from '../Constants/PixelRatio';
import Home from '../Screens/Home/Home';
import Profile from '../Screens/Profile/Profile';
import AddDoctor from '../Screens/AddDoctor/AddDoctor';

const Tab = createBottomTabNavigator();
const BottomTab = () => {
    const colors = useTheme()
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontFamily: FONTS.Roboto.regular,
                    fontSize: moderateScale(10),
                },
                tabBarActiveTintColor: colors.buttonColor
            }}
            initialRouteName='Home'>
            <Tab.Screen
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon
                            name='home'
                            type='Entypo'
                            color={focused ? colors.buttonColor : 'grey'}
                            size={20}
                        />
                    )
                }}
                name="Home"
                component={Home}
            />

            <Tab.Screen
                options={{
                    tabBarLabel: 'Add Doctor',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon
                            name='pluscircle'
                            type='AntDesign'
                            color={focused ? colors.buttonColor :  'grey'}
                            size={20}
                        />
                    )
                }}
                name="Add Doctor"
                component={AddDoctor}
            />

            <Tab.Screen
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon
                            name='user'
                            type='FontAwesome'
                            color={focused ? colors.buttonColor :  'grey'}
                            size={20}
                        />
                    )
                }}
                name="Profile"
                component={Profile}
            />
        </Tab.Navigator>
    )
}

export default BottomTab

const styles = StyleSheet.create({
    iamgStyl: {
        height: moderateScale(20),
        width: moderateScale(20)
    }
})