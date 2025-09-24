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

To create a new blog post, use the following .tsx component as a template. This template is designed to ensure a consistent look and feel across all posts. Remember to use Turkish for the content. Add a image related to topic inbetween text somewhere as you see fit.?

### Blog Post Component Template
```tsx
"use client";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Earl Hines: Cazın Yenilikçi Piyano Devi",
  description:
    "Earl Hines'in caz tarihindeki yeri, 'trompet tarzı' piyano tekniği, Louis Armstrong ile ortak çalışmaları ve 'Weather Bird' gibi ikonik eserleri hakkında detaylı bilgiler.",
  keywords: [
    "Earl Hines",
    "Fatha Hines",
    "caz piyanistleri",
    "Weather Bird",
    "Louis Armstrong",
    "Grand Terrace Cafe",
    "1920'ler caz",
    "Savoy Ballroom",
    "jazz piano",
  ],
  openGraph: {
    title: "Earl Hines: Cazın Yenilikçi Piyano Devi",
    description:
      "Earl Hines'in Louis Armstrong ile ortak çalışmaları, 'trompet tarzı' piyano tekniği ve caz tarihine yaptığı katkılara dair kapsamlı bir inceleme.",
    url: "https://ankaralindyhop.org/blog/earl-hines",
    siteName: "Ankara Lindy Hop",
    locale: "tr_TR",
    type: "article",
  },
};

export default function EarlHines() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-8 text-zinc-100">
      <header className="mb-8 text-center">
        <h1 className="mb-4 font-bold text-3xl md:text-4xl">
          Earl Hines: Cazın Yenilikçi Piyano Devi
        </h1>
        <div className="mx-auto h-1 w-24 bg-orange-300" />
      </header>

      <div className="prose prose-invert max-w-none">
        <section className="mb-8">
          <p className="mb-6 text-base md:text-lg">
            <span className="font-semibold text-orange-300">
              Earl Hines (1903–1983)
            </span>
            , caz müziğinin en önemli piyanistlerinden ve yenilikçilerinden biri
            olarak kabul edilir. 28 Aralık 1903’te Pennsylvania, Duquesne’de
            doğan Hines’in babası kornet çalan bir müzisyendi, annesi ise kilise
            organisti ve koro şefiydi. Bu müzikal ortam, Hines’in erken yaşta
            müziğe ilgi duymasını sağladı.
          </p>

          <div className="mb-8 flex flex-col gap-6 md:flex-row">
            <div className="md:w-1/2">
              {/* YouTube Embed */}
              <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
                <iframe
                  title="Earl Hines and Louis Armstrong"
                  src="https://www.youtube.com/embed/Dv_9B7W7Q0w"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <p className="mt-2 text-center text-xs text-zinc-400">
                Earl Hines & His Orchestra – "Boogie Woogie on the 88" (1940)
              </p>
            </div>
            <div className="md:w-1/2">
              <p className="mb-4 text-base md:text-lg">
                Hines, kariyerine yerel gruplarda piyanist olarak başladı.
                Profesyonel olarak 13 yaşında Pittsburgh’da çeşitli gruplarla
                çalmaya başladı. İlk kayıtlarını Deppe ve orkestrasıyla birlikte
                1922 yılında yaptı.
              </p>
              <p className="mb-4 text-base md:text-lg">
                1920’lerin ortalarında Chicago’ya taşındı ve caz trompetçisi{" "}
                <span className="font-semibold text-orange-300">
                  Louis Armstrong
                </span>{" "}
                ile tanıştı. 1927’de Armstrong’un beşlisine katıldı ve birlikte
                Sunset Cafe’de çalmaya başladılar. Hines ve Armstrong 1927 ve
                1928 yılları arasında 36 kayıt yaptılar.
              </p>
            </div>
          </div>
          <p className="text-base md:text-lg">
            İkilinin ortak kayıtlarından en ünlüsü,{" "}
            <span className="font-semibold text-orange-300">
              "Weather Bird"
            </span>{" "}
            adlı düettir — caz tarihindeki en ikonik trumpet-piano
            diyaloglarından biri.
          </p>
        </section>

        <section className="mb-8 rounded-lg bg-white/10 p-6 backdrop-blur-sm">
          <h2 className="mb-4 font-semibold text-orange-300 text-xl md:text-2xl">
            Kendi Orkestrası ve "Fatha" Lakabı
          </h2>
          <p className="mb-4 text-base md:text-lg">
            1928’de kendi orkestrasını kurdu ve Chicago’nun prestijli{" "}
            <span className="font-semibold text-orange-300">
              Grand Terrace Cafe
            </span>
            ’sinde düzenli olarak çalmaya başladı. Bu orkestra, ABD genelinde
            turne yaptı ve o dönemde Güney’de sahne alabilen birkaç Siyah grup
            arasında yer aldı.
          </p>
          <p className="text-base md:text-lg">
            1930’larda ve 1940’larda Hines’in orkestrası büyük popülerlik
            kazandı. Bu dönemde “
            <span className="font-semibold text-orange-300">Fatha</span>”
            (Father) lakabını kazandı — hem saygı göstermek hem de onun otoriter
            ama koruyucu liderliğine atıfta bulunmak için.
          </p>
        </section>

        <section className="mb-8">
          <div className="flex flex-col gap-6 md:flex-row-reverse">
            <div>
              <h2 className="mb-4 font-semibold text-orange-300 text-xl md:text-2xl">
                Yenilikçi Piyano Stili
              </h2>
              <p className="mb-4 text-base md:text-lg">
                Hines, piyano stilinde devrim yaratan yenilikler getirdi. Sağ
                eliyle melodiyi öne çıkarırken, sol eliyle akorları değil, tek
                notalarla ritmik destek sağlayan “
                <span className="font-semibold text-orange-300">
                  trompet tarzı
                </span>
                ” (trumpet style) tekniği, ona eşsiz bir ses kazandırdı.
              </p>
              <p className="text-base md:text-lg">
                Bu tarz,{" "}
                <span className="font-semibold text-orange-300">
                  Bud Powell
                </span>
                ,{" "}
                <span className="font-semibold text-orange-300">
                  Thelonious Monk
                </span>{" "}
                ve daha sonra{" "}
                <span className="font-semibold text-orange-300">
                  Oscar Peterson
                </span>{" "}
                gibi piyanistler üzerinde derin bir etki yarattı. Hines,
                1926’dan sonra “Hot Jazz” stilinin öncülüğünü yapmıştır.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 font-semibold text-orange-300 text-xl md:text-2xl">
            1940’lardan Sonra: Küçük Gruplar ve Yeniden Keşif
          </h2>
          <p className="mb-4 text-base md:text-lg">
            Büyük orkestraların popülaritesi 1940’ların sonlarında azalırken,
            Hines küçük gruplarla çalmaya başladı. 1960’larda “yeniden
            keşfedildi” ve uluslararası arenada tekrar büyük takdir topladı.
          </p>
          <p className="text-base md:text-lg">
            1957 ve 1966’da Avrupa ve Japonya’da sahne aldı. Oakland,
            Kaliforniya’da yaşamaya başlayan Hines, 1960’tan sonra serbest
            sanatçı olarak birçok isimle çalıştı. 22 Nisan 1983’te Oakland’da
            hayatını kaybetti.
          </p>
        </section>

        <section className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
          <h3 className="mb-4 font-semibold text-lg text-orange-300 md:text-xl">
            Miras ve Etki
          </h3>
          <p className="mb-4 text-base md:text-lg">
            Earl Hines, sadece bir piyanist değil, aynı zamanda bir{" "}
            <em>devrimci</em> ve
            <em> mentor</em> idi. Müziğindeki keskin ritimler, melodik cesaret
            ve teknik yenilikler, onu caz piyanosunun gelişiminde dönüm noktası
            yaptı.
          </p>

          <blockquote className="my-6 border-orange-300 border-l-4 pl-4 text-base italic md:text-lg">
            "Piyano, benim sesimdir. Her notada bir hikâye var." <br />
            <span className="text-orange-300">– Earl Hines</span>
          </blockquote>
        </section>

        <section className="mt-10 rounded-lg border border-zinc-700 bg-zinc-900/50 p-6">
          <h3 className="font-semibold text-lg text-orange-300">
            Orkestra Üyeleri (1928–1932)
          </h3>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm md:text-base">
            <li>
              <strong>Leader & Piano:</strong> Earl Hines
            </li>
            <li>
              <strong>Trumpet:</strong> George Mitchell, Shirley Clay
            </li>
            <li>
              <strong>Trombone:</strong> William Franklin
            </li>
            <li>
              <strong>Clarinet & Alto Sax:</strong> Toby Turner, Lester Boone
            </li>
            <li>
              <strong>Clarinet & Tenor Sax:</strong> Cecil Irwin
            </li>
            <li>
              <strong>Baritone Sax:</strong> Lester Boone
            </li>
            <li>
              <strong>Banjo & Guitar:</strong> Claude Roberts
            </li>
            <li>
              <strong>Bass:</strong> Hayes Alvis
            </li>
            <li>
              <strong>Drums:</strong> Benny Washington
            </li>
            <li>
              <strong>Liner Notes:</strong> Anatol Schenker
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h3 className="font-semibold text-lg text-orange-300">Kaynaklar</h3>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-300">
            <li>
              Hoffmann, F. (2004).{" "}
              <em>HINES, EARL “FATHA” (28 NOV 1903–22 APR 1983)</em>. In
              Encyclopedia of Recorded Sound (pp. 998-1002). Routledge.
            </li>
            <li>
              Taylor, J. (1998).{" "}
              <em>Louis Armstrong, Earl Hines, and "Weather Bird"</em>. The
              Musical Quarterly, 82(1), 1-40.
            </li>
            <li>
              Türk Dil Kurumu Sözlükleri (sozluk.gov.tr), 04.07.2024, 18.33.
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=..."
                className="text-orange-400 hover:underline"
              >
                Louis Armstrong and Earl Hines - Weather Bird - YouTube
              </a>
            </li>
            <li>
              <a
                href="https://www.discogs.com/release/..."
                className="text-orange-400 hover:underline"
              >
                Earl Hines And His Orchestra – 1928-1932 (1990, CD) - Discogs
              </a>
              , 04.07.2024, 18.40.
            </li>
          </ul>

          <div className="mt-6">
            <p className="mb-2 font-semibold text-orange-300">İçerik: Ayça</p>
          </div>
        </section>
      </div>
    </article>
  );
}
```

