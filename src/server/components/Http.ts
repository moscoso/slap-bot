import Fastify, { FastifyInstance } from 'fastify';
import { indexRoutes } from '../routes';

/**
 * Using the  {@link Fastify} package, this component listens to requests from browsers and other servers using HTTP.
 */
export class HttpComponent {

    public static readonly PORT: number = 42069;

	private fastify: FastifyInstance

	constructor() {
		this.fastify = Fastify()
		this.registerRoutes();
	}


	private registerRoutes() {
		this.fastify.register(indexRoutes);
	}

    /**
     * Start listening for HTTP requests and websocket events
     */
    public listen(): void {
        this.fastify.listen(HttpComponent.PORT, (err, address) => {
            console.log(`⚡️ Listening for HTTP requests at ${address} ⚡️`);
        });
    }
}
