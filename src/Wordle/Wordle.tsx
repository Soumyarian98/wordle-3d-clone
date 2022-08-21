import { useEffect, useState } from "react";
import { SceneContainer } from "./container/SceneContainer";
import { useWordle } from "./hooks/useWordle";

export const Wordle = () => {
  const [solution, setSolution] = useState<string>("");
  const { handleKeydown, currentGuess, guesses, turn, isCorrect } =
    useWordle(solution);
  useEffect(() => {
    fetch("/db.json")
      .then(res => res.json())
      .then(data => {
        const randomSolution =
          data.solutions[Math.floor(Math.random() * data.solutions.length)];
        setSolution(randomSolution.word);
      });
  }, []);

  return (
    <SceneContainer
      handleKeydown={handleKeydown}
      guesses={guesses}
      currentGuess={currentGuess}
      turn={turn}
      isCorrect={isCorrect}
    />
  );
};
