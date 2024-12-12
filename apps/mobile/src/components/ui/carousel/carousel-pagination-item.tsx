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
  progress: SharedValue<number>
}

export default function CarouselPaginationItem({ id, progress }: Props) {
  const inputRange = [id - 1, id, id + 1]

  const animatedStyle = useAnimatedStyle(() => ({
    width: interpolate(
      progress.value,
      inputRange,
      [8, 24, 8],
      Extrapolation.CLAMP,
    ),
    backgroundColor: interpolateColor(progress.value, inputRange, [
      colors.neutral[200],
      colors.black,
      colors.neutral[200],
    ]),
  }))

  return (
    <Animated.View
      className="w-2 h-2 rounded-full bg-black"
      style={animatedStyle}
    />
  )
}
