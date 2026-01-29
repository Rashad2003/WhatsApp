import ButtonComp from '@/src/components/items/ButtonComp'
import imageFolder from '@/src/constants/imageFolder'
import { router } from 'expo-router'
import React from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const terms_agree = () => {
    const onAgree = () => {
        router.push('/(auth)/login');
    };
    return (
        <SafeAreaView style={{ paddingVertical: verticalScale(84), paddingHorizontal: scale(30) }} className='flex-1 bg-white items-center justify-between'>
            <View style={{ gap: verticalScale(30) }} className='items-center'>
                <Text style={{ fontSize: moderateScale(25), width: moderateScale(300), marginBottom: verticalScale(10) }} className='font-bold text-black text-center'>Welcome to WhatsApp</Text>
                <Image source={imageFolder.welcome} style={{ width: moderateScale(250), height: moderateScale(250), borderRadius: moderateScale(250) }} resizeMode='contain' />
                <Text style={{ fontSize: moderateScale(13), width: moderateScale(300) }} className='text-[#867373] text-center'>Read our <Text className='text-[#0c42cc] font-bold'>Privacy Policy</Text>. Tap Agree and Continue to accept the <Text className='text-[#0c42cc] font-bold'>Terms of Service</Text>.</Text>
                <View style={{ width: moderateScale(300) }}>
                    <ButtonComp title="Agree and Continue" onPress={onAgree} />
                </View>
            </View>
            <View className='items-center'>
                <Text style={{ fontSize: moderateScale(12) }} className='text-[#867373]'>From</Text>
                <Text style={{ fontSize: moderateScale(15) }} className='text-[#000] font-bold'>FACEBOOK</Text>
            </View>
        </SafeAreaView>
    )
}

export default terms_agree