import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";
import compress from "astro-compress";
import { defineConfig } from "astro/config";
import Icons from "unplugin-icons/vite";
import vercel from "@astrojs/vercel"; // Updated import

export default defineConfig({
  site: "https://salam.app",
  integrations: [sitemap(), solidJs(), compress(), mdx()],
  vite: {
    ssr: {
      noExternal: ["solid-dismiss"],
    },
    plugins: [
      tailwindcss(),
      Icons({
        compiler: "astro",
      }),
    ],
  },
  output: "server", // Adjusted output
  adapter: vercel({
    speedInsights: {
      enabled: true,
    },
    webAnalytics: {
      enabled: true,
    },
  }),
});
