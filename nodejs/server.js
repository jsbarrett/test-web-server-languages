import Fastify from 'fastify'

const fastify = Fastify()

fastify.get('/', (_, res) => { res.send('hi\n') })

fastify.listen({ port: 3001 }, (err, address) => {
  console.log(`server is now listening on port ${address}`)
})

