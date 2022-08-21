import { Vector3 } from "@react-three/fiber";
import { FC, useMemo } from "react";
import { Text } from "./Text";

interface Props {
  nodes: any;
  materials: any;
  activeKey: any;
}

export const EnterKey: FC<Props> = ({ nodes, materials, activeKey }) => {
  const modifiedPosition = useMemo(() => {
    const position = [382.6, 20.49, 126.15];
    if ("ENTER" === activeKey) {
      const newPosition = [...position];
      newPosition[1] = -17;
      return newPosition;
    }
    return position;
  }, [activeKey]) as Vector3;

  return (
    <group name="Enter" position={modifiedPosition} scale={0.55}>
      <group
        name="Text30"
        position={[34.32, 104.5, 20.73]}
        rotation={[-Math.PI / 2, 0, 0]}>
        <Text
          color="#000000"
          value="G"
          meshProps={{
            position: [-63, 9, 0],
          }}
          size={32}
        />
        <Text
          color="#000000"
          value="O"
          meshProps={{
            position: [-25.7, 9, 0],
          }}
          size={32}
        />
      </group>
      <mesh
        name="Cube30"
        geometry={nodes.Cube5.geometry}
        material={materials["Key-yellow"]}
        castShadow
        receiveShadow
        position={[0, -0.5, 0]}
      />
    </group>
  );
};
