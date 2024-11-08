import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Theme, useTheme, StatusBar } from 'react-native-basic-elements';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './App/Redux/reducer/User';
import AuthService from './App/Services/Auth';
import AppStack from './App/Navigation/AppStack';
import NavigationService from './App/Services/Navigation';
import AuthStack from './App/Navigation/AuthStack';

const Stack = createStackNavigator();

const App = () => {
  const dispatch = useDispatch();
  const colors = useTheme();

  const { loginStatus } = useSelector(state => state.User);

  const [isLoading, setIsLoading] = useState(true);
  const [isdark, setIsDark] = useState(false)

  useEffect(() => {
    ckhUser();
  }, []);

  const ckhUser = () => {
    AuthService.getAccount()
      .then(result => {
        setIsLoading(false);
        if (result) {
          dispatch(setUser(result));
        }
      })
      .catch(err => {
        console.log('err>>>', err);
      });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff'
      }}
    >
      <StatusBar
        translucent={false}
        backgroundColor={'#FFFFFF'}
        barStyle='dark-content'
      />

      {
        isLoading ?
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <ActivityIndicator
              size='large'
            />
          </View>
          :
          <Theme.Provider
            theme={{
              light: {
                primaryThemeColor: '#FFFFFF',
                secondaryThemeColor: '#000000',
                primaryFontColor: '#000000',
                secondaryFontColor: '#FFFFFF',
                cardColor: '#F5F5F5',
                headerColor: '#FFFFFF',
                pageBackgroundColor: '#FFFFFF',
                tabBarColor: '#D3D3D3',
                shadowColor: '#999',
                statusBarStyle: 'dark-content',
                buttonColor: '#212121',
                secondaryButtoncolor: '#147C32',
                boxColor: 'rgba(104, 185, 46, 0.2)',
                borderColor: 'rgba(0, 0, 0, 0.3)',
                themeborderColor: 'rgba(248, 137, 129, 0.35)',
                subTxtColor: 'rgba(37, 51, 58, 0.7)',
                white: '#FFFFFF',
                greycardColor: 'rgba(244, 67, 54, 0.10)'
              },
              dark: {
                primaryThemeColor: '#FFFFFF',
                secondaryThemeColor: '#000000',
                primaryFontColor: '#000000',
                secondaryFontColor: '#FFFFFF',
                cardColor: '#F5F5F5',
                headerColor: '#FFFFFF',
                pageBackgroundColor: '#FFFFFF',
                tabBarColor: '#D3D3D3',
                shadowColor: '#999',
                statusBarStyle: 'dark-content',
                buttonColor: '#212121',
                secondaryButtoncolor: '#147C32',
                boxColor: 'rgba(104, 185, 46, 0.2)',
                borderColor: 'rgba(0, 0, 0, 0.3)',
                themeborderColor: 'rgba(248, 137, 129, 0.35)',
                subTxtColor: 'rgba(37, 51, 58, 0.7)',
                white: '#FFFFFF',
                greycardColor: 'rgba(244, 67, 54, 0.10)'
              },
            }}
            mode={!isdark ? 'light' : 'dark'}
          >
            <NavigationContainer
              ref={r => NavigationService.setTopLevelNavigator(r)}
            >
              <Stack.Navigator
                initialRouteName="AuthStack"
                screenOptions={{
                  headerShown: false
                }}
              >
                {/* {
                  !loginStatus ? */}
                <Stack.Screen name="AuthStack" component={AuthStack} />
                {/* : */}
                <Stack.Screen name="AppStack" component={AppStack} />
                {/* } */}
              </Stack.Navigator>
            </NavigationContainer>
          </Theme.Provider>
      }

    </View>
  );
};

export default App;
