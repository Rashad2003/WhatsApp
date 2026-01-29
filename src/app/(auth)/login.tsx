import ButtonComp from '@/src/components/items/ButtonComp';
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const login = () => {
    const [visible, setVisible] = useState(false);
    const [countryName, setCountryName] = useState('India');
    const [countryCode, setCountryCode] = useState<any>('IN');
    const [callingCode, setCallingCode] = useState('91');
    const onNext = () => {
        router.push('/(auth)/verify_otp');
    }
    return (
        <SafeAreaView style={{ paddingVertical: verticalScale(50), paddingHorizontal: scale(40) }} className='flex-1 justify-between items-center'>
            <View style={{ gap: verticalScale(50) }}>
                <View style={{ gap: verticalScale(20) }}>
                    <Text style={{ fontSize: moderateScale(20) }} className='text-black font-bold text-center'>Enter your phone number</Text>
                    <Text style={{ fontSize: moderateScale(13) }} className='text-black font-semibold text-center'>WhatsApp needs to verify your phone number. <Text className='text-[#002ac0] font-bold'>What's my number?</Text></Text>
                </View>
                <View >
                    <TouchableOpacity onPress={() => setVisible(true)} style={{ paddingVertical: verticalScale(20), paddingHorizontal: scale(20) }} className='flex-row items-center justify-between'>
                        <View />
                        <Text style={{ fontSize: moderateScale(16) }} className='text-black font-semibold'>{countryName}</Text>
                        <AntDesign name="caret-down" size={moderateScale(14)} color="black" />
                    </TouchableOpacity>
                    <View style={{ width: "100%", height: verticalScale(1), backgroundColor: "#05AA82" }} />
                    <View style={{ paddingVertical: verticalScale(10), gap: scale(20) }} className='flex-row items-center'>
                        <View style={{ gap: verticalScale(10) }}>
                            <Text style={{ fontSize: moderateScale(16) }} className='text-black font-bold'>+  {callingCode}</Text>
                            <View style={{ width: "100%", height: verticalScale(1), backgroundColor: "#05AA82" }} />

                        </View>
                        <View style={{ gap: verticalScale(10) }} className='flex-1'>
                            <TextInput placeholder='Phone number' style={{ fontSize: moderateScale(16) }} />
                            <View style={{ width: "100%", height: verticalScale(1), backgroundColor: "#05AA82" }} />
                        </View>
                    </View>
                </View>
            </View>
            <View>
                <ButtonComp title='Next' style={{ paddingHorizontal: scale(20) }} onPress={onNext} />
            </View>
            {visible && (
                <CountryPicker
                    visible={visible}
                    onClose={() => setVisible(false)}
                    countryCode={countryCode}
                    withFilter
                    withCallingCode
                    withFlag
                    onSelect={(country: any) => {
                        setCountryName(country.name as string);
                        setCountryCode(country.cca2);
                        setCallingCode(country.callingCode[0]);
                        setVisible(false);
                    }}
                />
            )}
        </SafeAreaView>
    )
}

export default login