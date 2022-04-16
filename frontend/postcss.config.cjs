const postcssPresetEnv = require("postcss-preset-env");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

const mode = process.env.NODE_ENV;
const dev = mode === "development";

const config = {
  plugins: [
    postcssPresetEnv({
      stage: 3,
      features: {
        "nesting-rules": true,
        "custom-selectors": true,
      },
    }),
    //Some plugins, like tailwindcss/nesting, need to run before Tailwind,
    tailwindcss(),
    //But others, like autoprefixer, need to run after,
    autoprefixer,
    !dev &&
      cssnano({
        preset: "default",
      }),
  ],
};

module.exports = config;
