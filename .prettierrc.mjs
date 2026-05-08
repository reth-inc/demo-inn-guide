/** @type {import("prettier").Config} */
export default {
  // prettier-plugin-tailwindcss は最後に配置する必要がある（順序依存）
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: { parser: "astro" },
    },
  ],
};
