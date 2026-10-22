import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

const ReportIssue = () => {
  return (
    <TouchableOpacity
  className="bg-[#FF8D28] my-2 p-3 rounded-[10px] w-full"
  onPress={() => console.log("Pressed")}
>
  <Text className="text-center font-Poppins-Medium">
    Report an issue
  </Text>
</TouchableOpacity>
  )
}

export default ReportIssue