import Animated from 'react-native-reanimated'

type Props = {
  children: JSX.Element | JSX.Element[]
}

export default function PaginationRoot({ children }: Props) {
  return (
    <Animated.View className='flex-row justify-center gap-1'>
      {children}
    </Animated.View>
  )
}
