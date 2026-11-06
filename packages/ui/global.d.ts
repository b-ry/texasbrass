declare module "*.css";

// @splidejs/react-splide's package.json "exports" map omits a "types"
// condition, which this project's moduleResolution: "bundler" requires.
// Shape mirrors the package's real dist/types/*.d.ts.
declare module "@splidejs/react-splide" {
  import type { ComponentConstructor, Options, Splide as SplideCore } from "@splidejs/splide";
  import * as React from "react";

  export interface SplideProps
    extends Partial<Omit<React.HTMLAttributes<HTMLElement>, keyof React.DOMAttributes<HTMLElement>>> {
    options?: Options;
    hasTrack?: boolean;
    tag?: "div" | "section" | "header" | "footer" | "nav";
    extensions?: Record<string, ComponentConstructor>;
    transition?: ComponentConstructor;
    children?: React.ReactNode;
    onMounted?: (splide: SplideCore) => void;
    onReady?: (splide: SplideCore) => void;
    onMove?: (splide: SplideCore, newIndex: number, prevIndex: number, destIndex: number) => void;
    onMoved?: (splide: SplideCore, newIndex: number, prevIndex: number, destIndex: number) => void;
  }

  export class Splide extends React.Component<SplideProps> {
    readonly splideRef: React.RefObject<HTMLDivElement>;
    splide: SplideCore | undefined;
    sync(splide: SplideCore): void;
    go(control: number | string): void;
  }

  export const SplideSlide: React.FC<JSX.IntrinsicElements["li"]>;
  export const SplideTrack: React.FC<JSX.IntrinsicElements["div"]>;
}

declare module "@splidejs/react-splide/css/core";
