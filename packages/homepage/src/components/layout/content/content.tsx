import { ReactNode } from "react";

import { container } from "./content.styles";

export default function Content({ children }: { children: ReactNode }) {
  return <div css={container}>{children}</div>;
}
