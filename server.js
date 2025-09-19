import Fastify from 'fastify'

const fastify = Fastify({
  logger: true
})

fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

const PORT = process.env.PORT || 3000

const start = async () => {
  try {
    await fastify.listen({ port: PORT, host: '0.0.0.0' })
    fastify.log.info(`Server listening on ${PORT}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
