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
      <div css={{ position: "relative", height: "900px" }}>
        <Image
          src={splashImg}
          css={{ width: "100%", height: "100%", objectFit: "cover" }}
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
            <Content>
              <span css={{ color: "white" }}>Building free software.</span>
            </Content>
          </div>
        </div>
      </div>
      <div css={{ backgroundColor: "#e2ece9" }}>
        <Content>
          <div
            css={{
              display: "flex",
              padding: "4em 0",
              justifyContent: "space-between",
            }}
          >
            <div
              css={[
                source.style,
                { fontSize: "2.1em", lineHeight: "1.5em", paddingRight: "3em" },
              ]}
            >
              The proliferation of ad-supported software has created a market
              for low-quality software that prioritizes profit over user
              experience.
            </div>
            <div css={{ fontSize: "1.6em", lineHeight: "1.8em" }}>
              Our mission is to be a trusted and reliable source of free
              software that puts the user first without the distraction of ads
              or hidden fees.
            </div>
          </div>
        </Content>
      </div>
    </div>
  );
}

export default Index;
