"use client";

import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Big Joe Turner: Blues’un Kükreyen Sesi ve Rock’n Roll’un Babası",
	description:
		"Big Joe Turner’ın Kansas City barlarından Carnegie Hall’a, 'Shake, Rattle and Roll' ile Rock’n Roll tarihine damga vurana kadar olan hayat hikayesi.",
	keywords: [
		"Big Joe Turner",
		"Blues Shouter",
		"Shake Rattle and Roll",
		"Rock and Roll Hall of Fame",
		"Pete Johnson",
		"Boogie-Woogie",
		"Kansas City Blues",
		"Atlantic Records",
		"Jump Blues",
		"Blues tarihi",
		"Rock'n Roll kökleri",
		"Count Basie",
		"Ankara Lindy Hop",
	],
	openGraph: {
		title: "Big Joe Turner: Blues’un Kükreyen Sesi ve Rock’n Roll’un Babası",
		description:
			"Big Joe Turner’ın Kansas City barlarından Carnegie Hall’a, 'Shake, Rattle and Roll' ile Rock’n Roll tarihine damga vurana kadar olan hayat hikayesi.",
		url: "https://ankaralindyhop.org/blog/big-joe-turner",
		siteName: "Ankara Lindy Hop",
		locale: "tr_TR",
		type: "article",
	},
};

export default function BigJoeTurner() {
	return (
		<div>
			<section className="mb-8">
				<p className="mb-8 text-base md:text-lg">
					Gerçek adı{" "}
					<span className="font-semibold text-orange-300">Joseph Vernon</span>{" "}
					olan Big Joe Turner, 18 Mayıs 1911'de Kansas City'de doğdu ve henüz
					çok gençken babasını bir tren kazasında kaybeden Turner, 14 yaşında
					Kansas'ın gece hayatında barlarda çalışmaya başladı.
				</p>

				<div className="mb-8 flex flex-col gap-6 md:flex-row">
					<div className="md:w-1/2">
						<div className="relative h-64 w-full overflow-hidden rounded-lg bg-zinc-800 shadow-lg">
							<div className="absolute inset-0 flex items-center justify-center">
								<Image
									width={600}
									height={400}
									src="/images/blogs/9.jpg"
									alt="Big Joe Turner sahnede"
									className="h-full w-full object-cover"
								/>
							</div>
						</div>
						<p className="mt-2 text-center text-xs text-zinc-400">
							Turner sahnedeyken, 1973
						</p>
					</div>
					<div className="md:w-1/2">
						<p className="mb-4 text-base md:text-lg">
							Turner, Kansas gecelerinde barmenlik yaparken, güçlü sesiyle,
							barın arkasından söylediği şarkılarla müşterileri kendine hayran
							bırakmış ve Boogie-Woogie’nin ünlü piyanisti{" "}
							<span className="font-semibold text-orange-300">
								Pete Johnson
							</span>
							'la Kansas barlarında tanışmıştır. O kadar güçlü bir sesti ki, o
							dönemlerde mikrofonlar bile Turner'ın sesine yetişemiyor, sesiyle
							orkestranın önüne geçiyor ve bu yüzden Blues Shouter olarak
							anılıyordu.
						</p>
					</div>
				</div>
			</section>

			<section className="mb-8 rounded-lg bg-white/10 p-6 backdrop-blur-sm">
				<h2 className="mb-4 font-semibold text-orange-300 text-xl md:text-2xl">
					Carnegie Hall (1938)
				</h2>
				<p className="mb-4 text-base md:text-lg">
					Turner'ın hayatının ve kariyerinin dönüm noktası olan ünlü yapımcı
					<span className="font-semibold text-orange-300"> John Hammond</span>{" "}
					tarafından keşfedilmesiyle gerçekleşti. Hammond, Johnson ve Turner'ı
					New York'taki{" "}
					<span className="font-semibold text-orange-300">
						From Spirituals to Swing
					</span>{" "}
					konserine davet etti ve bu konser sayesinde Boogie-Woogie akımının
					Amerika'da patlamasını sağladı. Turner'ın Roll’Em Pete şarkısı,
					1938'de Rock'n Roll'un temellerini atan ilk kayıtlardan biri olarak
					kabul edilir. 1940'larda ise Count Basie ve Art Tatum gibi Jazz'ın
					ünlü isimleriyle de sahne aldı.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="mb-4 font-semibold text-orange-300 text-xl md:text-2xl">
					Rock'n Roll'a geçiş ve Zirve Yılları (1950)
				</h2>
				<p className="mb-4 text-base md:text-lg">
					Jazz, Blues ve Jump Blues'un hem cüssesi hem de dev sesi olan Turner,
					1950’lerde müzik kültürü değişirken, 1951'de Atlantic Records ile
					anlaştı.
				</p>
				<p className="mb-4 text-base md:text-lg">
					1954'te ise çıkardığı Shake,Rattle and Roll ile yalnızca R&B değil,
					pop listelerini de salladı ve o yıllarda Amerika'nın en çok dinlenen
					şarkıları arasında yerini aldı. Bu şarkı daha sonra Bill Haley ve
					Elvis Presley tarafından yorumlansa da asi ruhu ve tarzıyla Turner'ın
					orijinal kaydının tadı başkaydı. Yine bu dönemlerde Turner,{" "}
					<span className="font-semibold text-orange-300">
						“Honey Hush”, “Flip Flop and Fly” ve “Corrine Corrina”
					</span>{" "}
					gibi dans etmeyi sevdiğimiz hit parçalara da imza attı.
				</p>
			</section>

			<section className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
				<h3 className="mb-4 font-semibold text-lg text-orange-300 md:text-xl">
					Son Dönemleri
				</h3>
				<p className="mb-4 text-base md:text-lg">
					1960'lar ve 1970'lerde tekrar köklerine inen Turner, yeniden Jazz ve
					Blues'a dönüş yaparak, ömrünün sonuna kadar sahnelerden ayrılmadı.
					Bastonla veya oturarak bile şarkı söylemeye devam eden Turner, o güçlü
					ve kükreyen sesinden hiçbir şey kaybetmedi. Kalp yetmezliğinden
					dolayı, 24 Kasım 1985'te Kaliforniya'da hayatını kaybetti.
				</p>
			</section>

			<section className="my-8">
				<p className="text-base md:text-lg">
					Öldükten sonra 1987'de Rock and Roll Hall of Fame ödülü kazanan Big
					Joe Turner, Jazz, Blues ve Rock'n Roll’un yapı taşlarını oluşturan en
					büyük isimlerden biridir.
				</p>
				<p className="text-base md:text-lg">
					Biz de Ankara Lindy Hop olarak Big Joe Turner'a bizlere miras
					bıraktığı bu güzel şarkılarla dans etmeye devam ediyor ve en sevdiğim
					parçası Shake, Rattle and Roll için çok teşekkür ediyoruz.
				</p>
			</section>
		</div>
	);
}
