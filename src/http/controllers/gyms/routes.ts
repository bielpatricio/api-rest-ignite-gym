import { FastifyInstance } from 'fastify'
import { veirifyJWT } from '@/http/middlewares/verify-jwt'
import { search } from './search'
import { nearby } from './nearby'
import { create } from './create'

export async function gymsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', veirifyJWT)

  app.get('/gyms/search', search)
  app.get('/gyms/nearby', nearby)

  app.post('/gyms', create)
}
