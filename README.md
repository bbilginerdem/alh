# 💃 Ankara Lindy Hop (ALH) Website

Ankara'nın en aktif Lindy Hop ve swing dans topluluğu olan **Ankara Lindy Hop**'un resmi web sitesi. Bu platform, topluluk üyelerinin etkinliklerden haberdar olmasını, blog yazılarıyla dans kültürünü keşfetmesini ve topluluk ilkelerini öğrenmesini sağlar.

![ALH Banner](https://www.ankaralindyhop.org/images/og-image.png)

## ✨ Özellikler

- **Modern & Dinamik Arayüz**: GSAP kullanılarak hazırlanmış premium animasyonlar ve akıcı kullanıcı deneyimi.
- **Blog Sistemi**: Dans tarihi, müzik ve kültür üzerine zengin içerikli makaleler.
- **Etkinlik Takibi**: Yaklaşan partiler, pratik alanları ve özel etkinliklerin takibi.
- **Performans Odaklı**: Next.js 16 (Turbopack) ve App Router ile hızlı yükleme süreleri; tüm blog yazıları `generateStaticParams` ile önceden derlenir (SSG).
- **SEO Uyumlu**: Route bazlı self-referencing canonical, JSON-LD yapısal veri, sitemap/robots ve LLM keşif dosyaları (`llms.txt`, `ai-catalog.json`, `.well-known/webmcp.json`).
- **Responsive Tasarım**: Mobil öncelikli (Mobile-first) yaklaşım ile tüm cihazlarda kusursuz görünüm.

## 🛠 Teknoloji Yığını

| Katman           | Teknoloji                                                                     | Sürüm |
| ---------------- | ----------------------------------------------------------------------------- | ----- |
| Framework        | [Next.js](https://nextjs.org/) (App Router + Turbopack)                       | 16.4  |
| UI               | [React](https://react.dev/)                                                   | 19.3  |
| Dil              | [TypeScript](https://www.typescriptlang.org/) (native/Go port)                | 7.0   |
| Styling          | [Tailwind CSS](https://tailwindcss.com/)                                      | 4.3   |
| Animasyon        | [GSAP](https://gsap.com/) & [@gsap/react](https://github.com/greensock/react) | 3.15  |
| İkonlar          | [Lucide React](https://lucide.dev/)                                           | 1.74  |
| E-posta          | [Resend](https://resend.com/) + [React Email](https://react.email/)           | 6.38  |
| Fontlar          | Next Font (Inter & Almendra SC)                                               | —     |
| Lint/Format      | [Biome](https://biomejs.dev/)                                                 | 2.6   |
| Paket Yöneticisi | [pnpm](https://pnpm.io/)                                                      | 12    |
| Deployment       | [Vercel](https://vercel.com/)                                                 | —     |

> **Not:** Sitenin kanonik adresi `src/lib/site.ts` içindeki tek bir `SITE_URL` sabitinden türer. `metadataBase`, sitemap, robots, Open Graph ve JSON-LD bu sabiti kullanır; alan adı değişirse yalnızca bu dosya güncellenir.

## 🚀 Başlangıç

### Ön Gereksinimler

- Node.js 24+
- pnpm 12+

### Kurulum

1. Repoyu klonlayın:

   ```bash
   git clone https://github.com/bbilginerdem/alh.git
   cd alh
   ```

2. Bağımlılıkları yükleyin:

   ```bash
   pnpm install
   ```

3. Ortam değişkenlerini ayarlayın:

   ```bash
   cp .env.example .env
   # .env içine gerçek RESEND_API_KEY değerini yazın
   ```

4. Geliştirme sunucusunu başlatın ve `http://localhost:3000` adresini açın:

   ```bash
   pnpm dev
   ```

### Komutlar

| Komut        | Açıklama                                                         |
| ------------ | ---------------------------------------------------------------- |
| `pnpm dev`   | Turbopack ile geliştirme sunucusu                                |
| `pnpm build` | Prodüksiyon derlemesi                                            |
| `pnpm start` | Derlenmiş prodüksiyon sunucusu                                   |
| `pnpm lint`  | Biome ile lint + otomatik format (`--write`)                     |
| `pnpm lh`    | Lighthouse mobil & masaüstü raporlarını `reports/` altına üretir |

## 📁 Proje Yapısı

```
.
├── public/                 # Statik dosyalar (görseller, videolar, manifest, sw.js, llms.txt)
├── reports/                # Lighthouse çıktıları (gitignore'lu)
└── src/
    ├── app/                # Sayfa rotaları, layoutlar, sitemap.ts, robots.ts
    ├── components/         # UI ve layout bileşenleri
    │   └── blog/posts/     # Blog yazısı gövdeleri (yalnızca render, metadata içermez)
    ├── email/              # React Email şablonu ve "use server" gönderim aksiyonu
    ├── lib/                # Yardımcılar: site.ts (SITE_URL), data.ts (blog metadata), utils.ts
    └── types/              # TypeScript tip tanımlamaları
```

### Blog Yazısı Ekleme

Yeni bir blog yazısı eklemek için:

1. `src/components/blog/posts/` altında yeni bir `.tsx` dosyası oluşturun ve yalnızca JSX gövdesini `export default` edin.
2. `src/lib/data.ts` içerisindeki `posts` dizisine metadata bilgisini (`title`, `slug`, `seo`, `canonicalUrl`, `Content` vb.) ekleyin.
3. Görselleri `public/images/blogs/` dizinine `.webp` formatında ekleyin.

> Metadata'yı post bileşeninin içine yazmayın. Bu bileşenler `"use client"` olduğu için `export const metadata` Next.js tarafından yok sayılır; sayfa metadata'sı tek noktadan, `src/app/blog/[slug]/page.tsx` içindeki `generateMetadata` tarafından `data.ts`'ten üretilir. Yeni slug `generateStaticParams` üzerinden otomatik olarak statik derlenir.

## 📈 Yol Haritası

### Öncelik 1 — Mevcut mimarinin tamamlanması

- [ ] **Zod v4 ile şema doğrulama**: `sendEmail` server action'ı şu an elle yazılmış `validateString` kullanıyor. Zod'a geçiş hem form hem `data.ts` blog metadata'sını tek şemada doğrular.
- [ ] **İletişim formuna rate limiting**: Server action'da throttle veya honeypot yok; döngüye sokan biri Resend kotasını tüketebilir. Upstash Ratelimit (Redis, ücretsiz katman) veya Vercel WAF.
- [ ] **`useActionState` + `useFormStatus`**: `ContactForm` hâlâ elle `useState` + `try/catch` ile pending durumu yönetiyor. React 19'un form primitive'leri bunu gereksiz hale getiriyor.
- [ ] **Tip güvenli ortam değişkenleri**: `@t3-oss/env-nextjs` ile `RESEND_API_KEY` eksikken build'in başında patlamak (sessiz çalışma yerine).
- [ ] **Test altyapısı**: Projede hiç test yok. Vitest (unit: `blog-utils`, `utils`) + Playwright (iletişim formu, blog navigasyonu).

### Öncelik 2 — Next.js 16 / React 19 yetenekleri

- [ ] **React Compiler**: Otomatik memoization. GSAP ağırlıklı bileşenlerde elle `useMemo`/`useCallback` ihtiyacını kaldırır.
- [ ] **`use cache` / Cache Components**: Next.js 16'nın yeni önbellek primitive'i. Blog listeleme ve etkinlik verileri için PPR ile birleştirilebilir.
- [ ] **Partial Prerendering (PPR)**: Statik kabuk + dinamik içerik; blog sayfalarında TTFB'yi daha da düşürür.
- [ ] **View Transitions**: React `ViewTransition` ile blog listesi → yazı geçişlerinde paylaşımlı eleman animasyonu (GSAP yükünü azaltır).
- [ ] **`next/image` blur placeholder + `priority`**: Hero ve blog kapak görsellerinde CLS'i sıfırlamak için.

### Öncelik 3 — İçerik ve topluluk

- [ ] **MDX'e geçiş (Velite veya `@next/mdx`)**: Blog gövdelerini TSX'ten ayırmak. Velite, Zod tabanlı content collection ile `data.ts`'in yerini alır ve tip güvenliğini korur.
- [ ] **Yorum sistemi — giscus**: GitHub Discussions tabanlı, backend ve veritabanı gerektirmez; tek kişilik bakım için en düşük maliyetli seçenek.
- [ ] **E-bülten — Resend Audiences**: Resend zaten kurulu; ayrı bir servis eklemeden abonelik listesi ve double opt-in.
- [ ] **Site içi arama — Pagefind**: Derleme sırasında üretilen statik indeks; sunucu maliyeti yok.
- [ ] **Çoklu dil (i18n) — next-intl**: App Router için fiili standart; Türkçe içerik İngilizce ile paralel yürür.

### Öncelik 4 — Ölçümleme ve uyum

- [ ] **Çerezsiz analitik (Plausible veya Umami)**: Vercel Analytics şu an çerez onayından bağımsız yükleniyor ve "Reddet" seçeneği hiçbir şeyi değiştirmiyor. Çerezsiz bir servise geçmek bu uyum açığını (KVKK/ePrivacy) kökten çözer.
- [ ] **Sentry veya Vercel Speed Insights**: İstemci tarafı hatalar şu an tamamen sessiz (`PWARegistration` içindeki boş `catch {}` dahil).
- [ ] **Service worker'ı Serwist'e taşıma**: `public/sw.js` elle yönetiliyor; her içerik değişiminde `CACHE_VERSION`'ı elle artırmak gerekiyor.
- [ ] **Erişilebilirlik denetimi**: axe-core ile otomatik a11y taraması (Biome'ın a11y kuralları zaten açık).

### Tamamlandı

- [x] **PWA Desteği**: Manifest, service worker, çevrimdışı sayfa ve kurulum istemi.
- [x] **Tüm rotalarda self-referencing canonical** ve kanonik adresin `www` üzerinde birleştirilmesi.
- [x] **Blog yazılarının SSG olarak önceden derlenmesi** (`generateStaticParams`).
- [x] **JSON-LD yapısal veride mutlak URL kullanımı** (Schema.org gereksinimi).
- [x] **LLM/ajan keşif dosyaları**: `llms.txt`, `ai-catalog.json`, `.well-known/webmcp.json`.

## 🤝 Katkıda Bulunma

Katkı vermek isterseniz lütfen bir Issue açın veya Pull Request gönderin. Topluluk kurallarımıza (`CODE_OF_CONDUCT.md`) uymayı unutmayın.

## 📄 Lisans

Bu proje [MIT Lisansı](LICENSE) altında lisanslanmıştır.
