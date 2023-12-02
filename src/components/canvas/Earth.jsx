import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./need_some_space/scene.gltf");

  return (
    <primitive object={earth.scene} scale={1.4} position-y={-1.8} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
    
      
      shadows
      frameloop='demand'
      dpr={[1, 10]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 20,
        near: 0.1,
        far: 200,
        position: [10, 3, 5],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={5}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
