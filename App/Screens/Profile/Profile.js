import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AppButton, Container, Icon, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import ImageCropPicker from 'react-native-image-crop-picker'
import { FONTS } from '../../Constants/Fonts'
import BackHeader from '../../Components/Header/BackHeader'

const Profile = () => {
  const colors = useTheme()
  const pick = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };
  return (
    <Container>
      <BackHeader title='Profile' />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: moderateScale(15), flex: 1 }}>

        <View
          style={{
            alignSelf: 'center',
          }}>
          <Image
            source={{ uri: 'https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D' }}
            style={styles.imgStyl}
          />
          <TouchableOpacity
            onPress={() => pick()}
            style={styles.iconEditBox}>
            <Icon
              name='camera'
              type='AntDesign'
              size={16}
              style={{
                // zIndex:5
              }}
            />
          </TouchableOpacity>
        </View>

        <Text
          style={{
            ...styles.nameTextStyl,
            marginBottom: moderateScale(40)
          }}>
          Soham Roy
        </Text>
        <View
          style={{
            ...styles.row,
          }}>
          <Text
            style={styles.lable}>
            Phone No.
          </Text>
          <Text
            style={styles.textstyl}>
            1234567890
          </Text>
        </View>

        <View
          style={{
            ...styles.row,
          }}>
          <Text
            style={styles.lable}>
            Shop
          </Text>
          <Text
            style={styles.textstyl}>
            Roy Medical
          </Text>
        </View>

        <Text
          style={{
            ...styles.lable,
            fontSize: moderateScale(14),
            marginTop: moderateScale(25),
            marginBottom: moderateScale(10)
          }}>
          Old Visited Doctor
        </Text>

        <View
          style={{
            paddingHorizontal: moderateScale(15),
            paddingVertical: moderateScale(8),
            elevation: 3,
            backgroundColor: colors.pageBackgroundColor,
            borderRadius: moderateScale(5)
          }}>
          <Text
            style={{
              ...styles.lable,
              fontSize: moderateScale(15)
            }}>
            Dr. Saha
          </Text>
          <Text
            style={styles.lable}>
            Diagnostic Test Name :{' '}
            <Text
              style={styles.textstyl}>
              Biopsi
            </Text>
          </Text>
          <Text
            style={{
              ...styles.textstyl,
              fontFamily: FONTS.Roboto.light
            }}>
            Date: 05.06.24
          </Text>
        </View>

        <View
          style={{
            paddingHorizontal: moderateScale(15),
            paddingVertical: moderateScale(8),
            elevation: 3,
            backgroundColor: colors.pageBackgroundColor,
            borderRadius: moderateScale(5),
            marginTop:moderateScale(19)
          }}>
          <Text
            style={{
              ...styles.lable,
              fontSize: moderateScale(15)
            }}>
            Dr. Saha
          </Text>
          <Text
            style={styles.lable}>
            Diagnostic Test Name :{' '}
            <Text
              style={styles.textstyl}>
              Biopsi
            </Text>
          </Text>
          <Text
            style={{
              ...styles.textstyl,
              fontFamily: FONTS.Roboto.light
            }}>
            Date: 05.06.24
          </Text>
        </View>

        <View style={{ flex: 1 }} />
        <AppButton
          title='Logout'
          textStyle={styles.lable}
          style={{
            borderWidth: moderateScale(1),
            backgroundColor: 'transparent',
            height: moderateScale(42),
            marginHorizontal: 0,
            marginVertical: moderateScale(45)
          }}
        />

      </ScrollView>
    </Container>
  )
}

export default Profile

const styles = StyleSheet.create({
  imgStyl: {
    height: moderateScale(100),
    width: moderateScale(100),
    borderRadius: moderateScale(80),
  },
  nameTextStyl: {
    fontFamily: FONTS.Roboto.bold,
    fontSize: moderateScale(14),
    textAlign: 'center'
  },
  iconEditBox: {
    padding: moderateScale(5),
    backgroundColor: '#E0E0E0',
    borderRadius: moderateScale(20),
    elevation: 2,
    borderWidth: moderateScale(0.2),
    position: 'absolute',
    right: moderateScale(0),
    bottom: moderateScale(10)
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: moderateScale(5)
  },
  lable: {
    fontFamily: FONTS.Roboto.medium,
    fontSize: moderateScale(13)
  },
  textstyl: {
    fontFamily: FONTS.Roboto.regular,
    fontSize: moderateScale(12)
  },
})