"use client";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	// ... (Metadata kısımları aynı kalacak)
	title: "Sammy Davis Jr.: Sınırları Aşan Çok Yönlü Bir İkon",
	description:
		"Sammy Davis Jr.'ın Harlem'den Rat Pack'e uzanan hayatı, ırkçılıkla mücadelesi, geçirdiği kaza sonrası dönüşümü, cesur evliliği ve 'The Entertainer' olarak bıraktığı miras hakkında detaylı bilgiler.",
	keywords: [
		"Sammy Davis Jr.",
		"Rat Pack",
		"Frank Sinatra",
		"Will Mastin Trio",
		"Candy Man",
		"Mr. Bojangles",
		"Golden Boy",
		"Irkçılıkla mücadele",
		"Caz tarihi",
		"Eğlence dünyası efsaneleri",
	],
	openGraph: {
		title: "Sammy Davis Jr.: Sınırları Aşan Çok Yönlü Bir İkon",
		description:
			"Sammy Davis Jr.'ın Harlem'den Rat Pack'e uzanan hayatı, ırkçılıkla mücadelesi ve 'The Entertainer' olarak bıraktığı miras hakkında detaylı bir bakış.",
		url: "https://ankaralindyhop.org/blog/sammy-davis-jr",
		siteName: "Ankara Lindy Hop",
		locale: "tr_TR",
		type: "article",
	},
};

