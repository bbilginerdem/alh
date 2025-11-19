"use client";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Count Basie: Swing Kralı ve Caza Damga Vuran Müzikal Dev",
	description:
		"Count Basie'nin müzik kariyeri, orkestrasının özgün tarzı, swing'in gelişimindeki rolü ve efsane müzisyenlerle iş birlikleri hakkında detaylı bilgiler.",
	keywords: [
		"Count Basie",
		"swing müzik",
		"Big Band",
		"caz efsanesi",
		"Billie Holiday",
		"Ella Fitzgerald",
		"Frank Sinatra",
		"Jumpin at the Woodside",
		"One O'Clock Jump",
		"Jazz tarihi",
		"Caz tarihi",
		"1930'lar caz",
		"stride piano",
		"comping",
		"swing dansı",
		"lindy hop müzik",
	],
	openGraph: {
		title: "Count Basie: Swing Kralı ve Caza Damga Vuran Müzikal Dev",
		description:
			"Count Basie'nin müzik kariyeri, orkestrasının özgün tarzı, swing'in gelişimindeki rolü ve efsane müzisyenlerle iş birlikleri hakkında detaylı bilgiler.",
		url: "https://ankaralindyhop.org/blog/count-basie",
		siteName: "Ankara Lindy Hop",
		locale: "tr_TR",
		type: "article",
	},
};

