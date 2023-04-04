import type { AppProps } from "next/app";

import "modern-normalize/modern-normalize.css";

import { roboto } from "@/styles/fonts";

export default function Crosswords({ Component, pageProps }: AppProps) {
  return (
    <div css={roboto.style}>
      <Component {...pageProps} />
    </div>
  );
}
