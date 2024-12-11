import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: "settings",
      remotes: {
        host: "host@http://localhost:3000/mf-manifest.json"
      },
      exposes: {
        "./RemoteEntry": "./src/RemoteEntry.tsx"
      },
      shared: ["react", "react-dom"]
    })
  ],
  server: {
    port: 3001
  }
});
