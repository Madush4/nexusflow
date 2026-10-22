import { View, Text,TouchableOpacity,Pressable } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';

const ShopDetailsCard = () => {
  return (
    <View className='bg-[#DEDEDE] rounded-[10px] p-5 mt-4 items-left justify-between'>
          <View className="flex-row justify-between items-center mb-3">
      <Text className="font-Poppins-Medium text-xl">
        ABC Shop
      </Text>

      <Pressable>
        <View className="w-10 h-10 bg-white rounded-full items-center justify-center">
          <Feather name="phone-call" size={20} color="black" />
        </View>
      </Pressable>
    </View>
          
            <Text className='font-Poppins-Light text-md'>Location : 24/14 , Saman mawatha, Kadawatha </Text>
              <TouchableOpacity className='bg-white my-4 p-2 rounded-[10px]'   >
                                  <Text className='text-center font-Poppins-Medium'>View product details</Text>
                                </TouchableOpacity>
      
        </View>

                       
  )
}

export default ShopDetailsCard