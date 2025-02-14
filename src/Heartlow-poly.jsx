/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 heartlow-poly.glb 
Author: Gam1chi (https://sketchfab.com/Gam1chi)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/heartlow-poly-8fa9f20549c74bc99dc209ac795d7ca1
Title: Heart(Low-poly)
*/

import React, { useState } from 'react'
import { useGLTF, useCursor } from '@react-three/drei'

export function Heart(props) {
  const [hover, setHover] = useState(false);
  const group = React.useRef()
  const { nodes, materials } = useGLTF('/heartlow-poly.glb')

  useCursor(hover);
  return (
    <group ref={group} {...props} dispose={null} scale={hover ? [5.5, 5.5, 4] : [5, 5, 4]} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="heart1fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Cube" position={[0, 131.792, -0.349]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={100}>
                  <mesh name="Cube_Material_0" geometry={nodes.Cube_Material_0.geometry} material={materials.Material} />
                </group>
                <group name="Camera" position={[-492.173, 188.394, -751.556]} rotation={[0, -1, -0.057]} scale={100}>
                  <group name="Object_5" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/heartlow-poly.glb')
