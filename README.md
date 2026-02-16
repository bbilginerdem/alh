# 💃 Ankara Lindy Hop (ALH) Website

Ankara'nın en aktif Lindy Hop ve swing dans topluluğu olan **Ankara Lindy Hop**'un resmi web sitesi. Bu platform, topluluk üyelerinin etkinliklerden haberdar olmasını, blog yazılarıyla dans kültürünü keşfetmesini ve topluluk ilkelerini öğrenmesini sağlar.

![ALH Banner](https://ankaralindyhop.org/images/og-image.png)

## ✨ Özellikler

- **Modern & Dinamik Arayüz**: GSAP kullanılarak hazırlanmış premium animasyonlar ve akıcı kullanıcı deneyimi.
- **Blog Sistemi**: Dans tarihi, müzik ve kültür üzerine zengin içerikli makaleler.
- **Etkinlik Takibi**: Yaklaşan partiler, pratik alanları ve özel etkinliklerin takibi.
- **Performans Odaklı**: Next.js 15+ ve App Router ile hızlı yükleme süreleri ve SEO uyumluluğu.
- **Responsive Tasarım**: Mobil öncelikli (Mobile-first) yaklaşım ile tüm cihazlarda kusursuz görünüm.

## 🛠 Teknoloji Yığını

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animasyon**: [GSAP](https://gsap.com/) & [@gsap/react](https://github.com/greensock/react)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fontlar**: Next Font (Inter & Almendra SC)
- **Deployment**: [Vercel](https://vercel.com/)
- **Linter/Formatter**: [Biome](https://biomejs.dev/)

## 🚀 Başlangıç

### Ön Gereksinimler

- Node.js 20+ 
- pnpm (Önerilen)

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

3. Geliştirme sunucusunu başlatın:
   ```bash
   pnpm dev
   ```

4. Tarayıcınızda `http://localhost:3000` adresini açın.

## 📁 Proje Yapısı

```
src/
├── app/             # Sayfa rotaları ve layoutlar
├── components/      # UI ve layout bileşenleri
├── email/           # E-posta şablonları
├── lib/             # Yardımcı fonksiyonlar ve statik veriler
├── types/           # TypeScript tip tanımlamaları
└── public/          # Statik dosyalar (resimler, videolar)
```

## 🏗 Geliştirme Kuralları

### Kod Kalitesi
Değişikliklerinizi commit etmeden önce linter'ı çalıştırmayı unutmayın:
```bash
pnpm run lint
```

### Blog Yazısı Ekleme
Yeni bir blog yazısı eklemek için:
1. `src/components/blog/posts/` altında yeni bir `.tsx` dosyası oluşturun.
2. `src/lib/data.ts` içerisindeki `posts` dizisine gerekli metadata bilgilerini ekleyin.
3. Görselleri `public/images/blogs/` dizinine `.webp` formatında ekleyin.

## 📈 Yol Haritası (Gelecek Geliştirmeler)

- [ ] **MDX Entegrasyonu**: Blog içeriklerini TSX yerine MDX formatına taşıyarak içerik yönetimini kolaylaştırmak.
- [ ] **PWA Desteği**: Kullanıcıların siteye uygulama gibi erişebilmesi ve bildirim alabilmesi.
- [ ] **Çoklu Dil Desteği (i18n)**: İçeriklerin İngilizce ve diğer dillerde sunulması.
- [ ] **Yorum Sistemi**: Blog yazılarına topluluk katılımı için yorum ekleme özelliği.
- [ ] **Etkinlik Takvimi**: Google Calendar entegrasyonu ile daha detaylı etkinlik yönetimi.
- [ ] **Abone Sistemi**: Yeni blog ve etkinlikler için e-bülten kaydı.

## 🤝 Katkıda Bulunma

Katkı vermek isterseniz lütfen bir Issue açın veya Pull Request gönderin. Topluluk kurallarımıza (`CODE_OF_CONDUCT.md`) uymayı unutmayın.

## 📄 Lisans

Bu proje [MIT Lisansı](LICENSE) altında lisanslanmıştır.