import { useState } from 'react'
import {
  FlatList,
  KeyboardAvoidingView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native'

export default function Index() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const layout = useWindowDimensions()

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View className="flex flex-1 gap-12 items-center justify-center bg-white">
        {/* Carrousel */}
        <View>
          <FlatList
            horizontal
            className="flex-grow-0"
            contentContainerClassName="min-w-screen p-6 gap-4"
            data={Array(3).fill('')}
            renderItem={() => (
              <View
                style={{ width: layout.width - 24 * 2 }}
                className={`h-[375px] bg-neutral-300 rounded-3xl`}
              />
            )}
            decelerationRate={0}
            snapToAlignment="start"
            snapToInterval={layout.width - 24 - 12}
          />
          <View className="flex-row gap-1 justify-center">
            <View className="w-6 h-2 bg-black rounded-full"></View>
            <View className="w-2 h-2 bg-neutral-200 rounded-full"></View>
            <View className="w-2 h-2 bg-neutral-200 rounded-full"></View>
          </View>
        </View>
        {/* Introduction */}
        <View className="items-center px-6 gap-4">
          <Text className="font-serif text-2xl text-black">
            Welcome to Insights
          </Text>
          <Text className="text-center text-neutral-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            lectus auctor, consequat ante eget, varius nisl.
          </Text>
        </View>
        {/* Button */}
        <View className="px-6">
          <TouchableOpacity
            onPress={() => setIsModalVisible(true)}
            className="min-w-full h-14 p-4 items-center justify-center bg-black rounded-lg disabled:opacity-25"
          >
            <Text className="font-semibold text-base text-white capitalize">
              Get started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Modal */}
      {isModalVisible && (
        <>
          {/* Backdrop */}
          <View
            className="absolute flex w-full h-full z-10 bg-[rgba(0,0,0,0.2)]"
            onTouchEnd={() => setIsModalVisible(false)}
          />
          {/* Modal */}
          <KeyboardAvoidingView
            behavior="position"
            className="absolute flex w-full z-30 bottom-0 right-0"
          >
            <View className="flex flex-col w-fit m-4 mb-6 bg-white rounded-3xl">
              <View className="h-1 w-24 mt-4 bg-neutral-300 rounded-full self-center" />
              <View className="flex flex-col gap-12 p-6">
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
                    className="w-full h-14 p-4 border-b border-neutral-200 placeholder:text-neutral-400 placeholder:p-0 focus:border-black"
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
              </View>
            </View>
          </KeyboardAvoidingView>
        </>
      )}
    </>
  )
}
