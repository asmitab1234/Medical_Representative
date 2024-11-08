import { Dimensions, Image, ImageBackground, Pressable, ScrollView, StyleSheet, Switch, ToastAndroid, View, } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { AppButton, Card, Container, Icon, StatusBar, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
const { height, width } = Dimensions.get('window')
import RNPhoneInput from "react-native-phone-number-input";
import NavigationService from '../../Services/Navigation'


const Login = () => {
    const colors = useTheme()

    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const phoneInput = useRef(null);

    return (
        <Container>
            <StatusBar translucent={true} barStyle='dark-content' backgroundColor={'transparent'} />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: moderateScale(15) }}
            >
                <Image
                    source={require('../../Assets/stethoscope.png')}
                    style={styles.logoStyl}
                />
                <Text
                    style={{
                        ...styles.titleStyl,
                        fontSize: moderateScale(22),
                        textAlign: 'center'
                    }}>
                   Medical Representative
                </Text>

                <RNPhoneInput
                    ref={phoneInput}
                    defaultValue={value}
                    defaultCode="IN"
                    layout="first"
                    onChangeText={(text) => {
                        setValue(text);
                    }}
                    onChangeFormattedText={(text) => {
                        setFormattedValue(text);
                    }}
                    withDarkTheme
                    withShadow
                    autoFocus
                    containerStyle={{
                        ...styles.inputBox,
                        borderRadius: moderateScale(10),
                        height: moderateScale(45),
                        width: '100%'
                    }}
                    textContainerStyle={{
                        width: '80%',
                        height: '100%',
                        borderRadius: moderateScale(10),
                        paddingVertical: 0,
                        marginHorizontal: moderateScale(2)
                    }}
                    countryPickerButtonStyle={{
                        borderRightWidth: 1,
                    }}
                    textInputProps={{
                        placeholderTextColor: '#999'
                    }}
                />

                <Text
                    style={styles.optionText}>
                    An OTP will be sent on given phone number for verification. Standard message and data rates apply.
                </Text>

                <AppButton
                    title='Get verfication Code'
                    style={styles.buttonStyl}
                    textStyle={{
                        ...styles.titleStyl,
                        fontFamily: FONTS.Roboto.medium,
                        color: colors.secondaryFontColor
                    }}
                    onPress={() => NavigationService.navigate('OTP')}
                />

            </ScrollView>
        </Container>
    )
}

export default Login

const styles = StyleSheet.create({
    imageStyl: {
        height: '100%',
        width: width,
        paddingHorizontal: moderateScale(15)
    },
    inputBox: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: moderateScale(8),
        marginTop: moderateScale(80),
        borderColor: 'rgba(109, 109, 109, 0.8)',
        borderWidth: moderateScale(1),
        borderRadius: moderateScale(5),
    },
    buttonStyl: {
        marginHorizontal: 0,
        marginTop: moderateScale(30),
        height: moderateScale(45),
    },
    titleStyl: {
        fontFamily: FONTS.Roboto.bold,
        fontSize: moderateScale(16)
    },
    titleRegularStyl: {
        fontFamily: FONTS.Roboto.regular,
        fontSize: moderateScale(15)
    },
    rowView: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    logoStyl: {
        height: moderateScale(80),
        width: moderateScale(80),
        marginBottom: moderateScale(20),
        marginTop: moderateScale(150),
        alignSelf: 'center'
    },
    optionText: {
        fontFamily: FONTS.Roboto.light,
        fontSize: moderateScale(11),
        marginTop: moderateScale(2),
        textAlign: 'center'
    }

})