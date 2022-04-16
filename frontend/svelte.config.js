import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";
import { kitDocsPlugin } from "@svelteness/kit-docs/node";
import Icons from "unplugin-icons/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],

  extensions: [".svelte", ".md"],

  kit: {
    adapter: adapter(),
    prerender: {
      default: true,
      entries: ["*"],
    },

    vite: {
      plugins: [
        Icons({ compiler: "svelte" }),
        kitDocsPlugin({
          shiki: {
            theme: "material-ocean",
          },
        }),
      ],
    },
  },
};

export default config;
