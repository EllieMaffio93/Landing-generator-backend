// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import { ObjectIdSchema } from '@feathersjs/schema'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const landingsSchema = {
  $id: 'Landings',
  type: 'object',
  additionalProperties: false,
  required: ['_id', 'component', 'template'],
  properties: {
    _id: ObjectIdSchema(),
    component: { type: 'string' },
    props: { type: 'object' },
    template: { type: 'string' },
  }
}
export const landingsValidator = getValidator(landingsSchema, dataValidator)
export const landingsResolver = resolve({})

export const landingsExternalResolver = resolve({})

// Schema for creating new data
export const landingsDataSchema = {
  $id: 'LandingsData',
  type: 'object',
  additionalProperties: false,
  required: ['text'],
  properties: {
    ...landingsSchema.properties
  }
}
export const landingsDataValidator = getValidator(landingsDataSchema, dataValidator)
export const landingsDataResolver = resolve({})

// Schema for updating existing data
export const landingsPatchSchema = {
  $id: 'LandingsPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...landingsSchema.properties
  }
}
export const landingsPatchValidator = getValidator(landingsPatchSchema, dataValidator)
export const landingsPatchResolver = resolve({})

// Schema for allowed query properties
export const landingsQuerySchema = {
  $id: 'LandingsQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(landingsSchema.properties)
  }
}
export const landingsQueryValidator = getValidator(landingsQuerySchema, queryValidator)
export const landingsQueryResolver = resolve({})
