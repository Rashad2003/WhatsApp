import ButtonComp from '@/src/components/items/ButtonComp'
import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const login = () => {
    return (
        <SafeAreaView style={{ paddingVertical: verticalScale(30), paddingHorizontal: scale(20) }} className='flex-1 justify-between items-center'>
            <View style={{ gap: verticalScale(50) }}>
                <View style={{ gap: verticalScale(20) }}>
                    <Text style={{ fontSize: moderateScale(20) }} className='text-black font-bold text-center'>Enter your phone number</Text>
                    <Text style={{ fontSize: moderateScale(13) }} className='text-black font-semibold text-center'>WhatsApp needs to verify your phone number. <Text className='text-[#002ac0] font-bold'>What's my number?</Text></Text>
                </View>
                <View>

                    <View style={{ width: "100%", height: verticalScale(2), backgroundColor: "#05AA82" }}>

                    </View>
                </View>
            </View>
            <View>
                <ButtonComp title='Next' style={{ paddingHorizontal: scale(20) }} />
            </View>
        </SafeAreaView>
    )
}

export default login