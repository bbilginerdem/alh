export interface BlogMetadata {
	id: number;
	title: string;
	slug: string;
	publishDate: string;
	author: string;
	excerpt: string;
	readingTime: number; // in minutes
	tags: string[];
	category: string;
	image?: string;
	imageAlt?: string;
	seo: {
		metaDescription: string;
		keywords: string[];
		canonicalUrl?: string;
	};
	lastModified?: string;
	Content: React.ComponentType;
}

export interface BlogWrapperProps {
	metadata: BlogMetadata;
	children: React.ReactNode;
}
