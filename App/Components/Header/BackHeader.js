import { StyleSheet, Switch, View } from 'react-native'
import React, { useState } from 'react'
import { AppBar, Container, Icon, useTheme } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import { moderateScale } from '../../Constants/PixelRatio'
import NavigationService from '../../Services/Navigation'

const BackHeader = ({ title = ' ', location = false }) => {
    const colors=useTheme()
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <AppBar.Back
            title={title}
            titleStyle={styles.tittleStyl}
            onLeftIconPress={() => NavigationService.back()}
            icon={{
                name: 'chevron-small-left',
                type: 'Entypo',
                size: moderateScale(35)
            }}
            titlePosition='left'
            rightActions={location ? [
                {
                    icon: (
                        <View
                            style={{
                                ...styles.row,
                                // borderWidth: moderateScale(0.2),
                                marginLeft: moderateScale(10),
                                borderRadius: moderateScale(5),
                                paddingVertical: moderateScale(4),
                                paddingHorizontal: moderateScale(5)
                            }}>
                            <Icon
                                name='location-pin'
                                type='Entypo'
                                size={28}
                                color={colors.buttonColor}
                            />
                            <Switch
                                trackColor={{ false: '#767577', true: colors.buttonColor }}
                                thumbColor={isEnabled ? '#EBEBEB' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                                style={{
                                    width: moderateScale(40)
                                }}
                            />
                        </View>
                    )
                }
            ] : []}
        />
    )
}

export default BackHeader

const styles = StyleSheet.create({
    tittleStyl: {
        fontFamily: FONTS.Roboto.bold,
        fontSize: moderateScale(16)
    },
    row:{
        flexDirection:'row',
        alignItems:'center'
    }
})