import type { SharedValue } from 'react-native-reanimated'

import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated'
import colors from 'tailwindcss/colors'

type Props = {
  id: number
  currentPosition: SharedValue<number>
}

export default function PaginationItem({ id, currentPosition }: Props) {
  const inputRange = [id - 1, id, id + 1]

  const animatedStyle = useAnimatedStyle(() => ({
    width: interpolate(
      currentPosition.value,
      inputRange,
      [8, 24, 8],
      Extrapolation.CLAMP,
    ),
    backgroundColor: interpolateColor(currentPosition.value, inputRange, [
      colors.neutral[200],
      colors.black,
      colors.neutral[200],
    ]),
  }))

  return (
    <Animated.View
      className='h-2 w-2 rounded-full bg-black'
      style={animatedStyle}
    />
  )
}
