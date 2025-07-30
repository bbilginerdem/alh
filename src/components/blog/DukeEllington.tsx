import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Duke Ellington: Cazın Efsanevi Bestecisi ve Lideri",
	description:
		"Duke Ellington'ın caz tarihindeki yeri, beraber çalıştığı müzisyenlere özgü solo yazma yaklaşımı ve 'Caravan' gibi klasik eserleri hakkında detaylı bilgiler.",
	keywords: [
		"Duke Ellington",
		"caz tarihi",
		"Caravan",
		"Lindy Hop müzik",
		"caz bestecileri",
		"swing müzik",
	],
	openGraph: {
		title: "Duke Ellington: Cazın Efsanevi Bestecisi",
		description:
			"Duke Ellington'ın caz tarihindeki önemli yeri ve beraber çalıştığı müzisyenlere özgü solo yazma yaklaşımı.",
		url: "https://ankaralindyhop.org/blog/duke-ellington",
		siteName: "Ankara Lindy Hop",
		locale: "tr_TR",
		type: "article",
	},
};

export default function DukeEllington() {
	return (
		<article className="mx-auto max-w-4xl px-4 py-8 text-zinc-100">
			<header className="mb-8 text-center">
				<h1 className="mb-4 font-bold text-3xl md:text-4xl">
					Duke Ellington: Cazın Efsanevi Bestecisi ve Lideri
				</h1>
				<div className="mx-auto h-1 w-24 bg-orange-300" />
			</header>

			<div className="prose prose-invert max-w-none">
				<section className="mb-8">
					<p className="mb-6 text-base md:text-lg">
						Asıl adı Edward Ellington olan{" "}
						<span className="font-semibold text-orange-300">
							Duke Ellington
						</span>
						, "Duke" lakabını; arkadaşlarının ona zarif kıyafetleri ve görgülü
						tavırlarından ötürü taktığı bir lakap olarak almıştır.
					</p>

					<div className="mb-8 flex flex-col gap-6 md:flex-row">
						<div className="md:w-1/2">
							<Image
								src="/images/posts/4.jpg"
								alt="Duke Ellington orkestrası ile"
								width={600}
								height={400}
								className="rounded-lg shadow-lg"
							/>
							<p className="mt-2 text-xs text-zinc-400">
								Duke Ellington ile Alicie Babs
							</p>
						</div>
						<div className="md:w-1/2">
							<p className="mb-4 text-base md:text-lg">
								Duke Ellington, caz tarihinin en önemli bestecisi, büyük bir
								müzik grubu lideri olmasına ek olarak beraber çalıştığı
								müzisyenlere özgü solo yazma konusunda da örnek bir figür olarak
								caz tarihine geçmiştir.
							</p>

							<p className="mb-4 text-base md:text-lg">
								<span className="font-semibold text-orange-300">
									Ben Webster
								</span>
								,
								<span className="font-semibold text-orange-300">
									{" "}
									Johnny Hodges
								</span>
								,
								<span className="font-semibold text-orange-300">
									{" "}
									Cootie Williams
								</span>
								gibi bir çok virtüöz müzisyeni etkileyerek, onlara özgü sololar
								yazarak yeteneklerini vurgulamak için daha önlere çıkarmıştır.
							</p>
							<p className="text-base md:text-lg">
								Ellington'ın bu eşsiz yaklaşımı, sadece bireysel yetenekleri ön
								plana çıkarmakla kalmadı, aynı zamanda orkestrasının kolektif
								kimliğini de güçlendirdi. Her müzisyenin kendine has tonu ve
								tarzı, Ellington'ın besteleriyle harmanlandığında, ortaya çıkan
								ses orkestranın imzası haline geldi.
							</p>
						</div>
					</div>
				</section>

				<section className="mb-8 rounded-lg bg-white/10 p-6 backdrop-blur-sm">
					<h2 className="mb-4 font-semibold text-orange-300 text-xl md:text-2xl">
						Müzisyenliğini Geliştiren Bir Lider
					</h2>
					<p className="mb-4 text-base md:text-lg">
						Bunlara ek olarak yanındaki müzisyenlere kendi şarkılarını deneme
						fırsatı vermiştir. Bunlardan bazıları orkestra ile yeniden
						düzenlenerek kaydedilmiştir.
					</p>
					<p className="text-base md:text-lg">
						Bu şarkılardan en önemlisi jazz tarihinde de önemli bir yere sahip
						olan{" "}
						<span className="font-semibold text-orange-300">"Caravan"</span>
						dır ve Duke Ellington'ın yanında trombonist olan
						<span className="font-semibold text-orange-300"> Juan Tizol</span>
						tarafından bestelenmiştir.
					</p>
				</section>

				<section className="mb-8">
					<div className="flex flex-col gap-6 md:flex-row-reverse">
						<div>
							<h2 className="mb-4 font-semibold text-orange-300 text-xl md:text-2xl">
								Caravan: Bir Klasik Doğuyor
							</h2>
							<p className="mb-4 text-base md:text-lg">
								<span className="font-semibold text-orange-300">"Caravan"</span>
								, 1936 yılında bestelenen bu eser, Duke Ellington orkestrasının
								en ikonik parçalarından biri haline gelmiştir. Latin
								ritimlerinden esinlenen bu parça, caz repertuarında oryantal ve
								egzotik temaların kullanımına öncülük etmiştir.
							</p>
							<p className="text-base md:text-lg">
								Juan Tizol'un trombonundan çıkan bu melodi, yıllar içinde
								sayısız müzisyen tarafından yorumlanmış ve Lindy Hop
								topluluklarında da sıkça dans edilen bir klasik haline
								gelmiştir.
							</p>
						</div>
					</div>
				</section>

				<section className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
					<h3 className="mb-4 font-semibold text-lg text-orange-300 md:text-xl">
						Ellington'ın Mirası
					</h3>
					<p className="mb-4 text-base md:text-lg">
						Duke Ellington, sadece bir besteci değil aynı zamanda bir mentor ve
						ilham kaynağıydı. Onunla çalışan her müzisyen, kendi sesini bulma
						fırsatı elde etti. Bu yaklaşımı, caz tarihinde benzersiz bir yer
						edinmesini sağlamıştır.
					</p>

					<blockquote className="my-6 border-orange-300 border-l-4 pl-4 text-base italic md:text-lg">
						"Müzik, kalpten kalbe akan bir dildir." <br />
						<span className="text-orange-300">– Duke Ellington</span>
					</blockquote>

					<div className="mt-6">
						<p className="mb-2 font-semibold text-orange-300">İçerik: Salih</p>
						<p className="text-orange-300">Hazırlayan: Neval</p>
					</div>
				</section>
			</div>
		</article>
	);
}
