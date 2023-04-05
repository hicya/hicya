import type { AppProps } from "next/app";

import "modern-normalize/modern-normalize.css";

import { roboto } from "@/styles/fonts";
import { body } from "@/styles/global.styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div css={[body, roboto.style]}>
      <Component {...pageProps} />
    </div>
  );
}
