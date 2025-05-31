import { useState } from 'react'
import {
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

import WelcomeCallout from '@/components/components/welcome-callout'
import WelcomeCarousel from '@/components/components/welcome-carousel'
import Modal from '@/components/ui/modal'

export default function Index() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <>
      <StatusBar />
      <SafeAreaView className='flex flex-1 items-center justify-end gap-6 bg-white'>
        <WelcomeCarousel />
        <View className='flex-col gap-12 px-6 pb-6'>
          <WelcomeCallout onActionButtonPress={() => setIsModalVisible(true)} />
        </View>
      </SafeAreaView>
      {/* Modal */}
      <Modal.Drawer
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      >
        <View className='w-full flex-row'>
          <View className='flex-col'>
            <Text className='text-base text-neutral-400'>
              Verify your identity
            </Text>
            <Text className='text-xl font-semibold text-black'>
              What's your email
            </Text>
          </View>
        </View>
        <View>
          <TextInput
            placeholder='Type your email here'
            className='h-14 w-full border-b border-neutral-200 p-4 placeholder:text-neutral-400 focus:border-black'
          />
        </View>
        <View className='flex-row justify-end'>
          <TouchableOpacity
            onPress={() => setIsModalVisible(false)}
            className='h-12 items-center justify-center rounded-lg bg-black px-12 disabled:opacity-25'
          >
            <Text className='text-sm font-semibold capitalize text-white'>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </Modal.Drawer>
    </>
  )
}
