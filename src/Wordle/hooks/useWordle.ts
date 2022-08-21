import { useState } from "react";
import toast from "react-hot-toast";

type allowedColors = "grey" | "yellow" | "green";
type formattedGuessType = { key: string; color: allowedColors }[];

export const useWordle = (solution: string) => {
  const [turn, setTurn] = useState<number>(0);
  const [currentGuess, setCurrentGuess] = useState<string>("");
  const [guesses, setGuesses] = useState<formattedGuessType[]>([]);
  const [history, setHistory] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);

  const formatGuess = () => {
    let solutionArray: (string | null)[] = solution.split("");
    let formattedGuess = currentGuess.split("").map((letter, index) => {
      let color: allowedColors = "grey";
      if (solutionArray[index] === letter) {
        color = "green";
        solutionArray[index] = null;
      } else if (solutionArray.includes(letter)) {
        color = "yellow";
        solutionArray[solutionArray.indexOf(letter)] = null;
      }
      return {
        key: letter,
        color,
      };
    });
    return formattedGuess;
  };

  const addNewGuess = (formattedGuess: formattedGuessType) => {
    if (currentGuess === solution) {
      setIsCorrect(true);
    } else {
      setHistory(p => [...p, currentGuess]);
      setTurn(p => p + 1);
      setCurrentGuess("");
    }
    setGuesses(p => [...p, formattedGuess]);
  };

  const handleKeydown = ({ key }: KeyboardEvent) => {
    if (key === "Backspace") {
      setCurrentGuess(p => p.slice(0, -1));
    } else if (key === "Enter") {
      if (turn > 5) {
      } else if (history.includes(currentGuess)) {
        toast.error("You have already entered the word.");
      } else if (currentGuess.length !== 5) {
        toast.error("Entered word is not five lettered.");
      } else {
        const formattedGuess = formatGuess();
        addNewGuess(formattedGuess);
      }
    } else if (/^[A-Za-z]$/.test(key) && currentGuess.length < 5) {
      setCurrentGuess(p => p + key);
    }
  };
  const handleKeyup = () => {};

  return {
    turn,
    currentGuess,
    guesses,
    isCorrect,
    handleKeyup,
    handleKeydown,
  };
};
