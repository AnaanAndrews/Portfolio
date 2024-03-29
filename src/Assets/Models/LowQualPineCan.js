/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef,useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/LowQualPineCan.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(()=>{
    actions.Spin.play();

  }, [actions.Spin])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Can" position={[0.07, 9.12, 0]} rotation={[Math.PI / 9, 0, 0]}>
        <mesh geometry={nodes.Cylinder010.geometry} material={materials.Sides} />
        <mesh geometry={nodes.Cylinder010_1.geometry} material={materials.Top} />
        <mesh
          geometry={nodes.Tab.geometry}
          material={materials.Tab}
          position={[-0.01, 9.19, -1.42]}
          rotation={[0.04, 0, 0]}
          scale={[0.9, 0.9, 0.9]}
        />
        <mesh
          geometry={nodes.TabHold.geometry}
          material={materials.TabHold}
          position={[0, 8.65, 0.26]}
          rotation={[0.04, 0, 0]}
          scale={[0.31, 0.28, 0.31]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/LowQualPineCan.glb')
