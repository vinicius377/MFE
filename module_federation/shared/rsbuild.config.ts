import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { dependencies } from './package.json'

export default defineConfig({
  server: {
    port: 3000,
  },
  dev: {
    assetPrefix: "http://localhost:3000",
  },
  plugins: [pluginReact()],
  moduleFederation: {
    options: {
    name: "shared",
    filename: "remoteEntry.js",
    exposes: {
      "./components": "./src/components/index.tsx",
    },
    shared: {
      ...dependencies,
      react: {
        singleton: true, 
        version: dependencies.react
      }, 
      "react-dom": {
        singleton: true,
        version: dependencies["react-dom"]} 
    },
   }
  }
});
