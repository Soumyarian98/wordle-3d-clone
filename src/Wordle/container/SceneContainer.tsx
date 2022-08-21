import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Loader } from "../components/Loader";

import { Scene } from "./Scene";

type allowedColors = "grey" | "yellow" | "green";

interface Props {
  handleKeydown: (e: KeyboardEvent) => void;
  guesses: { key: string; color: allowedColors }[][];
  currentGuess: string;
  turn: number;
  isCorrect: boolean;
}

export const SceneContainer: FC<Props> = props => {
  return (
    <>
      <Canvas shadows flat linear>
        <Suspense fallback={<Loader />}>
          <Scene {...props} />
          {/* @ts-ignore */}
          <OrthographicCamera
            name="Personal Camera"
            makeDefault={true}
            zoom={0.4}
            far={100000}
            near={-100000}
            position={[0, 0, 300]}
          />
          <OrbitControls />
        </Suspense>
      </Canvas>
      <Toaster
        position="top-center"
        reverseOrder={false}
        // containerStyle={{ background: "#121212" }}
        toastOptions={{
          style: {
            background: "#121212",
            color: "#efefef",
            fontSize: "0.9rem",
            letterSpacing: "1px",
            border: "2px solid #7300ff",
          },
        }}
      />
    </>
  );
};
