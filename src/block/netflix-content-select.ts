import { KnownBlock } from '@slack/bolt';

/** Preview: https://app.slack.com/block-kit-builder/T03786AE258#%7B%22blocks%22:%5B%7B%22type%22:%22section%22,%22text%22:%7B%22type%22:%22mrkdwn%22,%22text%22:%22What%20kind%20of%20content%20do%20you%20want?%22%7D%7D,%7B%22type%22:%22actions%22,%22elements%22:%5B%7B%22type%22:%22button%22,%22text%22:%7B%22type%22:%22plain_text%22,%22emoji%22:true,%22text%22:%22TV%20Show%20%F0%9F%93%BA%22%7D,%22style%22:%22danger%22,%22value%22:%22tv%22%7D,%7B%22type%22:%22button%22,%22text%22:%7B%22type%22:%22plain_text%22,%22emoji%22:true,%22text%22:%22Movie%20%F0%9F%8E%A5%22%7D,%22value%22:%22movie%22%7D,%7B%22type%22:%22button%22,%22text%22:%7B%22type%22:%22plain_text%22,%22emoji%22:true,%22text%22:%22Either%20%F0%9F%8E%B2%22%7D,%22style%22:%22primary%22,%22value%22:%22both%22%7D%5D%7D%5D%7D */
export const NETFLIX_CONTENT_SELECT_BLOCK: KnownBlock[] = [
{
    "type": "section",
    "text": {
        "type": "mrkdwn",
        "text": "What kind of content do you want?"
    }
},
{
    "type": "actions",
    "elements": [
    {
        "type": "button",
        "text": {
            "type": "plain_text",
            "emoji": true,
            "text": "TV Show 📺"
        },
        "style": "danger",
		"action_id": "show"
    },
    {
        "type": "button",
        "text": {
            "type": "plain_text",
            "emoji": true,
            "text": "Movie 🎥"
        },
        "value": "movie",
		"action_id": "movie",
    },
    {
        "type": "button",
        "text": {
            "type": "plain_text",
            "emoji": true,
            "text": "Either 🎲"
        },
        "style": "primary",
        "value": "both",
		"action_id": "both",
    }]
}];
