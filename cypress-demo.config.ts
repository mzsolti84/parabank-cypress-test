import { defineConfig } from "cypress"
import { defaultConfig } from "./cypress.config"

export default defineConfig({
  ...defaultConfig,
  env: {
    language: "hu",
  },
  e2e: {
    ...defaultConfig.e2e,
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
})
