import { landings } from './landings/landings.js'

export const services = (app) => {
  app.configure(landings)

  // All services will be registered here
}
