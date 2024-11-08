import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AppButton, Container, StatusBar, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import OtpInputs from 'react-native-otp-inputs'
import NavigationService from '../../Services/Navigation'
import { Image } from 'react-native'

const OTP = () => {
    const colors = useTheme()

    return (
        <Container>
            <StatusBar barStyle='dark-content' backgroundColor={colors.pageBackgroundColor} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: moderateScale(15), flex: 1 }}>

                <Image
                    source={require('../../Assets/password.png')}
                    style={styles.imagPin}
                />
                <Text
                    style={{
                        ...styles.heading,
                        marginBottom: moderateScale(10)
                    }}
                >
                    Verfication Code
                </Text>
                <Text
                    style={{
                        fontSize: moderateScale(13),
                        marginBottom: moderateScale(25),
                        fontFamily: FONTS.Roboto.light,
                        textAlign: 'center'
                    }}>
                    Please Enter The 4-digit Code Sent On Your{'\n'}
                    <Text
                        style={{
                            fontSize: moderateScale(13),
                            marginBottom: moderateScale(20),
                            fontFamily: FONTS.Roboto.medium,
                        }}>
                        Mobile 1234567890
                    </Text>
                </Text>

                <OtpInputs
                    // handleChange={(code) => console.log(code)}
                    numberOfInputs={4}
                    keyboardType='phone-pad'
                    style={{
                        flexDirection: 'row',
                        marginHorizontal: moderateScale(50),
                        justifyContent: "space-evenly",
                        width: "90%",
                        alignSelf: "center",

                    }}
                    inputStyles={{
                        width: moderateScale(50),
                        height: moderateScale(50),
                        borderWidth: moderateScale(0.5),
                        borderRadius: moderateScale(5),
                        textAlign: 'center',
                        color: colors.primaryFontColor
                    }}

                />

                <Text
                    style={{
                        ...styles.textStyle,
                        fontFamily: FONTS.Roboto.regular,
                        marginVertical: moderateScale(20)
                    }}>
                    04:00
                </Text>

                <View style={{ flex: 1 }} />
                <View
                    style={{
                        height: moderateScale(1),
                        width: '100%',
                        backgroundColor: '#BBBBBB'
                    }}
                />
                <AppButton
                    title="Login"
                    textStyle={{
                        ...styles.buttonText,
                        color: colors.pageBackgroundColor
                    }}
                    style={styles.buttonStyl}
                    onPress={() => NavigationService.navigate('AppStack')}
                />

                <View
                    style={styles.horizontaView}>
                    <Text
                        style={{
                            ...styles.textStyle,
                            textAlign: 'center',
                        }}>
                        Didn't You Receive The Otp ?{' '}
                    </Text>
                    <TouchableOpacity
                    // onPress={() => NavigationService.navigate('Registration')}
                    >
                        <Text
                            style={{
                                ...styles.textStyle,
                                fontFamily: FONTS.Roboto.bold
                            }}>
                            Resend OTP
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </Container>
    )
}

export default OTP

const styles = StyleSheet.create({
    heading: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(23),
        textAlign: 'center',
        marginTop: moderateScale(15)
    },
    buttonText: {
        fontFamily: FONTS.Roboto.bold,
        fontSize: moderateScale(14)
    },
    buttonStyl: {
        height: moderateScale(45),
        borderRadius: moderateScale(5),
        marginTop: moderateScale(5),
        marginHorizontal: 0
    },
    imagPin: {
        height: moderateScale(95),
        width: moderateScale(95),
        alignSelf: 'center',
        marginTop: moderateScale(80),
        marginBottom:moderateScale(20)

    },
    horizontaView: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: moderateScale(8),
        marginBottom: moderateScale(20)
    },
    textStyle: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(14),
        textAlign: 'center',
    },
})
