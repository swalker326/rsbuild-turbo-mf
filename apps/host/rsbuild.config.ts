import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: "host",
      exposes: {
        "./RemoteEntry": "./src/RemoteEntry.tsx"
      },
      remotes: {
        settings:
          "settings@http://localhost:3001/mf-manifest.json"
      },
      shared: ["react", "react-dom"]
    })
  ],
  server: {
    port: 3000
  }
});