and

### Prompt
similar to above styling write me tsx component about following text in turkish add a picture where it fits as well do text sizes good for all devices , use tailwind, it is in nextjs, make text colors to orange 300 and zinc 100, add metadata for this specific blog at the top


## Blogs

Asıl adı Edward Ellington olan Duke Ellington, “Duke” lakabını; arkadaşlarının ona zarif kıyafetleri ve görgülü tavırlarından ötürü taktığı bir lakap olarak almıştır.
Duke Ellington, caz tarihinin en önemli bestecisi, büyük bir müzik grubu lideri olmasına ek olarak beraber çalıştığı müzisyenlere özgü solo yazma konusunda da örnek bir figür olarak caz tarihine geçmiştir. Ben Webster, Johhny Hodges, Cootie Williams gibi bir çok virtüöz müzisyeni etkileyerek, onlara özgü sololar yazarak yeteneklerini vurgulamak için daha önlere çıkarmıştır.
Bunlara ek olarak yanındaki müzisyenlere kendi şarkılarını deneme fırsatı vermiştir. Bunlardan bazıları orkestra ile yeniden düzenlenerek kaydedilmiştir. Bu şarkılardan en önemlisi jazz tarihinde de önemli bir yere sahip olan “Caravan”dır ve Duke Ellington’ın yanında trombonist olan Juan Tizol tarafından bestelenmiştir.
İçerik: Salih
Hazırlayan:Neval

