type ClosedCell = {};

type OpenCell = {
  answer: string;
  label?: number;
};

export type Puzzle = {
  width: number;
  height: number;
  cells: (OpenCell | ClosedCell)[];
};
