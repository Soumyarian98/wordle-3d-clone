import { nanoid } from "nanoid";

const rowPositions = [
  [-0.87, 299.12, 14.04],
  [-0.87, 185.78, 9.28],
  [-0.87, 68.05, 14.04],
  [-0.87, -51.76, 14.04],
  [-0.87, -171.67, 14.04],
  [-0.87, -290.35, 14.04],
];

const row0KeyPositions = [
  [-177.13, 0, 0],
  [-86.13, 0, 0],
  [3.5, 0, 0],
  [90.81, 0, 0],
  [177.13, 0, 0],
];

export const monitorPositions = rowPositions.map(rowPosition => ({
  id: nanoid(),
  rowPosition,
  keys: row0KeyPositions.map((position, index) => ({
    id: nanoid(),
    value: "",
    position,
  })),
}));
