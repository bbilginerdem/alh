# ALH Website

First, run the development server:

```bash
pnpm install
```

## Code Quality
Before committing any changes, you must run the linter and resolve any reported issues.

```bash
pnpm run lint
```

## Styling

The website uses a consistent color scheme and a responsive design approach.

- Primary Text Color: zinc-100 (for most text)
- Background Color: zinc-950 (for most backgrounds)
- Accent Color: orange-300 (for headings, links, and highlights)

## Creating a Blog Post

To create a new blog post, use any file from blog components as a template. This template is designed to ensure a consistent look and feel across all posts. Remember to use Turkish for the content. Add a image related to topic in between text somewhere as you see fit. Add needed info to data.ts. Gemini is the best to generate for now.

## Prompt
similar to above styling write me tsx component about following text in turkish add a picture where it fits as well do text sizes good for all devices , use tailwind, it is in nextjs, make text colors to orange 300 and zinc 100, add metadata for this specific blog at the top

## TODOS

### Improvements
* Investigate other problems from page speed insights

### Features
* Add language support for english to navbar expect blog page
* Topluluk ilkeleri yerine bounce rate i arttirabilecek birsey
* Öne çıkan butonunu arada bir değiştirmesini söyleyebilirsin sürekli aynı olması işleyişini değiştir
* Ask AI what could be added to the website
