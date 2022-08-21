import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  nodes: any;
  materials: any;
}

export const MonitorContainer: FC<Props> = ({ children, nodes, materials }) => {
  return (
    <group name="Monitor" position={[62, 400.37, -253.72]} scale={1.3}>
      {children}
      <mesh
        name="Screen"
        geometry={nodes.Screen.geometry}
        material={materials["Device-screen"]}
        castShadow
        receiveShadow
        position={[0, -0.38, 10.72]}
        scale={[1.08, 1.05, 1.03]}
      />
      <mesh
        name="Device"
        geometry={nodes.Device.geometry}
        material={materials["Device Material"]}
        castShadow
        receiveShadow
        position={[0, 0, -30.72]}
        scale={[1.05, 1.16, 1]}
      />
    </group>
  );
};
