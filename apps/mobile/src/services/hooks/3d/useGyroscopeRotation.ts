import type { THREE } from 'expo-three'

import type { RefObject } from 'react'
import { useLayoutEffect } from 'react'

import { Gyroscope } from 'expo-sensors'

const DEFAULT_UPDATE_INTERVAL = 5
const DEFAULT_SENSITIVITY_DUMPING = 0.05
const DEFAULT_ROTATION_MODIFIER = (rotation: number) => rotation

type Options = {
  updateInterval?: number
  sensitivityDumping?: number
  rotationModifierX?: (rotation: number) => number
  rotationModifierY?: (rotation: number) => number
  rotationModifierZ?: (rotation: number) => number
}

export default function useGyroscopeRotation(
  ref: RefObject<THREE.Group<THREE.Object3DEventMap>>,
  {
    updateInterval = DEFAULT_UPDATE_INTERVAL,
    sensitivityDumping = DEFAULT_SENSITIVITY_DUMPING,
    rotationModifierX = DEFAULT_ROTATION_MODIFIER,
    rotationModifierY = DEFAULT_ROTATION_MODIFIER,
    rotationModifierZ = DEFAULT_ROTATION_MODIFIER,
  }: Options = {},
) {
  useLayoutEffect(() => {
    Gyroscope.setUpdateInterval(updateInterval)

    const subscription = Gyroscope.addListener((data) => {
      if (ref.current) {
        ref.current.rotation.x = rotationModifierX(data.x * sensitivityDumping)
        ref.current.rotation.y = rotationModifierY(data.y * sensitivityDumping)
        ref.current.rotation.z = rotationModifierZ(data.z * sensitivityDumping)
      }
    })

    return () => subscription.remove()
  }, [ref])
}
