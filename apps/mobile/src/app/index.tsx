import { useState } from 'react'
import React from 'react'
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
      <SafeAreaView className="flex flex-1 gap-6 items-center justify-end bg-white">
        <WelcomeCarousel />
        <View className="flex-col gap-12 px-6 pb-6">
          <WelcomeCallout onActionButtonPress={() => setIsModalVisible(true)} />
        </View>
      </SafeAreaView>
      {/* Modal */}
      <Modal.Drawer
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      >
        <View className="flex-row w-full">
          <View className="flex-col">
            <Text className="text-base text-neutral-400">
              Verify your identity
            </Text>
            <Text className="font-semibold text-xl text-black">
              What's your email
            </Text>
          </View>
        </View>
        <View>
          <TextInput
            placeholder="Type your email here"
            className="w-full h-14 p-4 border-b border-neutral-200 placeholder:text-neutral-400 focus:border-black"
          />
        </View>
        <View className="flex-row justify-end">
          <TouchableOpacity
            onPress={() => setIsModalVisible(false)}
            className="h-12 px-12 items-center justify-center bg-black rounded-lg disabled:opacity-25"
          >
            <Text className="font-semibold text-sm text-white capitalize">
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </Modal.Drawer>
    </>
  )
}
