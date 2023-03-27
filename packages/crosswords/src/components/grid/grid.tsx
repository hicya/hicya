import _ from "lodash";
import { Puzzle } from "@/features/puzzle/types";

type GridProps = {
  puzzle: Puzzle;
};

export default function Grid({ puzzle }: GridProps) {
  const { height, width, cells } = puzzle;
  return (
    <div
      css={{
        display: "grid",
        border: "3px solid black",
        gridTemplateRows: `repeat(${height}, 1fr)`,
        gridTemplateColumns: `repeat(${width}, 1fr)`,
        background: "dimgray",
        gridGap: "1px",
      }}
    >
      {_.range(height * width).map((idx) => (
        <div
          key={idx}
          css={{
            aspectRatio: "1",
            background: cells[idx].answer ? "white" : "black",
          }}
        >
          {cells[idx]?.answer}
        </div>
      ))}
    </div>
  );
}
