import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Text, View } from 'react-native';

const Header = () => {
  return (
    <View className='flex-row justify-between items-center my-3 mb-5'>
      <View>
        <Text className='font-Poppins-Regular font-bold text-2xl'>
          Hello Eranjana
        </Text>
      </View>
      <View className="w-12 h-12 bg-[#1F41BB] rounded-full items-center justify-center">
        <MaterialIcons name="person-outline" size={24} color="white" />
      </View>

    </View>
  )
}

export default Header