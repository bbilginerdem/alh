# ALH Website

First, run the development server:

```bash
pnpm install
# and then
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Code Quality
Before committing any changes, you must run the linter and resolve any reported issues.

```bash
pnpm run lint
# and then
npm run lint
```

## Styling

The website uses a consistent color scheme and a responsive design approach.

- Primary Text Color: zinc-100 (for most text)
- Background Color: zinc-950 (for most backgrounds)
- Accent Color: orange-300 (for headings, links, and highlights)

## Creating a Blog Post

To create a new blog post, use any file from blog components as a template. This template is designed to ensure a consistent look and feel across all posts. Remember to use Turkish for the content. Add a image related to topic in between text somewhere as you see fit. Add needed info to data.ts. Gemini is the best to generate for now.

### Prompt
similar to above styling write me tsx component about following text in turkish add a picture where it fits as well do text sizes good for all devices , use tailwind, it is in nextjs, make text colors to orange 300 and zinc 100, add metadata for this specific blog at the top

## TODOS

# Warnings
* The resource at “http://localhost:3000/_next/static/media/83afe278b6a6bb3c-s.p.3a6ba036.woff2” preloaded with link preload was not used within a few seconds. Make sure all attributes of the preload tag are set correctly.
* This site appears to use a scroll-linked positioning effect. This may not work well with asynchronous panning; see https://firefox-source-docs.mozilla.org/performance/scroll-linked_effects.html for further details and to join the discussion on related tools and features!