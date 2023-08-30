const COMMAND_DELAY: number = Cypress.env("COMMAND_DELAY") || 1000

if (COMMAND_DELAY > 0) {
  for (const command of ["visit", "click", "trigger", "type", "clear", "reload"]) {
    // @ts-ignore
    Cypress.Commands.overwrite(command, (originalFn, ...args) => {
      const origVal = originalFn(...args)

      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(origVal)
        }, COMMAND_DELAY)
      })
    })
  }
}
