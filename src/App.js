import React, { useState, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = () => {
  const [model, setModel] = useState();
  const { scene, camera } = useThree();

  useEffect(() => {
    new GLTFLoader().load('http://localhost:3000/untitled_wp.gltf', setModel, undefined, (error) => {
      console.error(error);
    });
  }, []);

  return model ? <primitive object={model.scene} /> : null;
};

const App = () => (
  <Canvas>
    <Model />
    <ambientLight />
  </Canvas>
);

export default App;
