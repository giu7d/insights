import { useEffect, useLayoutEffect, useRef } from 'react'

import { Gltf } from '@react-three/drei/core'
import { Gyroscope } from 'expo-sensors'
import { THREE } from 'expo-three'

import model from '@/assets/models/black-abstract-art.gltf'

const material = new THREE.MeshStandardMaterial({
  color: 0x222222,
  metalness: 0.9,
  roughness: 0.3,
})

export default function CanvasModelBlackAbstractArt() {
  const ref = useRef<THREE.Group<THREE.Object3DEventMap>>(null)

  useLayoutEffect(() => {
    Gyroscope.setUpdateInterval(5)

    const subscription = Gyroscope.addListener((data) => {
      if (ref.current) {
        ref.current.rotation.x = data.x * 0.05 + 0.2
        ref.current.rotation.y = data.y * 0.05 + 0.2
        ref.current.rotation.z = data.z * 0.05
      }
    })

    return () => subscription.remove()
  }, [])

  useEffect(() => {
    if (ref.current) {
      ref.current.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material = material
        }
      })
    }
  }, [ref])

  return (
    <Gltf ref={ref} src={model as string} position={[0, 0, 0]} castShadow />
  )
}
