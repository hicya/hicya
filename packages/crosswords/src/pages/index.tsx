import Head from "next/head";

import Grid from "@/components/grid/grid";
import { Puzzle } from "@/types/puzzle";

const puzzle: Puzzle = {
  width: 3,
  height: 4,
  cells: [
    {},
    {
      answer: "A",
      label: 1,
    },
    {
      answer: "B",
      label: 2,
    },
    {
      answer: "C",
      label: 3,
    },
    {
      answer: "D",
    },
    {},
    {
      answer: "E",
      label: 5,
    },
    {
      answer: "F",
      label: 6,
    },
    {},
    {},
    {
      answer: "G",
    },
    {},
  ],
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Crosswords</title>
      </Head>
      <main>
        <div css={{ margin: "auto", maxWidth: "1100px" }}>
          <div css={{ display: "flex" }}>
            <div css={{ width: "48%" }}>
              <Grid puzzle={puzzle}></Grid>
            </div>
            <div css={{ display: "flex", width: "48%" }}>
              <div>down</div>
              <div>across</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
