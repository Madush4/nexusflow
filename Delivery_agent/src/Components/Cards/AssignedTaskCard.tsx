import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';


interface prop{
  type:number
}


const AssignedTaskCard = ({type}:prop) => {
  const router = useRouter()
  return (
    <View className='bg-[#DEDEDE] rounded-[24px] p-5 m-3 items-left justify-between'>
    
    {type?<><Text className='font-Poppins-Medium text-xl'>Delivery : D099134</Text>
      <Text className='font-Poppins-Light text-lg'>Area : Katubedda</Text>
      <Text className='font-Poppins-Light text-lg'>Total Locations : 35</Text>
</>:<><Text className='font-Poppins-Medium text-xl'>Pickup : P099134</Text>
      <Text className='font-Poppins-Light text-lg'>Location : Kottawa CBL</Text>
      <Text className='font-Poppins-Light text-lg'>Pickup time : 10:30am</Text>
</>}
      


      <TouchableOpacity className='bg-[#34C759] my-4 p-2 rounded-[10px]'   onPress={() => {
    if (type) {
      router.push({
        pathname: "/ActiveDeliveryDetails",
        params: { type, isActive: 0 },
      });
    } else {
      router.push({
        pathname: "/ActivePickupDetails" as any,
        params: { type, isActive: 0 },
      });
    }
  }}>
                    <Text className='text-center font-Poppins-Medium'>View more details</Text>
                  </TouchableOpacity>
      
    
    

  </View>
  )
}

export default AssignedTaskCard