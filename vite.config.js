import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});

// # Logs
// logs
// *.log
// npm-debug.log*
// yarn-debug.log*
// yarn-error.log*
// pnpm-debug.log*
// lerna-debug.log*

// node_modules
// dist
// dist-ssr
// *.local

// # Editor directories and files
// .vscode/*
// !.vscode/extensions.json
// .idea
// .DS_Store
// *.suo
// *.ntvs*
// *.njsproj
// *.sln
// *.sw?
