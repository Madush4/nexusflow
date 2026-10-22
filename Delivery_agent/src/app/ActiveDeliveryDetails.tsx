import { View, Text, Pressable,TouchableOpacity,FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import * as Progress from 'react-native-progress';
import ShopDetailsCard from '@/Components/Cards/ShopDetailsCard';
import { useLocalSearchParams } from 'expo-router';
import ReportIssue from '@/Components/Buttons/ReportIssue';


const ActiveDeliveryDetails = () => {
  const router = useRouter();
  const {type,isActive} =
  useLocalSearchParams<{
    type:string
    isActive:string
  }>();
  const list = [1,2,3,4,5]
  return (
    <SafeAreaView className='flex-1 p-4' edges={['top', 'left', 'right']}>
      <Pressable onPress={() => router.back()}>
      <MaterialIcons name="arrow-back" size={24} color="black" />
      </Pressable>


<View className='bg-blue-300 my-5 p-3 rounded-[10px]'>

              <View className=' flex-row justify-between items-center my-4 '>
                      <View >
                      <Text className='font-Poppins-Medium text-xl'>Delivery : D099134</Text>
                            <Text className='font-Poppins-Light text-lg'>Next Stop : ABC Shop</Text>
                            <Text className='font-Poppins-Light text-lg'>Delivery Vehilce : VEH1234</Text>
                           
                      </View>
                      <View>
                        <Progress.Circle
                                    size={60}
                                    progress={0}
                                    thickness={2}
                                    color="#222222"
                                    unfilledColor="#D1D5DB"
                                    borderWidth={0}
                                    showsText
                                    formatText={() => "0%"}
                                    textStyle={{
                                      fontFamily: "Poppins-Medium",
                                      fontSize: 16,
                                      color: "#222222",
                                    }}
                                    strokeCap="round"
                                  />
                      </View>

              </View>
              <TouchableOpacity className='bg-white my-2 p-3 rounded-[10px]'  onPress={()=>console.log("Pressed")}>
                <Text className='text-center font-Poppins-Medium'>Call Driver</Text>
              </TouchableOpacity>
              <TouchableOpacity className='bg-white my-2 p-3 rounded-[10px]'  onPress={()=>console.log("Pressed")}>
                <Text className='text-center font-Poppins-Medium'>Open route</Text>
              </TouchableOpacity>
              {parseInt(isActive)?<ReportIssue/>:<TouchableOpacity className='bg-[#34C759] my-2 p-3 rounded-[10px]'  onPress={()=>console.log("Pressed")}>
                <Text className='text-center font-Poppins-Medium'>Start Task</Text>
              </TouchableOpacity>}
</View>
              <Text className='font-Poppins-Light text-xl my-2'>Shop list and detail</Text> 
              <FlatList
              showsVerticalScrollIndicator={false}
        data={list}
        renderItem={({index}) => <ShopDetailsCard/>}
        
      />
      
                                  




    </SafeAreaView>
  )
}

export default ActiveDeliveryDetails