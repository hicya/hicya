import Image from "next/image";

import { Header } from "@/components/header/header";
import Content from "@/components/layout/content/content";
import { source } from "@/styles/fonts";

import splashImg from "../../public/splash.jpg";
import css from "./index.styles";

function Index() {
  return (
    <div css={css}>
      <Header />
      <div css={{ position: "relative" }}>
        <Image
          src={splashImg}
          css={{ width: "100%", height: "900px", objectFit: "cover" }}
        />
        <div
          css={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            alignItems: "flex-end",
            paddingBottom: "6vmax",
            fontSize: "4em",
          }}
        >
          <div css={[source.style, { width: "100%" }]}>
            <Content>Building free software.</Content>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
