import { THREE } from 'expo-three'
import { RefObject, useLayoutEffect } from 'react'

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
