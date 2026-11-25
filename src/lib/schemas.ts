import type { ComponentType } from "react";
import { z } from "zod";

export const contactFormSchema = z.object({
	senderEmail: z
		.email({ error: "Geçerli bir e-posta adresi girin." })
		.max(500, { error: "E-posta adresi 500 karakterden uzun olamaz." }),
	message: z
		.string({ error: "Mesaj alanı boş olamaz." })
		.trim()
		.min(1, { error: "Mesaj alanı boş olamaz." })
		.max(5000, { error: "Mesaj 5000 karakterden uzun olamaz." }),
});

const blogSeoSchema = z.object({
	metaDescription: z.string().min(1),
	keywords: z.array(z.string().min(1)).min(1),
	canonicalUrl: z.url().optional(),
});

export const serializableBlogPostSchema = z.object({
	id: z.number().int().positive(),
	title: z.string().min(1),
	slug: z.string().min(1),
	publishDate: z.iso.datetime(),
	author: z.string().min(1),
	excerpt: z.string().min(1),
	readingTime: z.number().int().positive(),
	tags: z.array(z.string().min(1)).min(1),
	category: z.string().min(1),
	image: z.string().min(1).optional(),
	imageAlt: z.string().min(1).optional(),
	seo: blogSeoSchema,
	lastModified: z.iso.datetime().optional(),
});

export const blogPostSchema = serializableBlogPostSchema.extend({
	Content: z.custom<ComponentType>(),
});

export type BlogMetadata = z.infer<typeof blogPostSchema>;
export type SerializableBlogMetadata = z.infer<typeof serializableBlogPostSchema>;
