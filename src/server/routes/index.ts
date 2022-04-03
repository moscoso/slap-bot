import { FastifyInstance } from 'fastify';

export async function indexRoutes (fastify: FastifyInstance) {
	fastify.get('/', async(request, reply) => {
		reply.send({hello: 'world', now: new Date().toLocaleTimeString()});
	});
}