---

Dans pistinin efsanesi Frankie Manning’i ne kadar tanıyorsunuz?
● Kendi icat ettiği figürlerle Lindy Hop'u yeni zirvelere taşıyan Frankie, dans devrimini bizzat kendisi sırtlayanlardan oldu.
● Bilmeyenler için bir sürpriz: Frankie Manning aerial dans figürlerini Lindy Hop’la buluşturan orijinal bir mucitti.
● Havada inanılmaz bir güç ve çeviklik gerektiren bu akrobatik hareketler hala günümüzdeki dansçıları korkutabiliyor!
● Savoy Ballroom'da sahne almasından Hollywood filmleri için koreografi yapmasına kadar Frankie'nin katkıları, Lindy Hop'u küresel bir fenomen haline getirdi ve ona Lindy Hop
Elçisi ünvanını kazandırdı.
● Manning’in yaratıcılığı ve herkese bulaşan enerjisi, dansa etkisini sürdürmekte ve bugün hala Lindy Hop’u şekillendirmekte.
İçerik: Uygar
Hazırlayan: Pınar

---

Count Basie - Part 1
Bugün size daha yakından tanıtmak istediğimiz Count Basie gönderilerimizin ilki ile karşınızdayız. Asıl adı William James Basie olan Count Basie; Duke Ellington ile birlikte büyük caz orkestralarının şefliğini yapan önde gelen müzisyenlerden biri ve caz efsanesidir. Basie’nin orkestrası caz ve blues müziğini birleştirerek swing’i egemen bir hale getirmesi ile tanınır. Basie, caz dünyasını değiştirmiş ve 20. yüzyıl ortalarındaki popüler müziği şekillendirerek "Swing Kralı" unvanını hak etmiştir, çünkü dünyada dans etme arzusunu doğurmuştur. Basie'nin "Moten Swing" isimli şarkısı, Basie'ye atfedilen ve orkestral cazın daha özgür bir formuna ve swing müziğin gelişimine değerli bir katkı olan bir eser olarak kabul edilir.
Basie’nin çocukluğunda kullandığı “*stride” (*sol elin kullanıldığı teknik) tarzı ile daha az nota kullanıp notalar arasında verdiği esler Basie’nin karakteristik tarzını oluşturmuştur. Basie akor değişiklikleri üzerine düzenlemeli bir yaklaşım olan comping stilini ilk başaran müzisyenlerden biridir. Basie’nin orkestrası çoğu orkestrada 1 tane bulunmasına rağmen 2 tane bölünmüş tenor saksafon kullandırma, şarkıların ritim bölümlerini vurgulama ve nakaratı tüm orkestra ile çalma ve farklı düzenlemeler kullanma gibi yeniliklerle tanınır. İçerik&Tasarım: Neval

