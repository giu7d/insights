import type { SharedValue } from 'react-native-reanimated'

import { View, useWindowDimensions } from 'react-native'

import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated'

type Props = {
  children: JSX.Element[]
  renderPagination: (
    index: number,
    position: SharedValue<number>,
  ) => JSX.Element
}

export default function CarouselRoot({ children, renderPagination }: Props) {
  const layout = useWindowDimensions()
  const position = useSharedValue(0)

  const handleScroll = useAnimatedScrollHandler((event) => {
    position.set(event.contentOffset.x / layout.width)
  })

  return (
    <View className="gap-4 flex-1 items-center justify-end">
      <Animated.FlatList
        horizontal
        onScroll={handleScroll}
        scrollEventThrottle={16}
        decelerationRate={0.9}
        snapToAlignment="center"
        snapToInterval={layout.width}
        showsHorizontalScrollIndicator={false}
        className="flex-1"
        contentContainerClassName="min-w-screen"
        data={children}
        renderItem={({ item }) => <>{item}</>}
      />
      <Animated.View className="flex-row gap-1 justify-center">
        {Array(children.length)
          .fill(undefined)
          .map((_, index) => renderPagination(index, position))}
      </Animated.View>
    </View>
  )
}
