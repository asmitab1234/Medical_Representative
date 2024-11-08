import { Image, StyleSheet, Switch, View } from 'react-native'
import React, { useState } from 'react'
import { Icon, StatusBar, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'

const HomeHeader = () => {
    const colors = useTheme()
    return (
        <View>
            <StatusBar backgroundColor={colors.pageBackgroundColor} barStyle='dark-content' />
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginHorizontal: moderateScale(15),
                    marginTop: moderateScale(15),
                    marginBottom:moderateScale(5)

                }}>
                <View
                    style={{
                        ...styles.row
                    }}>
                    <Image
                        source={{ uri: 'https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D' }}
                        style={styles.imgSyl}
                    />
                    <View
                        style={{ marginLeft: moderateScale(10) }}>
                        <Text
                            style={styles.welcomeText}>
                            Kolkata,
                        </Text>
                        <Text
                            style={{
                                ...styles.nameText,
                                fontFamily: FONTS.Roboto.medium
                            }}>
                            10.06.24
                        </Text>

                    </View>
                </View>

                {/* <View
                    style={{ ...styles.row }}>
                    <View
                        style={styles.cirle}>
                        <Icon
                            name='notifications-outline'
                            type='Ionicon'
                            size={19}
                            onPress={() => NavigationService.navigate('Notification')}
                        />
                    </View>

                </View> */}
                <View
                    style={{ alignItems: 'center' }}>
                    <Text
                        style={{
                            ...styles.nameText,
                            fontFamily: FONTS.Roboto.regular
                        }}>
                        June Target
                    </Text>
                    <Text
                        style={styles.nameText}>
                        8 / 10
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    imgSyl: {
        height: moderateScale(43),
        width: moderateScale(43),
        borderRadius: moderateScale(100)
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    welcomeText: {
        fontFamily: FONTS.Roboto.bold,
        fontSize: moderateScale(18)
    },
    nameText: {
        fontFamily: FONTS.Roboto.light,
        fontSize: moderateScale(11)
    },
    cirle: {
        height: moderateScale(35),
        width: moderateScale(35),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: moderateScale(0.2),
        borderRadius: moderateScale(50)
    },
})