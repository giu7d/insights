import { View } from 'react-native'

import { Canvas } from '@react-three/fiber/native'
import { Color } from 'three'

type Props = {
  children: JSX.Element
}

export default function CanvasRoot({ children }: Props) {
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
      }}
    >
      {/* TODO: Validate: TypeError: Cannot read property 'trim' of undefined */}
      <Canvas camera={{ position: [0, 0, 7] }}>
        <directionalLight
          intensity={5}
          position={[1, 0, 0]}
          color={Color.NAMES.white}
        />
        <directionalLight
          intensity={5}
          position={[0, 1, 0]}
          color={Color.NAMES.white}
        />
        <directionalLight
          intensity={5}
          position={[0, 0, 1]}
          color={Color.NAMES.white}
        />
        {children}
      </Canvas>
    </View>
  )
}
