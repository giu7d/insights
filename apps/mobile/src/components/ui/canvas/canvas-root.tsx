import { Suspense } from 'react'
import { ActivityIndicator, View } from 'react-native'

import { Canvas } from '@react-three/fiber/native'

type Props = {
  children: JSX.Element
}

export default function CanvasRoot({ children }: Props) {
  return (
    <View className="flex-1 w-full h-full">
      <Suspense
        fallback={
          <View className="flex-1 items-center justify-center">
            <ActivityIndicator />
          </View>
        }
      >
        <Canvas camera={{ position: [0, 0, 7] }}>{children}</Canvas>
      </Suspense>
    </View>
  )
}
