import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { AppButton, Container, Text } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import HomeHeader from '../../Components/Header/HomeHeader'
import DoctorComponent from '../../Components/Home/DoctorComponent'
import { BarChart, LineChart } from 'react-native-gifted-charts'
import { FONTS } from '../../Constants/Fonts'

const Home = () => {
    const doctorArr = [
        {
            name: 'Dr. Barman',
            desc: 'Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing',
            shop: 'Roy Medical',
            test: 'CT Scan',
            product: 'Paracitamol',
            quantity: '30 Pc',
            commission: '30%'
        },
        {
            name: 'Dr. Barman',
            desc: 'Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing',
            shop: 'Roy Medical',
            test: 'CT Scan',
            product: 'Paracitamol',
            quantity: '30 Pc',
            commission: '30%'
        },
        {
            name: 'Dr. Barman',
            desc: 'Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing',
            shop: 'Roy Medical',
            test: 'CT Scan',
            product: 'Paracitamol',
            quantity: '30 Pc',
            commission: '30%'
        },
        {
            name: 'Dr. Barman',
            desc: 'Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing',
            shop: 'Roy Medical',
            test: 'CT Scan',
            product: 'Paracitamol',
            quantity: '30 Pc',
            commission: '30%'
        },
        {
            name: 'Dr. Barman',
            desc: 'Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing',
            shop: 'Roy Medical',
            test: 'CT Scan',
            product: 'Paracitamol',
            quantity: '30 Pc',
            commission: '30%'
        },
    ]

    const data = [
        { value: 25, label: 'Jan' },
        { value: 50, label: 'Feb' },
        { value: 74, label: 'Mar' },
        { value: 32, label: 'Apr' },
        { value: 60, label: 'May' },
        { value: 25, label: 'Jun' },
        { value: 42, label: 'Jul' },
        { value: 39, label: 'Aug' },
        { value: 47, label: 'Sep' },
        { value: 51, label: 'Oct' },
        { value: 53, label: 'Nov' },
        { value: 48, label: 'Dec' },
    ];

    return (
        <Container>
            <HomeHeader />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: moderateScale(15) }}>
                <Text
                    style={{
                        ...styles.textStyl,
                        marginTop: moderateScale(20)
                    }}>
                    Analytics
                </Text>
                <View
                    style={{
                        marginVertical: moderateScale(10),
                        // backgroundColor: '#000000'
                    }}>
                    {/* <BarChart
            barWidth={22}
            noOfSections={3}
            barBorderRadius={4}
            frontColor="#1685DF"
            data={data}
            yAxisThickness={0}
            xAxisThickness={0}
          /> */}
                    <LineChart
                        curved
                        noOfSections={3}
                        data={data}
                        color={'#4995DC'}
                        thickness={3}
                        dataPointsColor={'#E2791E'}
                        yAxisThickness={0}
                        xAxisThickness={0}
                        initialSpacing={5}
                        // textProps={{
                        //     color: '#000000', // Label text color
                        //     fontSize: 12,
                        // }}
                        yAxisTextStyle={{ color: '#000000' }} // Y-axis label text color
                        xAxisLabelTextStyle={{ color: '#000000' }} // X-axis label text color
                        
                    />
                </View>
                {doctorArr.map((item, index) => (
                    <DoctorComponent
                        key={index}
                        item={item}
                    />
                ))}
            </ScrollView>
        </Container>
    )
}

export default Home

const styles = StyleSheet.create({
    textStyl: {
        fontFamily: FONTS.Roboto.medium,
        fontSize: moderateScale(15)
    },
})