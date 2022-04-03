import { App as BoltApp, LogLevel as BoltLogLevel } from '@slack/bolt';

/**
 * Using the @slack/bolt package, this component listens to Slack events and sends data to Slack using a websocket.
 * Lucky for us, socket mode is automatically supported by Bolt.
 *
 * Just make sure socket mode is enabled in the bot's app settings on Slack.
 * @see {@link https://slack.dev/bolt-js/concepts#socket-mode}
 */
export class SlackComponent {
    /** This is automatically generated when we create a new app in Slack @see {@link https://api.slack.com/apps} */
    public static readonly APP_ID: string = 'A039NA993KQ';

    /** This is the port exposed on this server to communicate with Slack */
    public static readonly PORT: number = 8888;

    /**
     * The app provided by @slack/bolt which handles all the connections to Slack for us
     * and gives us easy to use event listeners and utility functions to send data
     */
    private boltApp: BoltApp;

    constructor() {
        this.boltApp = this.createBoltApp();
    }

    /**
     * Construct the bolt app using the tokens and secrets from the config.json
     * @throws an {@link Error} if any of the tokens or secrets are invalid or missing
     * @returns a {@link BoltApp} that gives us easy access to the Slack API
     */
    private createBoltApp(): BoltApp {
        /* Declaring inline functions concisely using the 'arrow function expression syntax' to re-use some code locally. #DRY
           https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions */
        const isBlank = (s: string | undefined) => s === undefined || s.trim().length === 0;
        const createErrorMessage = (config: string, resource: string, hint: string) =>
            `invalid ${config}. grab it from slack @ https://api.slack.com/apps/${SlackComponent.APP_ID}/${resource} and add it to config.json Hint: ${hint}`;

        const listOfSlackSecrets = [
            { 'name': 'SLACK_APP_TOKEN', 'slack_url': `general`, 'hint': `This is under the 'App-Level Token' section and it must be generated` },
            { 'name': 'SLACK_BOT_TOKEN', 'slack_url': `oauth`, 'hint': `This is under  the 'OAuth Tokens for Your Workspace' section and it should begin with 'xoxb-'` },
            { 'name': 'SLACK_SIGNING_SECRET', 'slack_url': `general`, 'hint': `This is under the App Credentials section ` },
        ];


        // Check to make sure the secrets for Slack is set and valid. Throw an error if they are blank strings or missing.
        listOfSlackSecrets.forEach(secret => {
            /* Note: The .forEach() function is an array method that is just a short hand way to write a for loop.
             * More than just a shortcut though, array methods are more often than not better than loops because they are clean to read
             * and it saves you from re-writing common logic for array operations (like filter, sort, find, etc...)
             * Once you get advanced you will start to chain them together.
             *
             * Get familiar with them and use them over loops more often than not.
             * Learn more: https://northcoders.com/company/blog/the-beginners-guide-to-.foreach-.map-and-.filter-in-javascript
             */
			const environmentVariable = process.env[secret.name];
            const isMissing = isBlank(environmentVariable);
            if (isMissing) {
                const errorMessage = createErrorMessage(secret.name, secret.slack_url, secret.hint);
                throw new Error(errorMessage);
            }
        });

        return new BoltApp({
            appToken: process.env.SLACK_APP_TOKEN,
            logLevel: BoltLogLevel.INFO,
            port: SlackComponent.PORT,
            signingSecret: process.env.SLACK_SIGNING_SECRET,
            socketMode: true, // Make sure to enable socket mode in app settings on Slack
            token: process.env.SLACK_BOT_TOKEN,
        });
    }


    public async listen(): Promise < void > {

        this.boltApp.message(":wave:", async ({ message, say, logger }) => {
            if (message.subtype) return;
            logger.debug(message);
            await say(`Catch these fresh prints <@${message.user}> 👏 🐾`);
        });

        this.boltApp.command('/slap', async ({ ack, command, respond, logger }) => {
            await ack();
            logger.debug(`received message`);
            logger.debug(command);
            await respond(`Catch these fresh prints <@${command.user_name}> 👏 🐾`);
        });

        await this.boltApp.start();
        console.log(`⚡️ Bolt app is running using port: ${SlackComponent.PORT} ⚡️`);
    }
}
