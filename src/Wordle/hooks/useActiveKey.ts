import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const useActiveKey = (
  handleKeydown: any,
  isCorrect: boolean,
  turn: number
) => {
  const [activeKey, setActiveKey] = useState<string>("");

  useEffect(() => {
    const keyDownHandler = (e: any) => {
      setActiveKey(e.key.toUpperCase());
      handleKeydown(e);
    };
    const keyUpHandler = () => setActiveKey("");

    window.addEventListener("keydown", keyDownHandler);
    window.addEventListener("keyup", keyUpHandler);

    if (isCorrect) {
      toast.success("Congratulations, you guessed it correctly.");
      window.removeEventListener("keydown", keyDownHandler);
      window.removeEventListener("keyup", keyUpHandler);
    }
    if (turn > 5) {
      toast.error("Game over, you ran out of chance.");
      window.removeEventListener("keydown", keyDownHandler);
      window.removeEventListener("keyup", keyUpHandler);
    }
    return () => {
      window.removeEventListener("keydown", keyDownHandler);
      window.removeEventListener("keyup", keyUpHandler);
    };
  }, [handleKeydown, isCorrect, turn]);

  return [activeKey, setActiveKey];
};
