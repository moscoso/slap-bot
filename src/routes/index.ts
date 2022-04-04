import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { NetflixContentType } from '../model/netflix-content';
import { NetflixService } from '../service/netflix';

export async function indexRoutes(fastify: FastifyInstance) {
    fastify.get('/', async (request, reply) => {
        reply.send({ hello: 'world', now: new Date().toLocaleTimeString() });
    });

    fastify.get('/spin', createNetflixHandlerFunction('both'));
    fastify.get('/movie', createNetflixHandlerFunction('movie'));
    fastify.get('/show', createNetflixHandlerFunction('show'));
}

/* A function that creates a handler function depending on the contentType.
	This is an advanced technique to keep code DRY. Function-ception 😎 */
function createNetflixHandlerFunction(contentType: NetflixContentType): FastifyHandlerFunction {
    return async (request: FastifyRequest < any > , reply: FastifyReply < any > ) => {
        const content = await NetflixService.random(contentType);
        const indentedJSON = JSON.stringify(content, null, 2)
        reply.send(indentedJSON);
    }
}

type FastifyHandlerFunction =  (request: FastifyRequest<any>, reply: FastifyReply<any>) => Promise<void>;
