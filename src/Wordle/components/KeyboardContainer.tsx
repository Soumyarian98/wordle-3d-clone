import { FC, ReactNode } from "react";

interface Props {
  nodes: any;
  materials: any;
  children: ReactNode[];
}

export const KeyboardContainer: FC<Props> = ({
  nodes,
  materials,
  children,
}) => {
  return (
    <group
      name="Keyboard"
      position={[0, -550.36, 0]}
      rotation={[Math.PI / 2.5, 0, 0]}>
      <group name="Board" position={[0, -57.36, 0]} scale={[0.57, 0.57, 0.6]}>
        <mesh
          name="Rectangle 2"
          geometry={nodes["Rectangle 2"].geometry}
          material={materials["Rectangle 2 Material"]}
          castShadow
          receiveShadow
          position={[0, -36.67, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1.06, 1.13, 1.03]}
        />
        <mesh
          name="Rectangle"
          geometry={nodes.Rectangle.geometry}
          material={materials["Rectangle Material"]}
          castShadow
          receiveShadow
          position={[0, -11.33, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1.02, 1, 1]}
        />
      </group>
      {children}
      <directionalLight
        name="Directional Light"
        castShadow
        intensity={0.7}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={-10000}
        shadow-camera-far={100000}
        shadow-camera-left={-500}
        shadow-camera-right={500}
        shadow-camera-top={500}
        shadow-camera-bottom={-500}
        position={[-903.69, 1516.61, 801.33]}
        rotation={[0.4, 0, 0]}
      />

      <hemisphereLight
        name="Default Ambient Light"
        intensity={0.6}
        color="#eaeaea"
        position={[0, 1, 0]}
      />
    </group>
  );
};
