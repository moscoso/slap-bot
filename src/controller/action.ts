import { AckFn, RespondFn } from '@slack/bolt';
import { netflixContentBlock } from '../block/netflix-content-response';
import { NetflixContentType } from '../model/netflix-content';
import { NetflixService } from '../service/netflix';

/**
 * A controller for Slack actions
 *
 * Note: all actions must acknowledge requests from the server using the ack() utility function provided by Bolt.
 */
export class ActionController {

	public static async  netflix(
		contentType: NetflixContentType,
		ack: AckFn < any > ,
		respond: RespondFn
	): Promise < void > {
		await ack();
		const content = await NetflixService.random(contentType);
		const block = netflixContentBlock(content);
		await respond({ 'blocks': block, });
	}
}
