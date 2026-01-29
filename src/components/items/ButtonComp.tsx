import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const ButtonComp = ({ title, onPress }: any) => {
    return (
        <TouchableOpacity style={{ paddingVertical: verticalScale(20), paddingHorizontal: scale(20), borderRadius: moderateScale(4) }} activeOpacity={0.8} onPress={onPress} className='bg-[#00A884] w-full rounded-[10px] items-center justify-center'>
            <Text style={{ fontSize: moderateScale(14) }} className='text-white font-bold'>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonComp