import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Card, Icon, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'

const DoctorComponent = ({ item }) => {
    const colors = useTheme()
    return (
        <Card
            style={styles.mainCard}>
            <Text
                style={{
                    ...styles.nameText
                }}>
                {item.name}
            </Text>
            <Text
                style={{
                    ...styles.descText,
                    marginTop: moderateScale(5)
                }}>
                {item.desc}
            </Text>

            <View
                style={{
                    ...styles.row,
                    marginTop: moderateScale(5)
                }}>
                <Text
                    style={{
                        ...styles.shopText
                    }}>
                    {item.shop} Shop
                </Text>
                <Icon
                    name='dot-single'
                    type='Entypo'
                    color={'grey'}
                    size={16}
                />
                <Text
                    style={{
                        ...styles.shopText
                    }}>
                    {item.test} Test
                </Text>
            </View>

            <View
                style={{
                    ...styles.row,
                    marginTop: moderateScale(5)
                }}>
                <Text
                    style={{
                        ...styles.medicalText
                    }}>
                    {item.product}
                </Text>
                <Icon
                    name='dot-single'
                    type='Entypo'
                    color={'grey'}
                    size={16}
                />
                <Text
                    style={{
                        ...styles.medicalText
                    }}>
                    {item.quantity}
                </Text>
            </View>
            
            <Text
                style={{
                    ...styles.medicalText
                }}>
                Commission : {item.commission}
            </Text>
        </Card>
    )
}

export default DoctorComponent

const styles = StyleSheet.create({
    mainCard: {
        marginVertical: moderateScale(10)
    },
    nameText: {
        fontFamily: FONTS.Roboto.bold,
        fontSize: moderateScale(18)
    },
    descText: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(13)
    },
    medicalText: {
        fontFamily: FONTS.Roboto.light,
        fontSize: moderateScale(12)
    },
    shopText: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(12)
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})