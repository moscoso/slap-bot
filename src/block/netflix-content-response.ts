import { KnownBlock } from '@slack/bolt';
import { NetflixContent } from '../model/netflix-content';

export function netflixContentBlock(content: NetflixContent): KnownBlock[] {
    return [
    {
        "type": "section",
        "text": {
            "type": "mrkdwn",
            "text": `*${content.title}*`
        }
    },
    {
        "type": "section",
        "block_id": "netflix-content-body",
        "text": {
            "type": "mrkdwn",
            "text": content.overview
        },
    },
    {
        "type": "image",
        "image_url": content.img,
        "alt_text": content.title,
    },
    {
        "type": "section",
        "block_id": "netflix-content-rating",
        "fields": [
        {
            "type": "mrkdwn",
            "text": `*IMDB Rating*\n${content.imdb_rating}`
        }]
    }]
}
