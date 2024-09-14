import { it, expect, describe } from "vitest";
import { generateCss } from "./utils.ts";

describe("tailwinds plugin modern style", () => {
  it("should generate animate css flip-scale-2-hor-top", async () => {
    const css = await generateCss(
      '<div class="animate-flip-scale-2-hor-top">helloword</div>'
    );
    expect(css).toMatch(
      "@keyframes flip-scale-2-hor-top{0%{transform:translateY(0) rotateX(0) scale(1);transform-origin:50% 0%}50%{transform:translateY(-50%) rotateX(-90deg) scale(2);transform-origin:50% 50%}100%{transform:translateY(-100%) rotateX(-180deg) scale(1);transform-origin:50% 100%}}"
    );
  });

  it("should generate animate css flip-horizontal-top", async () => {
    const css = await generateCss(
      '<div class="animate-flip-horizontal-top">helloword</div>'
    );
    expect(css).toMatch(
      "@keyframes flip-horizontal-top{0%{transform:rotateX(0)}100%{transform:rotateX(180deg)}}"
    );
  });


  it("should generate animate css scale-up-center", async () => {
    const css = await generateCss(
      '<div class="animate-scale-up-center">helloword</div>'
    );
    expect(css).toMatch(
      "@keyframes scale-up-center{0%{transform:scale(0.5)}100%{transform:scale(1)}}"
    );
  });


  it("should generate animate css scale-down-center", async () => {
    const css = await generateCss(
      '<div class="animate-scale-down-center">helloword</div>'
    );
    expect(css).toMatch(
      "@keyframes scale-down-center{0%{transform:scale(1)}100%{transform:scale(0.5)}}"
    );
  });

  

  it("should generate animate css rotate-center", async () => {
    const css = await generateCss(
      '<div class="animate-rotate-center">helloword</div>'
    );
    expect(css).toMatch(
      "@keyframes rotate-center{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}"
    );
  });
  it("should generate animate css rotate-hor-center", async () => {
    const css = await generateCss(
      '<div class="animate-rotate-hor-center">helloword</div>'
    );
    expect(css).toMatch(
      "@keyframes rotate-hor-center{0%{transform:rotateX(0)}100%{transform:rotateX(-360deg)}}"
    );
  });
});
