"use client";

import Image from "next/image";

export default function LindyHopHistory() {
	return (
		<article className="mx-auto max-w-4xl px-4 py-8 text-zinc-100">
			<header className="mb-8 text-center">
				<h1 className="mb-4 font-bold text-4xl">
					Lindy Hop: Swing'in Efsanevi Dansının Tarihi
				</h1>
				<div className="mx-auto h-1 w-24 bg-orange-300" />
			</header>

			<div className="prose prose-invert max-w-none">
				<section className="mb-8">
					<div className="mb-6 flex flex-col gap-6 md:flex-row">
						<div className="md:w-1/2">
							<Image
								src="/images/posts/3.jpg"
								alt="Lindy Hop dansçıları Savoy Ballroom'da"
								width={600}
								height={400}
								className="mt-3 rounded-lg shadow-lg"
							/>
							<p className="mt-4 text-xs text-zinc-400">
								Savoy Ballroom'da Lindy Hop dansçıları (1930'lar)
							</p>
						</div>
						<div className="md:w-1/2">
							<h2 className="mb-4 font-semibold text-2xl text-orange-300">
								Dünya'da Lindy Hop'un Doğuşu
							</h2>
							<p className="mb-4">
								<span className="font-semibold text-orange-300">Lindy Hop</span>
								, 1920'lerin sonunda Harlem, New York'ta doğan ve swing
								müziğiyle bütünleşen bir sokak dansıdır. Kökleri Charleston, Tap
								ve Afro-Amerikan dans geleneklerine dayanan Lindy Hop,
								özgürlüğün, yaratıcılığın ve sosyal etkileşimin dansı olarak
								bilinir.
							</p>
							<p className="mb-4">
								Lindy Hop, ismini 1927'de Charles Lindbergh'in ("Lucky Lindy")
								Atlantik Okyanusu'nu tek başına uçarak geçmesinden sonra
								gazetelerde çıkan "Lindy Hops the Atlantic" başlığından
								almıştır.
							</p>
							<p className="mb-4">
								Özgürlüğün, yaratıcılığın ve sosyal etkileşimin dansı olarak
								bilinen Lindy Hop, temelde 8 veya 6 zamanlı bir dans olup,
								"swing-out" adı verilen açık pozisyon ve "closed position"
								olarak adlandırılan kapalı pozisyon temel hareketlerinden
								oluşur. Ancak gerçek güzelliği, dansçıların bu temeller üzerine
								kendi yorumlarını ve doğaçlamalarını ekleyebilmesinde yatar.
							</p>
						</div>
					</div>
				</section>

				<section className="mb-8 rounded-lg bg-white/10 p-6 backdrop-blur-sm">
					<h2 className="mb-4 font-semibold text-2xl text-orange-300">
						Altın Çağ: 1930'lar ve 1940'lar
					</h2>
					<p className="mb-4">
						1930'lar ve 1940'lar, Lindy Hop'un altın çağıydı.{" "}
						<span className="font-semibold">Savoy Ballroom</span> gibi mekanlar,
						dansçılar için bir buluşma noktası haline geldi. Efsanevi dansçılar{" "}
						<span className="font-semibold">Frankie Manning</span>,{" "}
						<span className="font-semibold">Norma Miller</span> ve{" "}
						<span className="font-semibold">Whitey's Lindy Hoppers</span>, bu
						dansı dünyaya tanıttı.
					</p>
					<p>
						Ancak 1950'lerde rock'n'roll'un yükselişi ve sosyal değişimlerle
						birlikte Lindy Hop popülaritesini kaybetti.
					</p>
				</section>

				<section className="mb-8">
					<h2 className="mb-4 font-semibold text-2xl text-orange-300">
						Swing Revival: 1980'lerde Yeniden Doğuş
					</h2>
					<p className="mb-6">
						1980'lerde ise{" "}
						<span className="font-semibold">"Swing Revival"</span>
						(Swing Canlanışı) hareketiyle yeniden doğdu. Frankie Manning gibi
						efsanelerin rehberliğinde, yeni nesil dansçılar Lindy Hop'u yeniden
						keşfetti.
					</p>

					<div className="flex flex-col gap-6 md:flex-row">
						<div className="md:w-1/2">
							<p className="mb-4">
								Bugün dünyanın dört bir yanında{" "}
								<span className="font-semibold">Herräng Dance Camp</span>{" "}
								(İsveç), <span className="font-semibold">ILHC</span>{" "}
								(Uluslararası Lindy Hop Şampiyonası) gibi etkinliklerle
								dansçılar bir araya geliyor.
							</p>
						</div>
					</div>
				</section>

				<section className="mb-8 rounded-lg bg-white/10 p-6 backdrop-blur-sm">
					<h2 className="mb-4 font-semibold text-2xl text-orange-300">
						Türkiye'de Lindy Hop
					</h2>
					<p className="mb-4">
						Türkiye'de Lindy Hop, 2000'lerin sonunda yavaş yavaş tanınmaya
						başladı. İstanbul başta olmak üzere, swing müziğine ve vintage
						kültürüne ilgi duyan dansçılar sayesinde büyüdü.
					</p>
					<p>
						<span className="font-semibold">İstanbul Swing</span>,{" "}
						<span className="font-semibold">Ankara Lindy Hop</span> gibi
						topluluklar, düzenli workshop'lar ve sosyal dans geceleri
						düzenleyerek bu kültürü yaymaya başladı.
					</p>
				</section>

				<section className="mb-8">
					<h2 className="mb-4 font-semibold text-2xl text-orange-300">
						Neden Lindy Hop?
					</h2>
					<ul className="list-disc space-y-2 pl-6">
						<li className="mb-2">
							<span className="font-semibold">Eğlenceli ve enerjik:</span> Swing
							müziğiyle coşmayı sevenler için birebir.
						</li>
						<li className="mb-2">
							<span className="font-semibold">Sosyal bir dans:</span> Yeni
							insanlarla tanışmak ve birlikte keyifli vakit geçirmek için harika
							bir fırsat.
						</li>
						<li>
							<span className="font-semibold">Yaratıcılık:</span> Temel adımları
							öğrendikten sonra kendi stilini yaratmak mümkün.
						</li>
					</ul>
				</section>

				<section className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
					<h3 className="mb-4 font-semibold text-orange-300 text-xl">
						Lindy Hop'un Günümüzdeki Yeri
					</h3>
					<p className="mb-4">
						Son yıllarda{" "}
						<span className="font-semibold">Swing İstanbul Festivali</span>
						gibi etkinlikler, uluslararası eğitmenleri ve dansçıları bir araya
						getiriyor. Türkiye'deki Lindy Hop topluluğu, her geçen gün daha da
						büyüyor ve renkleniyor.
					</p>
					<div className="mt-6">
						<p className="mb-2 font-semibold">
							Siz hiç Lindy Hop denediniz mi?
						</p>
						<p>Bu efsanevi dans hakkında ne düşünüyorsunuz?</p>
					</div>
				</section>
			</div>
		</article>
	);
}
