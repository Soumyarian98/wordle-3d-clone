import { FC } from "react";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import poppins from "../../data/poppins_regular.json";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { GroupProps, MeshProps } from "@react-three/fiber";

interface Props {
  value: string;
  color: string;
  groupProps?: GroupProps;
  meshProps?: MeshProps;
  size: number;
}

export const Text: FC<Props> = ({
  value,
  color,
  groupProps = {},
  meshProps = {},
  size,
}) => {
  const font = new FontLoader().parse(poppins);
  let geometry;
  if (font) {
    geometry = new TextGeometry(value, {
      font: font,
      size,
      height: 0.5,
    });
  }

  return (
    // <group position={[3.57, 4.6, 16.68]}>
    //   <mesh position={[-11.71, -14.13, 0]}>
    //     {/* @ts-ignore */}
    //     <textGeometry args={[value, { font, size: 19, height: 0.5 }]} />
    //     <meshLambertMaterial attach="material" color={color} />
    //   </mesh>
    // </group>
    <>
      <group {...groupProps}>
        <mesh {...meshProps} geometry={geometry}>
          <meshLambertMaterial attach="material" color={color} />
        </mesh>
      </group>
    </>
  );
};
