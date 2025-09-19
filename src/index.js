import Fastify from 'fastify'
import routes from './routes.js'

const PORT = process.env.PORT || 3000
const fastify = Fastify({ logger: true })

// Register routes
fastify.register(routes)

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
