const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/@svelteness/kit-docs/client/components/markdown/**/*.svelte",
  ],

  prefix: "tw-",

  theme: {
    extend: {},
  },

  plugins: [require("daisyui")],
};

module.exports = config;
