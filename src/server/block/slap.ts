import { KnownBlock } from '@slack/bolt';

/** Previe: https://app.slack.com/block-kit-builder/T03786AE258#%7B%22blocks%22:%5B%7B%22type%22:%22image%22,%22image_url%22:%22https://media.giphy.com/media/CnRmpfxlPutVAFChvm/giphy-downsized.gif%22,%22alt_text%22:%22inspiration%22%7D%5D%7D */
export const SLAP_BLOCK: KnownBlock[] = [{
    "type": "image",
    "image_url": "https://media.giphy.com/media/CnRmpfxlPutVAFChvm/giphy-downsized.gif",
    "alt_text": "inspiration"
},
{
    "type": "context",
    "elements": [
    {
        "type": "plain_text",
        "text": "Catch these fresh prints 👏 🐾",
        "emoji": true
    }]
}]
