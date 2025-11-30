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


## Blogs

Al Minns
Bugün sizlere Lindy Hop’un en önemli dansçılarından birini tanıtıyoruz. 😊 Al Minns, yolculuğuna New York’ta bir sokak dansçısı olarak başladı. Dinmek bilmez dans aşkı onu hızlıca Savoy Ballroom’a taşıdı. Savoy Ballroom, Minns’in kariyerinin başlarında rakibi olan Leon James ile serüvenlerinin başlangıç noktası oldu. Zamanla yakın arkadaş olan bu ikili, uzun yıllar partner olarak dans edip, swing danslarını yurtdışında tanıtan ve popülerleştiren dansçılardan oldular. Al Minns, swing dansının en ünlü ve en etkileyici sahne gösterilerinden biri olarak kabul edilen "Hellzapoppin'" adlı sahne şovunda yer aldı. 1941 yılında, dansçılar Frankie Manning ve Willa Mae Ricker'ın da dahil olduğu Whitey's Lindy Hoppers, bu unutulmaz sahne şovunda gösteri yaptı. 1950'li yılların sonlarında swing dansları popülaritesini kaybetti ancak Al Minns ve diğer eski swing dansçıları, yeni nesil dansçılara eski dans stillerini öğreterek swing danslarının yaşayan hatırası olarak kalmasını sağladı. Al Minns, dansçı olarak sadece sahnede değil, aynı zamanda televizyon ve sinema için de performans sergiledi. Beyaz izleyicilere yönelik filmlerde ve televizyon programlarında dans ederek, swing danslarını afro-amerikan topluluğunun yanında, çok daha geniş bir kitleye tanıttı.Son olarak, Al Minns’in kızına söylediği sözle kendisini anıyoruz; “Whatever you do, don’t be common, please strive to be extraordinary.” “Ne yaparsan yap sıradan olma, lütfen sıra dışı olmaya çalış.”
İçerik: Kübra

---

Willa Mae
Hadi dansıyla ve giyim tarzıyla akıllara kazınan lindy hop öncülerinden biriyle tanışalım!
1935’te Leon James’le birlikte ilk Harvest Moon Ball’u kazandı. Rol aldığı filmlerin ilki Marx Brothers’ın A Day at the Races filmidir. 1941’de Whitey’s Lindy Hoppers ile birlikte, Olsen ve Johnson’ın unutulmaz Hellzapoppin’ adlı müzikal komedisindeki ünlü Lindy Hop sekansında rol aldı. Fiziksel gücü ve aerial konusundaki yeteneği ile bilinir. Frankie Manning’e göre Willa Mae, bu yeteneği ile her dans partnerinin parlamasını sağlamıştır. Dans partnerleri Frankie Manning, Snookie Beasley, Leon James ve Al Minns gibi lindy hop’un öncü isimleridir. İkinci Dünya Savaşı sırasında, Whitey’nin Lindy Hopper’larının pek çoğu silahlı kuvvetlerde görev yaparken, Willa Mae, Whitey’nin en büyük grubu olarak kabul edilen Harlem Congeroos’u yönetti. Swing dönemi kıyafetlerine ba-yı-lı-yoruz. Willa Mae, dansının yanı sıra ışıltılı kemerleri, dikkat çekici etekleri ile lindy hopun sevdiğimiz stilini yaratanlardan biri oldu. Ellili yılların sonlarında Congaroos’un dağılmasının ardından kariyerine manken olarak devam etti. Her zaman modaya uygun giyinirdi ve bu konusundaki bilgisiyle moda alanında başarılı bir ikinci kariyer yapmayı başardı. 
İçerik: Ayşegül

## TODOS

* The resource at “http://localhost:3000/_next/static/media/83afe278b6a6bb3c-s.p.3a6ba036.woff2” preloaded with link preload was not used within a few seconds. Make sure all attributes of the preload tag are set correctly.
* This site appears to use a scroll-linked positioning effect. This may not work well with asynchronous panning; see https://firefox-source-docs.mozilla.org/performance/scroll-linked_effects.html for further details and to join the discussion on related tools and features!