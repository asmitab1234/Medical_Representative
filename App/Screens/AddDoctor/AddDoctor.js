import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AppButton, AppTextInput, Container, Icon, Text, useTheme } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'

const AddDoctor = () => {
  const colors = useTheme()
  return (
    <Container>
      <BackHeader title='Add Doctor' location={true} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: moderateScale(15) }}>

        <AppTextInput
          title='Doctor’s name'
          titleStyle={styles.titleText}
          inputStyle={styles.placeholderText}
          inputContainerStyle={styles.inputContainer}
        />

        <AppTextInput
          title='Description'
          titleStyle={styles.titleText}
          inputStyle={{
            ...styles.placeholderText,
            textAlignVertical: 'top'
          }}
          inputContainerStyle={{ borderRadius: moderateScale(6) }}
          numberOfLines={3}
          mainContainerStyle={{ marginTop: moderateScale(8) }}
        />

        <AppTextInput
          title='Medicine Shop Name'
          titleStyle={styles.titleText}
          inputStyle={styles.placeholderText}
          inputContainerStyle={styles.inputContainer}
          mainContainerStyle={{ marginTop: moderateScale(8) }}
        />

        <AppTextInput
          title='Diagnostic Test Name'
          titleStyle={styles.titleText}
          inputStyle={styles.placeholderText}
          inputContainerStyle={styles.inputContainer}
          mainContainerStyle={{ marginTop: moderateScale(8) }}
        />

        <AppTextInput
          title='Product name'
          titleStyle={styles.titleText}
          inputStyle={styles.placeholderText}
          inputContainerStyle={styles.inputContainer}
          mainContainerStyle={{ marginTop: moderateScale(8) }}
        />

        {/* <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'flex-end',
            marginTop: moderateScale(5)
          }}>
          <Icon
            name='pluscircle'
            type='AntDesign'
            size={20}
            style={{ marginRight: moderateScale(5) }}
          />
          <Text
            style={styles.titleText}>
            Add More
          </Text>
        </TouchableOpacity> */}

        <AppTextInput
          title='Quantity'
          titleStyle={styles.titleText}
          inputStyle={styles.placeholderText}
          inputContainerStyle={styles.inputContainer}
          mainContainerStyle={{ marginTop: moderateScale(8) }}
        />

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'flex-end',
            marginTop: moderateScale(5)
          }}>
          <Icon
            name='pluscircle'
            type='AntDesign'
            size={20}
            style={{ marginRight: moderateScale(5) }}
          />
          <Text
            style={styles.titleText}>
            Add More
          </Text>
        </TouchableOpacity>

        <AppTextInput
          title='Commission (in %)'
          titleStyle={styles.titleText}
          inputStyle={styles.placeholderText}
          inputContainerStyle={styles.inputContainer}
          // mainContainerStyle={{ marginTop: moderateScale(8) }}
        />

        <AppButton
          title='Submit'
          textStyle={{
            ...styles.titleText,
            color: colors.secondaryFontColor
          }}
          style={styles.buttonStyl}
        />

      </ScrollView>
    </Container>
  )
}

export default AddDoctor

const styles = StyleSheet.create({
  titleText: {
    fontFamily: FONTS.Roboto.medium,
    fontSize: moderateScale(13)
  },
  placeholderText: {
    fontFamily: FONTS.Roboto.regular,
    fontSize: moderateScale(12)
  },
  inputContainer: {
    borderRadius: moderateScale(6),
    height: moderateScale(44)
  },
  buttonStyl: {
    borderRadius: moderateScale(6),
    height: moderateScale(44),
    marginVertical: moderateScale(20),
    marginHorizontal: 0
  }
})