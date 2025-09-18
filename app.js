import Fastify from 'fastify'
const port = process.env.PORT || 3000

const fastify = Fastify({
  logger: true
})


fastify.get('/', async function handler (request, reply) {
  return { hello: 'world' }
})

try {
  await fastify.listen({ port })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}
