"use client";

import type { Metadata } from "next";
import Link from 'next/link';

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
              <Link
                href="https://www.youtube.com/watch?v=Dv_9B7W7Q0w"
                target="_blank" rel="noopener noreferrer"
                className="text-orange-300 hover:underline"
              >
                Louis Armstrong and Earl Hines - Weather Bird - YouTube
              </Link>
            </li>
            <li>
              <Link
                href="https://www.discogs.com/master/1244626-Earl-Hines-And-His-Orchestra-1928-1932"
                target="_blank" rel="noopener noreferrer"
                className="text-orange-300 hover:underline"
              >
                Earl Hines And His Orchestra – 1928-1932 (1990, CD) - Discogs
              </Link>
              , 04.07.2024, 18.40.
            </li>
          </ul>

          <div className="mt-8">
            <p className="mb-2 font-semibold text-orange-300">İçerik: Ayça</p>
          </div>
        </section>
      </div>
    </article>
  );
}
