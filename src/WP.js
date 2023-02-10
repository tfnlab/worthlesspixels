import { useState, useEffect } from 'react';
import { useGLTF as useGLTFHook } from '@react-three/drei';
import { loadGltf } from '@react-three/loaders';
import { Group } from '@react-three/core';

export function Model({ color, ...props }) {
  const url = "https://mint-api.worthlesspixels.com/3D/crystals/522.glb";
  const { nodes, materials } = useGLTFHook(url);

  return (
    <Group>
      {nodes.map((node, i) => (
        <primitive key={i} object={node} />
      ))}
    </Group>
  );
}
