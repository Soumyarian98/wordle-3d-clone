import { Html } from "@react-three/drei";

export const Loader = () => {
  return (
    <Html center className="loading-screen">
      <div>
        Loading, please wait <div className="loader"></div>
      </div>
    </Html>
  );
};
