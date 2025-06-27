"use client";

import Image from "next/image";

export function FrankieManningArticle() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8 text-zinc-100">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Frankie Manning: Lindy Hop'un Efsanevi Öncüsü
        </h1>
        <div className="w-24 h-1 bg-orange-300 mx-auto"></div>
      </header>

      <div className="prose prose-invert max-w-none">
        <section className="mb-8">
          <p className="text-lg mb-6">
            Dans tarihinin en etkileyici figürlerinden biri olan{" "}
            <span className="text-orange-300 font-semibold">Frankie Manning</span>, sadece bir dansçı değil, aynı zamanda bir devrimciydi. Lindy Hop'u yeni zirvelere taşıyan, aerial (havada) figürleriyle dans dünyasını sarsan ve bu dans türünü küresel bir fenomen haline getiren isimdi.
          </p>

          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="md:w-1/2">
              <Image
                src="/frankie-manning.jpg" // Replace with actual image path
                alt="Frankie Manning Lindy Hop yaparken"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold mb-4 text-orange-300">
                Frankie Manning: Dansın Öncü Ruhu
              </h2>
              <p className="mb-4">
                Frankie Manning, 1914'te doğdu ve Harlem'in büyüleyici caz sahnesinde yetişti.{" "}
                <span className="font-semibold">Savoy Ballroom</span>, onun ve diğer efsanevi dansçıların yeni adımlar keşfettiği, sınırları zorladığı bir laboratuvardı.
              </p>
              <p>
                Frankie, sadece dans etmekle kalmadı, Lindy Hop'a kattığı{" "}
                <span className="font-semibold">aerials</span> (havada yapılan akrobatik hareketler) ile dansın fiziksel sınırlarını genişletti.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8 bg-white/10 p-6 rounded-lg backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-4 text-orange-300">
            Hollywood'dan Dünyaya: Frankie'nin Mirası
          </h2>
          <p className="mb-4">
            Frankie Manning'in yeteneği sadece dans pistiyle sınırlı kalmadı. 1940'larda Hollywood filmlerinde koreograf olarak çalıştı ve Lindy Hop'u beyaz perdeye taşıdı.{" "}
            <span className="font-semibold">"Hellzapoppin'"</span> gibi filmlerdeki dans sahneleri, bugün hala swing dansçıları için bir ilham kaynağı.
          </p>
          <p>
            Ancak, swing dansının popülaritesi 1950'lerde azalmaya başladığında Frankie Manning de bir süre unutuldu. Ta ki 1980'lerde{" "}
            <span className="font-semibold">Lindy Hop'un yeniden doğuşuna</span> kadar!
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-orange-300">
            Lindy Hop Elçisi ve Dansın Felsefesi
          </h2>
          <p className="mb-4">
            Frankie Manning, sadece bir dansçı değil, aynı zamanda bir{" "}
            <span className="font-semibold">kültür elçisiydi</span>. Ona göre Lindy Hop, sadece bir dans değil, bir yaşam tarzıydı. Eğlence, özgürlük ve yaratıcılıkla doluydu.
          </p>
          <blockquote className="border-l-4 border-orange-300 pl-4 italic my-6">
            "Dans etmek, müziğin içinde uçmaktır." <br />
            <span className="text-orange-300">– Frankie Manning</span>
          </blockquote>
        </section>

        <section className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-4 text-orange-300">
            Son Söz: Frankie'nin Dansı Asla Bitmez!
          </h3>
          <p className="mb-4">
            Frankie Manning, 2009'da aramızdan ayrıldı, ancak bıraktığı miras hiç bitmeyecek. Eğer bir gün bir swing dansı etkinliğine katılır ve partnerinizi havaya kaldırıp döndürürken kendinizi özgür hissederseniz, bilin ki bu Frankie'nin size armağanıdır.
          </p>
          <div className="mt-6">
            <p className="font-semibold mb-2">Siz hiç Lindy Hop denediniz mi?</p>
            <p>Frankie Manning'in hikayesi sizi nasıl etkiledi?</p>
          </div>
        </section>
      </div>
    </article>
  );
}
