import _ from "lodash";

type GridProps = {
  height: number;
  width: number;
};

export default function Grid({ height, width }: GridProps) {
  return (
    <div css={{ display: "grid", gridTemplateRows: `repeat(${height}, 1fr)`, gridTemplateColumns: `repeat(${width}, 1fr)` }}>
      {_.range(height * width).map((idx) => (
        <div key={idx} css={{aspectRatio: '1'}}>{idx}</div>
      ))}
    </div>
  );
}
