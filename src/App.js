import { OrbitControls, OrthographicCamera, Text } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { a, useSpring } from '@react-spring/three'

import { Model } from "./The_island"
import { Boat } from "./Simple_low_poly_boat"
import { Walnut } from "./Walnut"
import { Rat } from "./Timmy_the_hooved_rat"
import { Ball } from "./Low_poly_footballsoccer_ball"
import { Dog } from "./Dog"
import { Heart } from "./Heartlow-poly"
import { Goose } from "./Goose_low_poly"
import { Chair } from './Chair_low_poly';
import { Suitcase } from './Suitcase_low_poly';
import { Shark } from './Low_poly_shark'
import { useState } from 'react';

const Scene = () => {
  const [letter, setLetter] = useState(false);
  const isoCameraPosition = [10, 16, 26];

  const { rotation } = useSpring({
    rotation: letter ? [0, Math.PI, 0] : [0, 0, 0],
    config: { tension: 170, friction: 26 },
  })

  return (
    <>
      {/* The OrthographicCamera here is set as the default camera */}
      <a.group rotation={rotation}>
        <OrthographicCamera makeDefault position={isoCameraPosition} zoom={15} />
      </a.group>
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={2} />
      <directionalLight position={[-10, 10, -10]} intensity={2} />

      {/* Load your models */}
      <Model position={[0, 0, 0]} rotation={[0, 2.0, 0]}/>
      <Boat position={[-4, 6.5, 1]} rotation={[0, -0.7, 0]} scale={0.5}/>
      <Walnut position={[2, 8, 10]} scale={0.05}/>
      <Goose scale={0.01} position={[2, 7.5, -6]} rotation={[0, 0, 0]}/>
      <Rat position={[0, 7.5, -6]} scale={700}/>
      <Ball position={[-10, 12, 12]} rotation={[0, -0.8, 0]} scale={300}/>
      <Dog position={[2, 9, 4]} scale={1} rotation={[0, 3, 0]}/>
      <Heart position={[-3, 14, -10]} rotation={[-0.2, 0.5, 0]} scale={[5, 5, 4]} onClick={() => setLetter(!letter)}/>
      <Suitcase scale={[0.75, 0.5, 0.5]} position={[-3, 9, 15]} rotation={[0, 1, 0]}/>
      <Chair scale={0.02} position={[-5, 8, 12]}/>
      <Shark scale={0.01} position={[5, 6, 1]} rotation={[0, -2, 0]}/>
      <Text children="L+R" position={[-1, 22, -7]} fontSize={5} rotation={[0, 0.5, 0]} scale={[1, 1, 50]} color="#3b3b3b" anchorX="center" anchorY="middle" />
      <Text children="I love you Tinji!" position={[-7, 5, -19]} fontSize={5} rotation={[0.1, -2.8, 0]} scale={[0.8, 0.8, 50]} color="red" anchorX="center" anchorY="middle" />
      
      {/* Optionally, use OrbitControls to always keep the focus on the model */}
      <OrbitControls target={[0, 0, 0]} enableZoom={true} enablePan={false} enableRotate={true}/>
    </>
  );
}


const App = () => {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  );
}

export default App;