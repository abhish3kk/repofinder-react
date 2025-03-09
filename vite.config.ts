import { defineConfig } from "vitest/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    environment: "jsdom", // Use jsdom to simulate the browser
    globals: true, // Enable Jest-like global functions like 'test', 'expect'
    setupFiles: "./src/test/setup.ts",
  },
});