export default function SammyDavisJr() {
	return (
		<div>
			<section className="mb-8">
				<p className="mb-8 text-base md:text-lg">
					Sammy Davis Jr.'ın hikayesi, sadece bir şovmenin değil, yeteneğini
					ırkçılık ve önyargı duvarlarını yıkmak için kullanan{" "}
					<span className="font-semibold text-orange-300">
						çok yönlü bir devin
					</span>{" "}
					hikayesidir. Harlem'in kalbinden dünya sahnelerine uzanan bu yolculuk,
					cesaret ve saf yetenekle döşenmiştir.
				</p>

				<div className="mb-8 flex flex-col gap-6 md:flex-row">
					<div className="md:w-1/2">
						<div className="relative h-64 w-full overflow-hidden rounded-lg bg-zinc-800 shadow-lg">
							<div className="absolute inset-0 flex items-center justify-center">
								<Image
									width={600}
									height={400}
									src="/images/blogs/11-1.webp"
									alt="Genç Sammy Davis Jr. sahnede"
									className="h-full w-full object-cover object-top"
								/>
							</div>
						</div>
						<p className="mt-2 text-center text-xs text-zinc-400">
							Henüz çocuk yaşta sahne tozunu yutmaya başlayan Sammy, doğuştan
							bir gösteri insanıydı.
						</p>
					</div>
					<div className="md:w-1/2">
						<p className="mb-4 text-base md:text-lg">
							8 Aralık 1925'te dünyaya gelen Sammy, sanatçı bir ailenin
							çocuğuydu. Puerto Rico asıllı koro kızı bir anne ve Afro-Amerikalı
							dansçı bir babanın evladı olarak, henüz dört yaşındayken babasıyla
							birlikte <span className="font-semibold">Will Mastin Trio</span>{" "}
							grubuna katılarak sahne hayatına adım attı.
						</p>
						<p className="text-base md:text-lg">
							Bu erken dönem, onun sadece şarkı söyleyen değil, dans eden,
							enstrüman çalan ve taklit yapan, kısacası{" "}
							<span className="font-semibold">"her şeyi yapabilen"</span> bir
							gösteri devine dönüşmesinin temellerini attı.
						</p>
					</div>
				</div>
			</section>

			<section className="mb-8 rounded-lg bg-white/10 p-6 backdrop-blur-sm">
				<h2 className="mb-4 font-semibold text-orange-300 text-xl md:text-2xl">
					Yetenek: Bir Savunma Mekanizması ve Kırılma Noktası
				</h2>
				<p className="mb-4 text-base md:text-lg">
					Hayatındaki en büyük kırılma noktalarından biri II. Dünya Savaşı
					sırasında orduda görev almasıydı. Burada karşılaştığı yoğun ırkçı
					önyargılarla başa çıkabilmek için yeteneğini bir "silaha"
					dönüştürdüğünü fark etti. Yeteneği, insanların düşüncelerini
					etkileyebileceği tek yol haline gelmişti.
				</p>
				<p className="text-base md:text-lg">
					Savaş sonrası kariyere hızla dönse de,{" "}
					<span className="font-semibold">
						1954 yılında geçirdiği trajik otomobil kazası
					</span>{" "}
					sol gözünü kaybetmesine neden oldu. Bu sadece fiziksel bir kayıp
					değil, bir kimlik dönüşümüydü. Hastanede gözlerini açtığında aldığı
					radikal bir kararla Museviliğe geçti.
				</p>
				{/* Alıntı için özel stil */}
				<blockquote className="mt-4 border-orange-300 border-l-4 pl-4 text-zinc-300 italic">
					"Hey zenci, hemen arka sıraya geç!" diyen Alabamalı bir otobüs
					şoförüne verdiği yanıt efsanevidir: "Ama ben aynı zamanda bir
					Yahudiyim." Şoförün yanıtı dönemin ruhunu özetler: "O zaman defol
					otobüsten!"
				</blockquote>
			</section>

			<section className="mb-8">
				<div className="relative mb-6 w-full rounded-lg bg-zinc-800 shadow-lg">
					<Image
						width={960}
						height={1033}
						src="/images/blogs/11-2.webp"
						alt="Sammy Davis Jr., Frank Sinatra ve Dean Martin ile Rat Pack döneminde"
						className="h-auto w-full rounded-lg"
					/>
					<div className="absolute right-0 bottom-0 left-0 rounded-b-lg bg-black/50 p-2 text-center text-xs text-zinc-300">
						Frank Sinatra ile başlayan dostluğu, onu efsanevi Rat Pack grubunun
						vazgeçilmez bir parçası yaptı.
					</div>
				</div>

				<h2 className="mb-4 font-semibold text-orange-300 text-xl md:text-2xl">
					Rat Pack ve Toplumsal Cesaret
				</h2>
				<p className="mb-4 text-base md:text-lg">
					1950'ler ve 60'lar, Sammy’nin{" "}
					<span className="font-semibold">Frank Sinatra</span> ile başlayan ömür
					boyu sürecek dostluğuyla Rat Pack grubunun ayrılmaz bir parçası olduğu
					dönemdi. Bu grup, o yıllarda ABD'de ırk ayrımcılığına karşı sahnede
					sessiz ama etkili bir duruş sergiledi.
				</p>
				<p className="text-base md:text-lg">
					Ancak Sammy’nin asıl "devrimi" özel hayatındaydı. 1960 yılında İsveçli
					aktris <span className="font-semibold">May Britt</span> ile evlendi. O
					tarihte ırklar arası evlilik, ABD'nin 50 eyaletinden 31'inde hala
					yasaktı. Bu cesur adım yüzünden ağır eleştiriler ve ölüm tehditleri
					almasına rağmen geri adım atmadı.
				</p>
			</section>

			<section className="mb-8 rounded-lg bg-white/10 p-6 backdrop-blur-sm">
				<div className="mb-6 flex flex-col items-center gap-6 md:flex-row-reverse">
					<div className="w-full md:w-1/3">
						<div className="relative h-48 w-full overflow-hidden rounded-lg bg-zinc-800 shadow-lg">
							<Image
								width={400}
								height={300}
								src="/images/blogs/11-3.webp"
								alt="Sammy Davis Jr. sahnede enerji dolu bir anında"
								className="h-full w-full object-cover"
							/>
						</div>
					</div>
					<div className="md:w-2/3">
						<h3 className="mb-4 font-semibold text-lg text-orange-300 md:text-xl">
							Final Perdesi ve Miras
						</h3>
						<p className="mb-4 text-base md:text-lg">
							Kariyeri boyunca "Candy Man" gibi hit şarkılara imza attı,
							Broadway'de "Golden Boy" gibi dev prodüksiyonlarda başrol oynadı.
							Hayatını alkol ve uyuşturucu bağımlılığı gibi zorluklarla da
							mücadele ederek geçirdi ancak her zaman sahnelerin en profesyoneli
							olarak kaldı.
						</p>
					</div>
				</div>
				<p className="border-white/10 border-t pt-4 text-base md:text-lg">
					1990 yılında gırtlak kanserinden vefat ettiğinde, mezar taşına onu en
					iyi anlatan o cümle kazındı:{" "}
					<span className="font-semibold text-orange-300">
						"The Entertainer – He Did It All"
					</span>{" "}
					(Eğlence İnsanı – Her Şeyi Yaptı).
				</p>
			</section>

			{/* KAYNAKLAR BÖLÜMÜ */}
			<section className="mt-8">
				<h3 className="font-semibold text-lg text-orange-300">Kaynaklar</h3>
				<ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-300">
					<li>
						<Link
							href="https://en.wikipedia.org/wiki/Sammy_Davis_Jr."
							target="_blank"
							rel="noopener noreferrer"
							className="text-orange-300 hover:underline"
						>
							Wikipedia - Sammy Davis Jr.
						</Link>
					</li>
					<li>
						<Link
							href="https://www.biography.com/musicians/sammy-davis-jr"
							target="_blank"
							rel="noopener noreferrer"
							className="text-orange-300 hover:underline"
						>
							Biography.com - Sammy Davis Jr. Story
						</Link>
					</li>
					<li>
						<Link
							href="https://ratpack.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-orange-300 hover:underline"
						>
							The Rat Pack Official Site
						</Link>
					</li>
				</ul>
			</section>
		</div>
	);
}
