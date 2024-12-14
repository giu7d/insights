import { useRef } from 'react'

import { Gltf } from '@react-three/drei/core'
import { THREE } from 'expo-three'
import { Color } from 'three'

import model from '@/assets/models/black-abstract-art.gltf'
import useGyroscopeRotation from '@/services/hooks/3d/useGyroscopeRotation'
import useMaterial from '@/services/hooks/3d/useMaterial'

const material = new THREE.MeshStandardMaterial({
  color: 0x222222,
  metalness: 0.9,
  roughness: 0.3,
})

export default function CanvasSceneAbstractArt() {
  const ref = useRef<THREE.Group<THREE.Object3DEventMap>>(null)

  useMaterial(ref, material)

  useGyroscopeRotation(ref, {
    rotationModifierX: (rotation) => rotation + 0.2,
    rotationModifierY: (rotation) => rotation + 0.2,
  })

  return (
    <>
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
      <Gltf ref={ref} src={model as string} position={[0, 0, 0]} />
    </>
  )
}
