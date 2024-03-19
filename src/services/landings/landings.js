// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  landingsDataValidator,
  landingsPatchValidator,
  landingsQueryValidator,
  landingsResolver,
  landingsExternalResolver,
  landingsDataResolver,
  landingsPatchResolver,
  landingsQueryResolver
} from './landings.schema.js'
import { LandingsService, getOptions } from './landings.class.js'
import { landingsPath, landingsMethods } from './landings.shared.js'

export * from './landings.class.js'
export * from './landings.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const landings = (app) => {
  // Register our service on the Feathers application
  app.use(landingsPath, new LandingsService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: landingsMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(landingsPath).hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(landingsExternalResolver),
        schemaHooks.resolveResult(landingsResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(landingsQueryValidator),
        schemaHooks.resolveQuery(landingsQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(landingsDataValidator),
        schemaHooks.resolveData(landingsDataResolver)
      ],
      patch: [
        schemaHooks.validateData(landingsPatchValidator),
        schemaHooks.resolveData(landingsPatchResolver)
      ],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}
