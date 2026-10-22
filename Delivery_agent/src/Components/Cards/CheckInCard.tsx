import { View, Text,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const CheckInCard = () => {
  const [isCheckedIn,setCheckIn] = useState<boolean>(false);
  const checkCheckedIn = ()=>{
    setCheckIn(prev=>!prev);
  }
  const today = new Date();

  const formattedDate = today.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });
  return (
    <LinearGradient
        style={{borderRadius:15,}}       
        colors={['#3357D9', '#1B2E73']}
        >
          <View className='flex-row m-2 p-2 items-center justify-between'>
          <View className='flex-row items-center'>
          <View className="w-12 h-12 bg-white rounded-full items-center justify-center">
              <MaterialIcons name="person-outline" size={24} color="black" />
          </View>
          <View className='mx-5'>
            <Text className='font-Poppins-Bold text-white text-[20px]'>Eranjna Vishwajith</Text>
            <Text className='font-Poppins-Light text-white text-[15px]'>Marketing Agent</Text>
          </View>
          </View>
          <View className='mx-5'>
          <MaterialIcons name="arrow-forward-ios" size={24} color="white" />
          </View>
          
          </View>
          <View className="px-4">
            <View className="h-px w-full bg-white" />
          </View>



          <View className='p-4'>

            <View className='my-3 flex-row'>
            <MaterialIcons name="calendar-today" size={18} color="white" />
            <Text className='font-Poppins-Light text-white pl-2'>{formattedDate}</Text>
            </View>

          <View className=' flex-row justify-between my-1'>
            <View className='flex-row'>
              <Text className='font-Poppins-Light text-white pr-2'>Check-In Time :</Text>
              <Text className='font-Poppins-Light text-white'>--:--</Text>
            </View>
            <View className='flex-row'>
              <Text className='font-Poppins-Light text-white pr-2'>Check-Out Time :</Text>
              <Text className='font-Poppins-Light text-white'>--:--</Text>
            </View>
          </View>
          <TouchableOpacity className={`${isCheckedIn?"bg-[#34C759]":"bg-[#FF383C]"} my-4 p-2 rounded-[10px]`} onPress={checkCheckedIn}>
              <Text className='text-center font-Poppins-Medium'>{isCheckedIn?"Check-In":"Check-Out"}</Text>
            </TouchableOpacity>
          </View>
      </LinearGradient>
  )
}

export default CheckInCard