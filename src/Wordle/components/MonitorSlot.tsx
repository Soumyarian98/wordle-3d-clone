import { FC } from "react";
import { Text } from "./Text";

export const MonitorSlot: FC<any> = ({
  nodes,
  materials,
  position,
  value,
  mtype,
}) => {
  return (
    <group position={position}>
      {value && (
        <Text
          value={value}
          color={
            mtype === "Grey"
              ? "#fff"
              : mtype === "Yellow"
              ? "#ffff00"
              : "#00ff00"
          }
          groupProps={{
            position: [3.57, 4.6, 16.68],
          }}
          meshProps={{
            position: [-11.71, -14.13, 0],
          }}
          size={22}
        />
      )}
      <mesh
        name="Cube4"
        geometry={nodes.Cube.geometry}
        material={materials[mtype]}
        position={[0, 0, -5.45]}
        scale={1.12}
      />
    </group>
  );
};
