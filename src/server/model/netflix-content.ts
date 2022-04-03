export interface NetflixContent {
    /** A unique identifier for the Netflix content */
    id: string;
    /** The slug for the content on Netflix */
    slug: string,
	/** The title of the movie */
	title: string,
	/** A brief summary of a completed screenplay's core concept  */
	overview: string,
	/** A short text which serves to clarify an idea for, or is designed with a form of, dramatic effect. */
	tagline ? : string;
    /** Maturity ratings set by Netflix or by a local standards organization */
    classification ? : string;
    /** How long the movie is in minutes */
    runtime: number,
	/** The date it was released */
	released_on: Date,
	/** The url to the image of the movie poster */
	img: string;
	has_poster: boolean,
	poster_blur: string,
	has_backdrop: true,
	backdrop_blur: string,
	imdb_rating: number,
	rt_critics_rating ? : number;
    reelgood_score ? : number;
    genres: number[],
	tracking: boolean;
    watchlisted: boolean;
    seen: boolean;
    /** The number of seasons a show has. If the content is a movie, season_count is 0. */
    season_count: number;
    /** Whether the content is a movie 'm' or a show 's' */
    content_type: 'm' | 's';
}

export type NetflixContentType = 'movie' | 'show' | 'both'