---

Count Basie- Part 2
John Hammond ‘un Basie orkestrasını radyoda dinlemesiyle ilk kayıt anlaşması yapılmış ve Basie orkestrasının ünü giderek yayılmaya başlamıştır. Count Basie dönemin en ünlü müzisyen ve şarkıcılarıyla beraber çalışmıştır. Bir diğer efsane orkestra şefi ve müzisyen olan Chick Webb orkestrasının Ella Fitzgerald ile; Count Basie orkestrasının Billie Holiday ile katıldıkları düelloda Basie çok az farkla düelloyu kaybetse de orkestrasının başarısını kanıtlamıştır. Duke Ellington gibi isimlerin de katılımıyla Jazz tarihi için unutulmaz bir gece yaşatmıştır. Basie, Billie Holiday’in yanı sıra Ella Fitzgerald, Frank Sinatra, Tonny Bennett gibi birçok isimle unutulmaz şarkılara imza atmıştır.Basie, orkestrasının sesini geliştirmek için kadrosunu sık değiştirse de en önemli üyeleri uzun süre tutardı. Basie’nin orkestrası müzisyenlerin bir arada olmaktan keyif aldığı bir ortamdı. Basie müzisyenlere gelişebilecekleri bir ortam sağlayan aynı zamanda eğlenmeleri için de fırsat veren iyi bir liderdi. Gülmeyi çok seven Basie kendisinden her zaman bir centilmen olarak bahsettirmeyi başarmıştır. İlk Grammy ödülü alan afro-amerikan sanatçı olan caz efsanesinin “Jumpin at the Woodside" ve "One O'Clock Jump" gibi en ünlü şarkıları, tüm zamanların en iyi bilinen caz standartlarından bazıları olarak sonsuza kadar yaşamaya devam edecektir. Count Basie’nin 50 yılı aşkın süre şefliğini yaptığı Count Basie orkestrası günümüzde hala trompetçi Scotty Barnhart yönetiminde sahne alıyor ve Basie’nin müzikal mirası yaşamaya devam ediyor.
İçerik & Hazırlayan: Neval

