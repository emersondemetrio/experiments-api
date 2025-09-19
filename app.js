import Fastify from 'fastify'
const port = process.env.PORT || 3000

const fastify = Fastify({
  logger: true
})


fastify.get('/', async function handler (request, reply) {
  return { hello: 'world' }
})

const start = async () => {
  try {
    console.log('Starting server...')
    console.log('Environment:', {
      PORT: process.env.PORT,
      NODE_ENV: process.env.NODE_ENV
    })

    await fastify.listen({ port, host: '0.0.0.0' })
    console.log(`Server is running on port ${port}`)
  } catch (err) {
    fastify.log.error(err)
    console.error('Failed to start server:', err)
    process.exit(1)
  }
}

start()
