import tailwind from "tailwindcss";
import postcss from "postcss";
import minify from "@csstools/postcss-minify";
import plugin from "../index.ts";

const TAILWIND_BASE = `@tailwind utilities;`;

export function generateCss(input: string, inline: string = "") {
  return postcss([
    minify(),
    tailwind({
      plugins: [plugin],
      content: [{ raw: input }],
    }),
  ])
    .process(`${TAILWIND_BASE} ${inline}`, { from: undefined })
    .then((result) =>  result.css) as Promise<string>;
}