export default function CountBasie() {
	return (
		<article className="mx-auto max-w-4xl text-zinc-100">
			<header className="mb-8 text-center">
				<h1 className="mb-4 font-bold text-3xl md:text-4xl">
					Count Basie: Swing Kralı ve Caza Damga Vuran Müzikal Dev
				</h1>
				<div className="mx-auto h-1 w-24 bg-orange-300" />
			</header>

			<div className="max-w-none">
				<section className="mb-8">
					<p className="mb-6 text-base md:text-lg">
						Bugün size daha yakından tanıtmak istediğimiz Count Basie
						gönderilerimizin ilki ile karşınızdayız.{" "}
						<span className="font-semibold text-orange-300">
							Asıl adı William James Basie
						</span>{" "}
						olan Count Basie; Duke Ellington ile birlikte büyük caz
						orkestralarının şefliğini yapan önde gelen müzisyenlerden biri ve
						caz efsanesidir.
					</p>

					<div className="mb-8 flex flex-col gap-6 md:flex-row">
						<div className="md:w-1/2">
							<div className="relative h-64 w-full overflow-hidden rounded-lg bg-zinc-800 shadow-lg">
								<div className="absolute inset-0 flex items-center justify-center">
									<Image
										width={600}
										height={400}
										src="/images/blogs/7.webp"
										alt="Count Basie Orkestrası Performansı"
										className="h-full w-full object-cover"
									/>
								</div>
							</div>
							<p className="mt-2 text-center text-xs text-zinc-400">
								Count Basie Orkestrası, swing döneminin karakteristik enerjisini
								yansıtan bir performans sırasında.
							</p>
						</div>
						<div className="md:w-1/2">
							<p className="mb-4 text-base md:text-lg">
								Basie’nin orkestrası{" "}
								<span className="font-semibold">
									caz ve blues müziğini birleştirerek swing’i egemen bir hale
								</span>{" "}
								getirmesi ile tanınır. Basie, caz dünyasını değiştirmiş ve{" "}
								<span className="font-semibold">
									20. yüzyıl ortalarındaki popüler müziği
								</span>{" "}
								şekillendirerek{" "}
								<span className="font-semibold text-orange-300">
									"Swing Kralı"
								</span>{" "}
								unvanını hak etmiştir, çünkü dünyada dans etme arzusunu
								doğurmuştur.
							</p>
							<p className="text-base md:text-lg">
								Basie'nin <span className="font-semibold">"Moten Swing"</span>{" "}
								isimli şarkısı, Basie'ye atfedilen ve orkestral cazın daha özgür
								bir formuna ve swing müziğin gelişimine değerli bir katkı olan
								bir eser olarak kabul edilir.
							</p>
						</div>
					</div>
				</section>

				<section className="mb-8 rounded-lg bg-white/10 p-6 backdrop-blur-sm">
					<h2 className="mb-4 font-semibold text-orange-300 text-xl md:text-2xl">
						Karakteristik Tarz ve Müzikal Yenilikler
					</h2>
					<p className="mb-4 text-base md:text-lg">
						Basie’nin çocukluğunda kullandığı{" "}
						<span className="font-semibold">"*stride"</span> (sol elin
						kullanıldığı teknik) tarzı ile daha az nota kullanıp notalar
						arasında verdiği esler Basie’nin karakteristik tarzını
						oluşturmuştur. Basie akor değişiklikleri üzerine düzenlemeli bir
						yaklaşım olan{" "}
						<span className="font-semibold">
							comping stilini ilk başaran müzisyenlerden
						</span>{" "}
						biridir.
					</p>
					<p className="text-base md:text-lg">
						Basie’nin orkestrası çoğu orkestrada 1 tane bulunmasına rağmen{" "}
						<span className="font-semibold">
							2 tane bölünmüş tenor saksafon kullandırma
						</span>
						, şarkıların ritim bölümlerini vurgulama ve nakaratı tüm orkestra
						ile çalma ve farklı düzenlemeler kullanma gibi{" "}
						<span className="font-semibold">yeniliklerle</span> tanınır. Bu
						yaklaşım, orkestranın hem caz hem de dans edilebilir müzik
						üretmesini sağladı.
					</p>
				</section>

				<section className="mb-8">
					<h2 className="mb-4 font-semibold text-orange-300 text-xl md:text-2xl">
						Ünün Yükselişi ve Efsane İş Birliği
					</h2>
					<p className="mb-4 text-base md:text-lg">
						<span className="font-semibold">John Hammond</span>’un Basie
						orkestrasını radyoda dinlemesiyle ilk kayıt anlaşması yapılmış ve
						Basie orkestrasının ünü giderek yayılmaya başlamıştır. Count Basie
						dönemin{" "}
						<span className="font-semibold">
							en ünlü müzisyen ve şarkıcılarıyla
						</span>{" "}
						beraber çalışmıştır.
					</p>
					<p className="mb-4 text-base md:text-lg">
						Bir diğer efsane orkestra şefi ve müzisyen olan{" "}
						<span className="font-semibold">Chick Webb</span> orkestrasının{" "}
						<span className="font-semibold">Ella Fitzgerald</span> ile; Count
						Basie orkestrasının{" "}
						<span className="font-semibold">Billie Holiday</span> ile
						katıldıkları <span className="font-semibold">düelloda</span> Basie
						çok az farkla düelloyu kaybetse de orkestrasının başarısını
						kanıtlamıştır. <span className="font-semibold">Duke Ellington</span>{" "}
						gibi isimlerin de katılımıyla caz tarihi için unutulmaz bir gece
						yaşatmıştır.
					</p>
					<p className="text-base md:text-lg">
						Basie, Billie Holiday’in yanı sıra{" "}
						<span className="font-semibold">
							Ella Fitzgerald, Frank Sinatra, Tony Bennett
						</span>{" "}
						gibi birçok isimle unutulmaz şarkılara imza atmıştır. Bu iş
						birlikleri, hem seslerin hem de orkestranın zengin dokusunun eşsiz
						bir uyum içinde buluştuğu anımsanması gereken anlardı.
					</p>
				</section>

				<section className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
					<h3 className="mb-4 font-semibold text-lg text-orange-300 md:text-xl">
						Liderlik Tarzı ve Orkestra Kültürü
					</h3>
					<p className="mb-4 text-base md:text-lg">
						Basie, orkestrasının sesini geliştirmek için kadrosunu sık
						değiştirse de{" "}
						<span className="font-semibold">
							en önemli üyeleri uzun süre tutardı
						</span>
						. Basie’nin orkestrası{" "}
						<span className="font-semibold">
							müzisyenlerin bir arada olmaktan keyif aldığı bir ortamdı
						</span>
						. Basie müzisyenlere gelişebilecekleri bir ortam sağlayan aynı
						zamanda eğlenmeleri için de fırsat veren iyi bir liderdi. Gülmeyi
						çok seven Basie kendisinden her zaman bir{" "}
						<span className="font-semibold">centilmen olarak</span>{" "}
						bahsettirmeyi başarmıştır.
					</p>
					<p className="text-base md:text-lg">
						Bu sıcak ve yaratıcı atmosfer, orkestranın uzun yıllar boyunca
						yüksek seviyede performans sergilemesinin ve yeni nesillere ilham
						vermesinin temel nedenlerindendir. Basie, müziksel disiplinle
						yaratıcılığı dengelemeyi başaran nadir bandleaderlardan biriydi.
					</p>
				</section>

				<section className="my-8">
					<h2 className="mb-4 font-semibold text-orange-300 text-xl md:text-2xl">
						Kalıcı Eserler ve Miras
					</h2>
					<p className="mb-4 text-base md:text-lg">
						İlk{" "}
						<span className="font-semibold">
							Grammy ödülü alan Afro-Amerikan sanatçı
						</span>{" "}
						olan caz efsanesinin{" "}
						<span className="font-semibold">
							“Jumpin at the Woodside" ve "One O'Clock Jump"
						</span>{" "}
						gibi en ünlü şarkıları, tüm zamanların en iyi bilinen caz
						standartlarından bazıları olarak sonsuza kadar yaşamaya devam
						edecektir.
					</p>
					<p className="text-base md:text-lg">
						Count Basie’nin{" "}
						<span className="font-semibold">50 yılı aşkın süre</span> şefliğini
						yaptığı Count Basie orkestrası günümüzde hala{" "}
						<span className="font-semibold">trompetçi Scotty Barnhart</span>{" "}
						yönetiminde sahne alıyor ve Basie’nin müzikal mirası yaşamaya devam
						ediyor. Orkestra, orijinal repertuvarını ve özgün tarzını koruyarak
						yeni nesilleri de büyülemeye devam ediyor.
					</p>
				</section>

				<section className="mt-8">
					<h3 className="font-semibold text-lg text-orange-300">Kaynaklar</h3>
					<ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-300">
						<li>
							<Link
								href="https://www.wmky.org/arts-culture/2015-06-12/count-basie-orchestra"
								target="_blank"
								rel="noopener noreferrer"
								className="text-orange-300 hover:underline"
							>
								Wikimedia Commons - Count Basie Orkestrası Performansı
							</Link>
						</li>
						<li>
							<Link
								href="https://en.wikipedia.org/wiki/Count_Basie"
								target="_blank"
								rel="noopener noreferrer"
								className="text-orange-300 hover:underline"
							>
								Wikipedia - Count Basie
							</Link>
						</li>
						<li>
							<Link
								href="https://www.countbasiecenter.org/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-orange-300 hover:underline"
							>
								Official Count Basie Center
							</Link>
						</li>
					</ul>
				</section>
			</div>
		</article>
	);
}
