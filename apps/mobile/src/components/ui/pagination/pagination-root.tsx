import Animated from 'react-native-reanimated'

type Props = {
  children: JSX.Element | JSX.Element[]
}

export default function PaginationRoot({ children }: Props) {
  return (
    <Animated.View className="flex-row gap-1 justify-center">
      {children}
    </Animated.View>
  )
}
