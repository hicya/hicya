import Image from "next/image";

import { container } from "./header.styles";
import Content from "@/components/layout/content/content";

export function Header() {
  return (
    <header>
      <Content>
        <div css={{ display: "flex", padding: "10px 0" }}>
          <Image width="125" height="45" src="/logo.svg" />
          <div css={{ display: "flex", alignItems: "center" }}>
            <div>About</div>
            <div>Contact</div>
          </div>
        </div>
      </Content>
    </header>
  );
}
