import { AckFn, RespondFn } from '@slack/bolt';
import { netflixContentBlock } from '../server/block/netflix-content-response';
import { NetflixContentType } from '../server/model/netflix-content';
import { NetflixService } from '../server/service/netflix';

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
