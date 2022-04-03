import { FastifyInstance } from 'fastify';
import { NetflixService } from '../service/netflix';

export async function indexRoutes (fastify: FastifyInstance) {
	fastify.get('/', async(request, reply) => {
		reply.send({hello: 'world', now: new Date().toLocaleTimeString()});
	});

	fastify.get('/spin', async(request, reply) => {
		const content = await NetflixService.random('both');
		const indentedJSON = JSON.stringify(content, null, 2)
		reply.send(indentedJSON);
	});

	fastify.get('/movie', async(request, reply) => {
		const content = await NetflixService.random('movie');
		const indentedJSON = JSON.stringify(content, null, 2)
		reply.send(indentedJSON);
	});

	fastify.get('/show', async(request, reply) => {
		const content = await NetflixService.random('show');
		const indentedJSON = JSON.stringify(content, null, 2)
		reply.send(indentedJSON);
	});
}
