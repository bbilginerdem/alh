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

To create a new blog post, use the following .tsx component as a template. This template is designed to ensure a consistent look and feel across all posts. Remember to use Turkish for the content. (if below doesn't quite work then use one of the blog posts)


### Blog Post Component Template
```tsx
// app/posts/your-post-title/page.tsx
'use client'

import type { Metadata } from 'next';
import { ArticleLayout } from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: 'Your Post Title',
  description: 'A short description of your post.',
};

export default function YourPostTitle() {
  return (
    <ArticleLayout
      title="Your Post Title"
      date="2025-04-05"
      author="Your Name"
    >
      <p>
        Your blog post content goes here. Write in Turkish.
      </p>
    </ArticleLayout>
  );
}
```

and

### Prompt
similar to above styling write me tsx component about following text in turkish add a picture where it fits as well do text sizes good for all devices , use tailwind, it is in nextjs, make text colors to orange 300 and zinc 100, add metadata for this specific blog at the top

# Performance Improvements

### Render-Blocking CSS

Issue: CSS delays page loading
Solution: Next.js handles this automatically - no action needed
### Forced Reflow

Issue: JavaScript causing layout delays
Solution: Group DOM reading and writing operations
### Preconnected Origins

Issue: Missing early connections to external resources
Solution: Add <link rel="preconnect" href="external-domain"> for external services
### Bundle Size Optimization

Issue: Large JavaScript bundles slow down loading
Solution:

- Remove unused dependencies
- Use dynamic imports for heavy components
- Code splitting for better performance

