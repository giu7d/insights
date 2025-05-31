import type { RefObject } from 'react'
import { useLayoutEffect } from 'react'

import { THREE } from 'expo-three'

export default function useMaterial(
  ref: RefObject<THREE.Group<THREE.Object3DEventMap>>,
  material: THREE.MeshStandardMaterial,
) {
  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material = material
        }
      })
    }
  }, [ref])
}
