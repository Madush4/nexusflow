import { View, Text,TouchableOpacity,Pressable,Image } from 'react-native'
import React from 'react'
import { Images } from '@/assets/assets';

const DocumentsCard = () => {
  return (
    <View className='bg-[#DEDEDE] rounded-[10px] p-5 mt-4 items-left justify-between'>
          <View className="flex-row justify-between items-center mb-3">
      <Text className="font-Poppins-Medium text-xl">
        Vehicle Pass
      </Text>

    </View>
    <View className="px-2 mb-4">
                <View className="h-px w-full bg-[#696969]" />
    </View>
    <View className='flex-row'>
      <View className='flex-1 justify-between'>
     <View className='mb-4'>
        <Text className='font-Poppins-Light text-lg'>Scheduled arrival time </Text>
        <Text className='font-Poppins-bold text-md'>10:30 am </Text>
      </View> 
      <View>
      <Text className='font-Poppins-Light text-lg'>No. of Personnel</Text>
      <Text className='font-Poppins-bold text-md'>2</Text>
      </View>
      </View>
      


      <View className='justify-between items-left'>
     <View className='mb-4 flex-1 justify-right'>
        <Text className='font-Poppins-Light text-lg'>Arrived at</Text>
        <Text className='font-Poppins-bold text-md'>10:30 am </Text>
      </View> 
      <View>
      <Text className='font-Poppins-Light text-lg'>Gate</Text>
      <Text className='font-Poppins-bold text-md'>G7</Text>
      </View>
      </View>
      
      </View>  
      <View className='flex-1 mt-5 justify-center items-center '>
      <Image
  source={Images.barcode}
  style={{ width: 300, height: 100 }}
  resizeMode="cover"
/>
</View>  
      
      
        </View>

  )
}

export default DocumentsCard