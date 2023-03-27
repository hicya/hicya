type Direction = "Across" | "Down";

type ClosedCell = {};

type Cell = {
  answer: string;
  clueIds: number[];
  label?: number;
};

type Clue = {
  cellIds: number[];
  direction: Direction;
  label: number;
  text: string;
};

export type Board = {
  width: number;
  height: number;
  cells: (Cell | ClosedCell)[];
  clues: Clue[];
};
