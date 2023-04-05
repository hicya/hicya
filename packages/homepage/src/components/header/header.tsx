import Image from "next/image";

import { container } from "./header.styles";
import Content from "@/components/layout/content/content";
import { text } from "@/styles/colors";

const menuItems = [
  { title: "About", href: "/about" },
  { title: "Projects", href: "/projects" },
  { title: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header>
      <Content>
        <div css={{ display: "flex", padding: "1em 0" }}>
          <div css={{ display: "flex" }}>
            <Image width="125" height="45" src="/logo.svg" alt="logo" />
            <div
              css={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "3em",
              }}
            >
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  css={{
                    textDecoration: "none",
                    color: text.primary,
                    padding: "0.5em",
                    margin: "0 0.5em",
                    fontWeight: "500",
                    "&:hover": {
                      color: text.hover,
                    },
                  }}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Content>
    </header>
  );
}
