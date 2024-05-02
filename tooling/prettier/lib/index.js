// import { fileURLToPath } from "url";

const config = {
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  // tailwindConfig: fileURLToPath(
  //   new URL("../../tooling/tailwind/web.ts", import.meta.url),
  // ),
  tailwindFunctions: ["cn", "cva"],
  importOrder: [
    "<TYPES>",
    "^(react/(.*)$)|^(react$)|^(react-native(.*)$)",
    "^(next/(.*)$)|^(next$)",
    "^(expo(.*)$)|^(expo$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "<TYPES>^@splitter",
    "^@splitter/(.*)$",
    "",
    "<TYPES>^[@]",
    "^[@/]",
    "",
    "<TYPES>^[.|..]",
    "^[../]",
    "^[./]",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "4.4.0",
};

export default config;
