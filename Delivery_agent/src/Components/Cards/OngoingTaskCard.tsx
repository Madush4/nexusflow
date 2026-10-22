import { View, Text, Pressable } from 'react-native'
import React from 'react'
import ReportIssue from '../Buttons/ReportIssue'
import * as Progress from 'react-native-progress';
import { useRouter } from 'expo-router';

interface prop{
  type:number
}

const OngoingTaskCard = ({type}:prop) => {
  const router = useRouter();
  
  return (
    <View className="bg-blue-300 rounded-[24px] p-3 mx-3 my-2 flex-row items-center justify-between">

  <View className="p-2 mr-2">
    <Text className="font-Poppins-Medium text-xl w-[200px]"
    numberOfLines={1}>
      {type ? "Delivery : D099134" : "Pickup : P099134"}
    </Text>

    <ReportIssue />
  </View>
  <View></View>
    
  <Pressable
  onPress={() => {
    if (type) {
      router.push({
        pathname: "/ActiveDeliveryDetails",
        params: { type, isActive: 1 },
      });
    } else {
      router.push({
        pathname: "/ActivePickupDetails" as any,
        params: { type, isActive: 1 },
      });
    }
  }}
>
    <Progress.Circle
      size={60}
      progress={0.9}
      thickness={2}
      color="#222222"
      unfilledColor="#D1D5DB"
      borderWidth={0}
      showsText
      formatText={() => "90%"}
      textStyle={{
        fontFamily: "Poppins-Medium",
        fontSize: 16,
        color: "#222222",
      }}
      strokeCap="round"
    />
  </Pressable>

</View>
    
  )
}

export default OngoingTaskCard