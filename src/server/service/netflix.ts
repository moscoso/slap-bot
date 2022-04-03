import axios from 'axios';
import { NetflixContent, NetflixContentType } from '../model/netflix-content';

export class NetflixService {
    public static async random(content_kind: NetflixContentType): Promise < NetflixContent > {
        const url = new URL(`https://api.reelgood.com/v3.0/content/random/netflix`);

        url.searchParams.append("availability", "onAnySource");
        url.searchParams.append("content_kind", content_kind);
        url.searchParams.append("nocache", "true");
        url.searchParams.append("region", "us");

		console.log(url.toString());
        const response = await axios.get(url.toString());
        const content: NetflixContent = response.data;
		console.log(content);
        const contentType = content.content_type === 'm' ? 'movie' : 'show';
        content.img = `https://img.reelgood.com/content/${contentType}/${content.id}/poster-780.jpg`
        return content;

    }
}
