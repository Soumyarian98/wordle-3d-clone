import { useMemo } from "react";
import { Text } from "./Text";

export const KeyboardKey = ({
  position,
  nodes,
  materials,
  keyName,
  activeKey,
  setActiveKey,
}: any) => {
  const modifiedPosition = useMemo(() => {
    if (keyName === activeKey) {
      const newPosition = [...position];
      newPosition[1] = -17;
      return newPosition;
    }
    return position;
  }, [activeKey]);
  return (
    <group
      onPointerDown={e => {
        setActiveKey(keyName);
      }}
      onPointerUp={() => setActiveKey("")}
      position={modifiedPosition}
      scale={0.55}>
      <Text
        color="#000000"
        value={keyName}
        groupProps={{
          position: [17.75, 104.5, -10.55],
          rotation: [-Math.PI / 2, 0, 0],
        }}
        meshProps={{
          position: [-27.91, -26.97, 0],
        }}
        size={32}
      />
      <mesh
        geometry={nodes.Cube5.geometry}
        material={materials.Key}
        castShadow
        receiveShadow
        position={[0, -0.5, 0]}
      />
    </group>
  );
};
