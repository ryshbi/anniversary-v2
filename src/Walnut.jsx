/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 walnut.glb 
Author: Siavash Razavi (https://sketchfab.com/sia7ash)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/walnut-8928df76a37e45a2b3cdddbe696087e4
Title: Walnut
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Walnut(props) {
  const { nodes, materials } = useGLTF('/walnut.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials['666_Material_u1_v1']} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/walnut.glb')
