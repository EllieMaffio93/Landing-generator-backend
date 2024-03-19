export const landingsPath = 'landings'

export const landingsMethods = ['find', 'get', 'create', 'patch', 'remove']

export const landingsClient = (client) => {
  const connection = client.get('connection')

  client.use(landingsPath, connection.service(landingsPath), {
    methods: landingsMethods
  })
}
