import type { Config } from "tailwindcss";
const sharedConfig = require("@carolbrasstexas/tailwind-config");

const config: Config = {
  ...sharedConfig,
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}"
  ]
};

export default config;