import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    sitemap(),
    compress(),
    solidJs(),
  ],
  vite: {
    ssr: {
      external: ["svgo"],
      noExternal: ["solid-dismiss"],
    },
  },
});
