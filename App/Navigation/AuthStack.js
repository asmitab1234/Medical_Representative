//import liraries
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React, { Component } from 'react';
import SignIn from '../Screens/Auth/SignIn';
import OTP from '../Screens/Auth/OTP';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Onbroding'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="OTP" component={OTP} />
        </Stack.Navigator>
    );
};

export default AuthStack;
