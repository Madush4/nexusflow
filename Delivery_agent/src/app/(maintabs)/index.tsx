import AssignedTasks from '@/Components/AssignedTasks'
import CheckInCard from '@/Components/Cards/CheckInCard'
import Header from '@/Components/Header'
import OngoingTask from '@/Components/OngoingTask'
import { ScrollView, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
const index = () => {
  return (
    <SafeAreaView className='flex-1 p-2 pb-0' edges={['top', 'left', 'right']}>
      <Header />
      <CheckInCard />
      <ScrollView
        className='flex-1'
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom:0 }}
      >
        <OngoingTask />
        <AssignedTasks />
      </ScrollView>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({})