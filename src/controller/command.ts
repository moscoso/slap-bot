import { AckFn, RespondFn, SayFn } from '@slack/bolt';
import { NETFLIX_CONTENT_SELECT_BLOCK } from '../server/block/netflix-content-select';
import { SLAP_BLOCK } from '../server/block/slap';

/**
 * A controller for Slack commands.
 *
 * Note: all commands must acknowledge requests from the server using the ack() utility function provided by Bolt.
 */
export class CommandController {

	/**
	 * Controller for the slap command
	 * @param ack a utility function, which returns acknowledgement to the Slack servers
	 * @param respond a utility function, to respond back to the user
	 */
	public static async slap(ack: AckFn < any > , say: SayFn): Promise < void > {
		await ack();
		await say({"blocks": SLAP_BLOCK});
	}

	/**
	 * Controller for the spin command
	 * @param ack a utility function, which returns acknowledgement to the Slack servers
	 * @param respond a utility function, to respond back to the user
	 */
	public static async spin(ack: AckFn < any > , respond: RespondFn ): Promise < void > {
		await ack();
		await respond({ "blocks": NETFLIX_CONTENT_SELECT_BLOCK });
	}
}
