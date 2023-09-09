import { defineConfig } from "umi";

export default defineConfig({
  outputPath: 'docs',
  routes: [
    { path: "/", component: "App" }
  ],
  npmClient: 'yarn',
});
