import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Auth = () => {

  const [loading, setLoading] = useState(false);

  let navigate_to_home = () => {
    router.push('/(auth)/terms_agree');
  };

  let loading_timeout = () => {
    setLoading(true);
    setTimeout(navigate_to_home, 3000);
  };

  useEffect(() => {
    const timeout = setTimeout(loading_timeout, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <SafeAreaView className='flex-1 justify-between items-center py-[50px]'>
      <View></View>
      <View className='items-center gap-[10px]'>
        <Image source={require('../../assets/images/logo.png')} className='w-[70px] h-[70px] rounded-[10px]' resizeMode='contain' />
        <Text className='text-black text-[35px] font-bold'>WhatsApp</Text>
      </View>
      <View className='items-center h-[80px] justify-end'>
        {loading ? (
          <>
            <ActivityIndicator size="large" color="#0cc003" />
            <Text className='text-[#867373] text-[12px] '>Loading...</Text>
          </>
        ) : (
          <>
            <Text className='text-[#867373] text-[12px] '>From</Text>
            <Text className='text-[#867373] text-[20px] font-bold mt-[10px]'>Facebook</Text>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Auth;