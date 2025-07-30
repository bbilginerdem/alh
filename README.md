## ALH Website

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

before committing changes don't forget to do and resolve issue:

```bash
pnpm run lint
# and then
npm run lint
```

## Color Schemas

orange-300 text some
zinc-950 background most

## Prompt to make blog posts from AI

"use client";

import Image from "next/image";

export default function FrankieManning() {
	return (
		<article className="mx-auto max-w-4xl px-4 py-8 text-zinc-100">
			<header className="mb-8 text-center">
				<h1 className="mb-4 font-bold text-4xl">
					Frankie Manning: Lindy Hop'un Efsanevi Öncüsü
				</h1>
				<div className="mx-auto h-1 w-24 bg-orange-300" />
			</header>

			<div className="prose prose-invert max-w-none">
				<section className="mb-8">
					<p className="mb-6 text-lg">
						Dans tarihinin en etkileyici figürlerinden biri olan{" "}
						<span className="font-semibold text-orange-300">
							Frankie Manning
						</span>
						, sadece bir dansçı değil, aynı zamanda bir devrimciydi. Lindy Hop'u
						yeni zirvelere taşıyan, aerial (havada) figürleriyle dans dünyasını
						sarsan ve bu dans türünü küresel bir fenomen haline getiren isimdi.
					</p>

					<div className="mb-8 flex flex-col gap-6 md:flex-row">
						<div className="md:w-1/2">
							<Image
								src="/images/posts/1.jpg"
								alt="Frankie Manning Lindy Hop yaparken"
								width={600}
								height={400}
								className="rounded-lg shadow-lg"
							/>
							<p className="mt-2 text-xs text-zinc-400">
								Fotograf Ralph Gabriner tarafından
							</p>
						</div>
						<div className="md:w-1/2">
							<h2 className="mb-4 font-semibold text-2xl text-orange-300">
								Frankie Manning: Dansın Öncü Ruhu
							</h2>
							<p className="mb-4">
								Frankie Manning, 1914'te doğdu ve Harlem'in büyüleyici caz
								sahnesinde yetişti.{" "}
								<span className="font-semibold">Savoy Ballroom</span>, onun ve
								diğer efsanevi dansçıların yeni adımlar keşfettiği, sınırları
								zorladığı bir laboratuvardı.
							</p>

							<p className="mb-4">
								Frankie, sadece dans etmekle kalmadı, Lindy Hop'a kattığı{" "}
								<span className="font-semibold">aerials</span> (havada yapılan
								akrobatik hareketler) ile dansın fiziksel sınırlarını
								genişletti. Bu hareketler o kadar etkileyiciydi ki, Savoy'da
								performans sergilediği gecelerde dans pisti tıklım tıklım
								dolardı.
							</p>

							<p className="mb-4">
								1940'larda{" "}
								<span className="font-semibold">Whitey's Lindy Hoppers</span>{" "}
								grubuyla dünya turuna çıktı ve Lindy Hop'u küresel bir fenomen
								haline getirdi. Hollywood filmlerinde koreograf olarak çalıştığı
								sahneler, bugün hala swing dansçıları için altın standart kabul
								edilir.
							</p>

							<p className="mb-4">
								Dans kariyerinin zirvesindeyken İkinci Dünya Savaşı'nın patlak
								vermesi ve swing müziğinin popülaritesini yitirmesiyle Frankie,
								30 yıllık bir sessizliğe gömüldü. Ancak 1980'lerde{" "}
								<span className="font-semibold">Lindy Hop Rönesansı</span>{" "}
								başladığında, efsanevi dansçı yeniden sahnelere döndü.
							</p>

							<p>
								Ömrünün son yıllarını dünyayı dolaşarak workshop'lar vererek ve
								yeni nesillere Lindy Hop'u öğreterek geçiren Frankie Manning,
								2009'da aramızdan ayrıldı. Ancak bıraktığı miras, her{" "}
								<span className="font-semibold">swing</span> festivalinde, her{" "}
								<span className="font-semibold">aerial</span> hareketinde ve her
								Lindy Hop yapan dansçının adımlarında yaşamaya devam ediyor.
							</p>
						</div>
					</div>
				</section>

				<section className="mb-8 rounded-lg bg-white/10 p-6 backdrop-blur-sm">
					<h2 className="mb-4 font-semibold text-2xl text-orange-300">
						Hollywood'dan Dünyaya: Frankie'nin Mirası
					</h2>
					<p className="mb-4">
						Frankie Manning'in yeteneği sadece dans pistiyle sınırlı kalmadı.
						1940'larda Hollywood filmlerinde koreograf olarak çalıştı ve Lindy
						Hop'u beyaz perdeye taşıdı.{" "}
						<span className="font-semibold">"Hellzapoppin'"</span> gibi
						filmlerdeki dans sahneleri, bugün hala swing dansçıları için bir
						ilham kaynağı.
					</p>
					<p>
						Ancak, swing dansının popülaritesi 1950'lerde azalmaya başladığında
						Frankie Manning de bir süre unutuldu. Ta ki 1980'lerde{" "}
						<span className="font-semibold">Lindy Hop'un yeniden doğuşuna</span>{" "}
						kadar!
					</p>
				</section>

				<section className="mb-8">
					<h2 className="mb-4 font-semibold text-2xl text-orange-300">
						Lindy Hop Elçisi ve Dansın Felsefesi
					</h2>
					<p className="mb-4">
						Frankie Manning, sadece bir dansçı değil, aynı zamanda bir{" "}
						<span className="font-semibold">kültür elçisiydi</span>. Ona göre
						Lindy Hop, sadece bir dans değil, bir yaşam tarzıydı. Eğlence,
						özgürlük ve yaratıcılıkla doluydu.
					</p>
					<blockquote className="my-6 border-orange-300 border-l-4 pl-4 italic">
						"Dans etmek, müziğin içinde uçmaktır." <br />
						<span className="text-orange-300">– Frankie Manning</span>
					</blockquote>
				</section>

				<section className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
					<h3 className="mb-4 font-semibold text-orange-300 text-xl">
						Son Söz: Frankie'nin Dansı Asla Bitmez!
					</h3>
					<p className="mb-4">
						Frankie Manning, 2009'da aramızdan ayrıldı, ancak bıraktığı miras
						hiç bitmeyecek. Eğer bir gün bir swing dansı etkinliğine katılır ve
						partnerinizi havaya kaldırıp döndürürken kendinizi özgür
						hissederseniz, bilin ki bu Frankie'nin size armağanıdır.
					</p>
					<div className="mt-6">
						<p className="mb-2 font-semibold">
							Siz hiç Lindy Hop denediniz mi?
						</p>
						<p>Frankie Manning'in hikayesi sizi nasıl etkiledi?</p>
					</div>
				</section>
			</div>
		</article>
	);
}

similar to above styling write me tsx component about following text in turkish add a picture where it fits as well do text sizes good for all devices , use tailwind, it is in nextjs, make text colors to orange 300 and zinc 100, add metadata for this specific blog at the top


