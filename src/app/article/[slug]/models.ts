export interface Post {
	title: string;
	content: string;
}

export type UrlProps = Readonly<{
	params: Promise<{ slug: string }>;
}>;

export interface Podcast {
	id: number;
	audio_url: string;
	image_url: string;
	description: string;
	title: string;
}

export interface Article {
	id: number; // Example column
	title: string; // Example column
	content: string; // Example column
	slug: string;
	podcast: Podcast;
}

export interface ServerSource {
	source: {
		id: number;
		url: string;
		title: string;
		category: string;
		description: string;
	};
}
