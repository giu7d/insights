import { useState } from 'react'
import {
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

import Button from '@/components/ui/button'
import Carousel from '@/components/ui/carousel'
import Modal from '@/components/ui/modal'

export default function Index() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaView className="flex flex-1 gap-6 items-center justify-end bg-white">
        {/* Carrousel */}
        <Carousel.Root
          renderPagination={(index, position) => (
            <Carousel.PaginationItem
              key={`carousel-pagination-item-${index}`}
              id={index}
              progress={position}
            />
          )}
        >
          <Carousel.Item>
            <BlackAbstractArtVideo />
          </Carousel.Item>
          <Carousel.Item>
            <Text>Slide 2</Text>
          </Carousel.Item>
          <Carousel.Item>
            <Text>Slide 3</Text>
          </Carousel.Item>
        </Carousel.Root>
        {/* Hero */}
        <View className="flex-col gap-12 px-6 pb-6">
          {/* Introduction */}
          <View className="items-center gap-4">
            <Text className="font-serif text-2xl text-black">
              Welcome to Insights
            </Text>
            <Text className="text-center text-neutral-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              lectus auctor, consequat ante eget, varius nisl.
            </Text>
          </View>
          {/* Button */}
          <Button.Primary onPress={() => setIsModalVisible(true)}>
            Get started
          </Button.Primary>
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

function BlackAbstractArtVideo() {
  return <></>
}