---

Bugün sizlere Lindy Hop’un en önemli dansçılarından birini tanıtıyoruz. 😊 Al Minns, yolculuğuna New York’ta bir sokak dansçısı olarak başladı. Dinmek bilmez dans aşkı onu hızlıca Savoy Ballroom’a taşıdı. Savoy Ballroom, Minns’in kariyerinin başlarında rakibi olan Leon James ile serüvenlerinin başlangıç noktası oldu. Zamanla yakın arkadaş olan bu ikili, uzun yıllar partner olarak dans edip, swing danslarını yurtdışında tanıtan ve popülerleştiren dansçılardan oldular. Al Minns, swing dansının en ünlü ve en etkileyici sahne gösterilerinden biri olarak kabul edilen "Hellzapoppin'" adlı sahne şovunda yer aldı. 1941 yılında, dansçılar Frankie Manning ve Willa Mae Ricker'ın da dahil olduğu Whitey's Lindy Hoppers, bu unutulmaz sahne şovunda gösteri yaptı. 1950'li yılların sonlarında swing dansları popülaritesini kaybetti ancak Al Minns ve diğer eski swing dansçıları, yeni nesil dansçılara eski dans stillerini öğreterek swing danslarının yaşayan hatırası olarak kalmasını sağladı. Al Minns, dansçı olarak sadece sahnede değil, aynı zamanda televizyon ve sinema için de performans sergiledi. Beyaz izleyicilere yönelik filmlerde ve televizyon programlarında dans ederek, swing danslarını afro-amerikan topluluğunun yanında, çok daha geniş bir kitleye tanıttı.Son olarak, Al Minns’in kızına söylediği sözle kendisini anıyoruz; “Whatever you do, don’t be common, please strive to be extraordinary.” “Ne yaparsan yap sıradan olma, lütfen sıra dışı olmaya çalış.”
İçerik: Kübra

---

First Lady of Song- Ella Fitzgerald 1917’de ABD’de, Newport News şehrinde doğdu. On beş yaşında, annesini kaybettikten sonra çocukluğu pek de kolay geçmedi. Kötü muameleden sonra girdiği ıslah evinden kaçtı ve Harlem sokaklarında yaşamaya başladı. Geçimini sokaklarda şarkı söyleyerek sağlıyordu. On yedi yaşında (1934) Apollo Tiyatrosu Amatör Gecesi’nde sahne aldı. İnsanları vokal yeteneği ile etkileyerek katıldığı yarışmayı kazandı. Sahnede devleşen, kendine has ses tonu ve doğaçlamaları ile kusursuzca şarkı söyleyebilen ve orkestradaki her enstrümanı sesiyle taklit edebilen bir yetenekti.
Apollo Tiyatrosu’nda baterist ve grup lideri Chick Webb ile tanışmıştı. 1935 yılında Webb’in orkestrası ile “A-Tisket , A-Tasket” şarkısını söyleyerek Amerikan halkının hafızasına kazındı. O zamanlar “Dünyanın En Ünlü Balo Salonu” olarak nitelendirilen Harlem’deki Savoy Balo Salonu’nda düzenli olarak Chick Webb Orkestrası ile beraber söylemeye başladı. 1939 yılında Webb’in ölümünden sonra orkestranın başına geçti ve grubun ismi “Ella Fitzgerald and Her Famous Orchestra” oldu. Fitzgerald, Chick Webb ile yaptığı çalışmaların yanında Benny Goodman Orkestrası ile de sahne aldı ve kayıtlar yaptı. Ayrıca “Ella Fitzgerald and Her Savoy Eight” kendi yan projesiydi. 1940’larda Dizzy Gillespie ve grubuyla turneye çıktı. Şarkı söyleme stilini değiştirmeye başladı ve performansları sırasında scat (kelimelerin olmadığı, anlamsız hecelerle emprovizasyon) şarkı söylemeyi de dahil etti. Kariyeri boyunca Roy Eldridge, Dizzy Gillespie, Herb Ells, Tommy Flanagan, Oscar Peterson, Lou Levy, Paul Smith, Jimmy Rowles ve Ellis Larkins gibi isimlerle çalıştı.
İçerik: Seda

