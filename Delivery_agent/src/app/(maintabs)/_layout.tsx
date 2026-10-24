import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#1F41BB', headerShown: false, tabBarInactiveTintColor: "black", headerTitleStyle: { fontFamily: "Poppins-Regular", } }}>
      <Tabs.Screen
        name="index"

        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Entypo name="home" size={20} color={color} />

        }}
      />
      <Tabs.Screen
        name="addnewshop"
        options={{
          title: 'Add New Shop',
          tabBarIcon: ({ color }) => <Entypo name="add-to-list" size={20} color={color} />,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          tabBarIcon: ({ color }) => <AntDesign name="history" size={20} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <AntDesign name="setting" size={20} color={color} />,
        }}
      />
    </Tabs>
  );
}
