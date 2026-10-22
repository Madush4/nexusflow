import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import OngoingTaskCard from './Cards/OngoingTaskCard'
const OngoingTask = () => {
  return (
          <View className='mt-7'>
            <Text className='font-Poppins-Light text-xl'>Ongoin Tasks</Text>
     {/* 1 for delivery and 0 for pickup */}
            <OngoingTaskCard type={1}/>
            <OngoingTaskCard type={0}/>
            
    
    
    
          </View>
    
  )
}

export default OngoingTask