---

First Lady of Song- Part 2- Yaşamış olduğu dönemler her ne kadar swing dönemine ait olmuş gibi gözükse de sadece swing şarkıcısı olarak kalmadı. Aynı zamanda Modern cazın en büyük seslerinden biriydi, bunu 60’lı yıllardan 80’lere kadar farklı stillere olan hakimiyeti ile anlayabiliriz. Amerikan müziğinin popüler bestecilerinden Cole Porter, Irving Berlin, Jerome Kern, George Gershwin’in bestelerine yaptığı yorumlar, Amerikan müziği için oldukça etkileyiciydi. Big-band ve pre-rock dönemlerini aşarak, swing ve standartların tavizsiz karışımını sunarak 90’larda caz listelerinin zirvesinde yer almaya devam etti.
Ella 1958’deki ilk Grammy Ödülleri’nde “Ella Fitzgerald Sings the Irving Berlin Song Book” ve “Ella Fitzgerald Sings the Duke Ellington Song Book” albümleri ile ilk iki Grammy’sini aldı, ödülü alan ilk Afrikalı-Amerikalı kadın olarak tarihe geçti. 1960 tarihli orijinal sözlerini unutması ve doğaçlama yapmasıyla bilinen “Ella in Berlin: Mack the Knife” adlı canlı albümü 1 milyondan fazla satmasıyla 1999 yılında Grammy Onur Listesi’ne girdi. Fitzgerald hayatı boyunca 200’den fazla albüm ve 2000 şarkı kaydetti. 40 milyonu aşkın satış yaptı ve 14 tane Grammy Ödülü’nün sahibi oldu. 1980’lere geldiğimizde Ella’nın ciddi sağlık sorunları vardı. 1986’da kalp ameliyatı geçirdi ve diyabet hastası olarak iki bacağını da kaybetmesine sebep oldu. Son performansını 1991’de New York’taki Carnegie Hall’da gerçekleştirdi. 15 Haziran 1996 yılında hayata veda etti. “O gittiğinden beri bu topraklarda bir meltem esiyor.” diyor vokalist Jon Hendricks.​ İçerik: Seda

---

Hadi dansıyla ve giyim tarzıyla akıllara kazınan lindy hop öncülerinden biriyle tanışalım!
1935’te Leon James’le birlikte ilk Harvest Moon Ball’u kazandı. Rol aldığı filmlerin ilki Marx Brothers’ın A Day at the Races filmidir. 1941’de Whitey’s Lindy Hoppers ile birlikte, Olsen ve Johnson’ın unutulmaz Hellzapoppin’ adlı müzikal komedisindeki ünlü Lindy Hop sekansında rol aldı. Fiziksel gücü ve aerial konusundaki yeteneği ile bilinir. Frankie Manning’e göre Willa Mae, bu yeteneği ile her dans partnerinin parlamasını sağlamıştır. Dans partnerleri Frankie Manning, Snookie Beasley, Leon James ve Al Minns gibi lindy hop’un öncü isimleridir. İkinci Dünya Savaşı sırasında, Whitey’nin Lindy Hopper’larının pek çoğu silahlı kuvvetlerde görev yaparken, Willa Mae, Whitey’nin en büyük grubu olarak kabul edilen Harlem Congeroos’u yönetti. Swing dönemi kıyafetlerine ba-yı-lı-yoruz. Willa Mae, dansının yanı sıra ışıltılı kemerleri, dikkat çekici etekleri ile lindy hopun sevdiğimiz stilini yaratanlardan biri oldu. Ellili yılların sonlarında Congaroos’un dağılmasının ardından kariyerine manken olarak devam etti. Her zaman modaya uygun giyinirdi ve bu konusundaki bilgisiyle moda alanında başarılı bir ikinci kariyer yapmayı başardı. İçerik: Ayşegül


## TODOS

* In big phones about section responsiveness bad
* Add date to blogs, and search what could have added, in terms of seo or other ux related
* Add more metadata to blogs
* Add blogs weekly
* In small screens, there is a gap in blogs white, something is overflowing
* Solve SEO problems
* Move from vercel analytics to google analytics
* Add a wrapper for blog to show publish date and person who wrote it and main title and any other that could be componentized
