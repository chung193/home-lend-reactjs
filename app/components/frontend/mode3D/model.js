import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

import {
  Environment, OrbitControls, Preload, useGLTF, Stage
} from '@react-three/drei';

export default function MyModel() {
  const model = useGLTF('./images/anime_class_room/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={model.scene}
        scale={0.5}
        position={[0, -3.25, -1.5]}
      />
    </mesh>
  );
}
