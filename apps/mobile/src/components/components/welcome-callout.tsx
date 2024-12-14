import React from 'react'
import { Text, View } from 'react-native'

import Button from '@/components/ui/button'

type Props = {
  onActionButtonPress?: () => void
}

export default function WelcomeCallout({
  onActionButtonPress = () => {},
}: Props) {
  return (
    <>
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
      <Button.Primary onPress={onActionButtonPress}>Get started</Button.Primary>
    </>
  )
}
