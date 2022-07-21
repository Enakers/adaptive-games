import react from "@vitejs/plugin-react";
import {resolve} from "node:path";
import dts from "vite-plugin-dts";
import {defineConfig} from "vitest/config";

export default defineConfig({
  plugins: [react(), dts({insertTypesEntry: true})],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "ui",
      formats: ["es", "umd"],
      fileName: format => `ui.${format}.js`
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React"
        }
      }
    }
  },
  test: {
    clearMocks: true,
    setupFiles: ["./vitest.setup.ts"],
    environment: "jsdom",
    globals: true
  }
});
