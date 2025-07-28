import { posts } from "@/lib/data";

export async function GET() {
	const baseUrl = "https://www.ankaralindyhop.com"; // Change to your real domain

	// Static pages
	const staticPages = [
		"",
		"blog",
		"etkinlikler",
		"iletisim",
		"topluluk-ilkeleri",
	];

	// Blog posts
	const blogPosts = posts.map((post) => `/blog/${post.slug}`);

	const allPages = [...staticPages.map((p) => `/${p}`), ...blogPosts];

	const urls = allPages
		.map(
			(path) => `
    <url>
      <loc>${baseUrl}${path}</loc>
      <changefreq>weekly</changefreq>
      <priority>${path === "/" ? "1.0" : "0.7"}</priority>
    </url>`,
		)
		.join("");

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`;

	return new Response(sitemap, {
		headers: {
			"Content-Type": "application/xml",
		},
	});
}
