import { HttpComponent } from './components/Http';
import { SlackComponent } from './components/Slack';

/**
 * The Botserver is composed of an {@link HttpServer} and a {@link SlackServer}
 */
export class BotServer {
    private static instance: BotServer;

	private slackServer: SlackComponent = new SlackComponent();
    private httpServer: HttpComponent = new HttpComponent();

    private constructor() {
        BotServer.instance = this;
    }

    /**
     *  The {@link BotServer} follows the Singleton design pattern and will ensure that only one instance is created
     */
    public static getInstance(): BotServer {
        if (!BotServer.instance) BotServer.instance = new BotServer();
        return BotServer.instance;
    }

	public start() {
		this.slackServer.listen();
		this.httpServer.listen();
	}



}
