import { FC } from "react";
import useSpline from "@splinetool/r3f-spline";
import { monitorPositions } from "../../data/MonitorPositions";
import { MonitorContainer } from "../components/MonitorContainer";
import { keyData } from "../../data/KeyPositions";
import { KeyboardKey } from "../components/KeyboardKey";
import { useActiveKey } from "../hooks/useActiveKey";
import { MonitorSlot } from "../components/MonitorSlot";
import { EnterKey } from "../components/EnterKey";
import { KeyboardContainer } from "../components/KeyboardContainer";

type allowedColors = "grey" | "yellow" | "green";

interface Props {
  handleKeydown: (e: KeyboardEvent) => void;
  guesses: { key: string; color: allowedColors }[][];
  currentGuess: string;
  turn: number;
  isCorrect: boolean;
}

export const Scene: FC<Props> = ({
  handleKeydown,
  guesses,
  currentGuess,
  turn,
  isCorrect,
}) => {
  const { nodes, materials } = useSpline(
    "https://prod.spline.design/YZGp2MJIsXzGAdc3/scene.splinecode"
  );
  const [activeKey, setActiveKey] = useActiveKey(
    handleKeydown,
    isCorrect,
    turn
  );
  return (
    <>
      <color attach="background" args={["#121212"]} />
      <group dispose={null}>
        <directionalLight
          name="Directional Light 2"
          intensity={2.39}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-500}
          shadow-camera-right={500}
          shadow-camera-top={500}
          shadow-camera-bottom={-500}
          color="#fe00e9"
          position={[-1054.45, 1051.32, -654.47]}
        />
        <MonitorContainer nodes={nodes} materials={materials}>
          {monitorPositions.map((row: any, ri) => {
            return (
              <group position={row.rowPosition} key={row.id}>
                {row.keys.map((rkey: any, ci: number) => {
                  let value = "";
                  let color = "Grey";
                  if (ri === turn && currentGuess.length > 0) {
                    const currentGuessArray = currentGuess.split("");
                    if (currentGuessArray[ci]) {
                      value = currentGuessArray[ci];
                    }
                  } else {
                    if (guesses[ri]) {
                      value = guesses[ri][ci].key.toUpperCase();
                      let keyColor = guesses[ri][ci].color;
                      switch (keyColor) {
                        case "green":
                          color = "Green";
                          break;
                        case "yellow":
                          color = "Yellow";
                          break;
                        default:
                          color = "Grey";
                      }
                    }
                  }
                  return (
                    <MonitorSlot
                      key={rkey.id}
                      position={rkey.position}
                      nodes={nodes}
                      materials={materials}
                      value={value}
                      mtype={color}
                    />
                  );
                })}
              </group>
            );
          })}
        </MonitorContainer>
        <KeyboardContainer nodes={nodes} materials={materials}>
          <EnterKey materials={materials} nodes={nodes} activeKey={activeKey} />
          {Object.keys(keyData).map((key, index) => {
            return (
              <KeyboardKey
                key={index}
                position={keyData[key].position}
                nodes={nodes}
                materials={materials}
                keyName={key.split("-")[1]}
                activeKey={activeKey}
                setActiveKey={setActiveKey}
              />
            );
          })}
        </KeyboardContainer>
      </group>
    </>
  );
};
