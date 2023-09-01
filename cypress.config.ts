import { defineConfig } from "cypress"
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor"
import browserify from "@badeball/cypress-cucumber-preprocessor/browserify"
import allureWriter from "@shelex/cypress-allure-plugin/writer"

let globalNumberOfItems = 0
let globalNextId = ""

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
): Promise<Cypress.PluginConfigOptions> {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config)

  on(
    "file:preprocessor",
    browserify(config, {
      typescript: require.resolve("typescript"),
    }),
  )

  on("task", {
    "cypress-cucumber-preprocessor:append-messages": (message) => {
      console.log("Received message:", message)
      return null
    },
  })

  allureWriter(on, config)

  on("task", {
    setNumberOfItems: (numberOfItems: number) => {
      console.log("Set the value to " + numberOfItems.toString())
      return (globalNumberOfItems = numberOfItems)
    },
    getNumberOfItems: () => {
      return globalNumberOfItems
    },
    setGlobalNextId: (nextId: string) => {
      return (globalNextId = nextId)
    },
    getGlobalNextId: () => {
      return globalNextId
    },
  })

  // Make sure to return the config object as it might have been modified by the plugin.
  return config
}

export const defaultConfig = {
  env: {
    allureReuseAfterSpec: true,
    environment: "",
    language: "eng",
    COMMAND_DELAY: 1200,
  },
  video: false,
  defaultCommandTimeout: 9000,
  requestTimeout: 10000,
  responseTimeout: 10000,
  pageLoadTimeout: 16000,
  reporter: "../node_modules/mochawesome/src/mochawesome.js",
  reporterOptions: {
    reportDir: "cypress/results/mochawesome",
    reportFilename: "[datetime]-[name]-report",
    timestamp: "shortDate",
    overwrite: false,
    html: true,
    json: true,
    charts: true,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    baseUrl: "https://parabank.parasoft.com/parabank",
    specPattern: "**/*.{feature,features}",
    supportFile: "cypress/support/e2e.js",
    reporter: require.resolve("@badeball/cypress-cucumber-preprocessor/pretty-reporter"),
    testIsolation: false,
    retries: {
      // Configure retry attempts for `cypress run`
      runMode: 2,
      // Configure retry attempts for `cypress open`
      openMode: 0,
    },
    setupNodeEvents,
  },
}

export default defineConfig(defaultConfig)
