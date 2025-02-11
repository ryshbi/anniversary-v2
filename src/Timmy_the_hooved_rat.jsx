/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 timmy_the_hooved_rat.glb 
Author: Dreaming In Alternation 27 (https://sketchfab.com/DreamingInAlternation27)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/timmy-the-hooved-rat-5f20d46c416d49d79ca6e13d5576238c
Title: Timmy the hooved rat
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Rat(props) {
  const ratRef = useRef();
  const { nodes, materials } = useGLTF('/timmy_the_hooved_rat.glb')

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime() + 5

    const rockingAngle = Math.sin(elapsed) * 0.08

    if (ratRef.current) {
      ratRef.current.rotation.y = rockingAngle
    }
  })

  return (
    <group {...props} dispose={null} ref={ratRef}>
      <group scale={0.01}>
        <mesh geometry={nodes.Textured_rat_Rat_material_0.geometry} material={materials.Rat_material} position={[0.619, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1} />
      </group>
    </group>
  )
}

useGLTF.preload('/timmy_the_hooved_rat.glb')
