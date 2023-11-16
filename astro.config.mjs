// import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress"; // https://astro.build/config
import { defineConfig } from "astro/config";
import Icons from "unplugin-icons/vite";
import vercel from "@astrojs/vercel/static";
//image(),
// https://astro.build/config
export default defineConfig({
  site: "https://salam.app",
  integrations: [tailwind(),  sitemap(), solidJs(), compress()],
  vite: {
    ssr: {
      external: ["svgo"],
      noExternal: ["solid-dismiss"],
    },
    plugins: [
      Icons({
        compiler: "astro",
      }),
    ],
  },
  output: "static",
  adapter: vercel({
    analytics: true,
  }),
});
