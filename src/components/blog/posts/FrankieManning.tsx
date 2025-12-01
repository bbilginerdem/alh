"use client";

import Image from "next/image";

export default function FrankieManning() {
	return (
		<div>
			<section className="mb-8">
				<p className="mb-8 text-lg">
					Dans tarihinde devrim yaratan isimlerden biri:{" "}
					<span className="font-semibold text-orange-300">Frankie Manning</span>
					. Onu sadece bir dansçı olarak tanımlamak yetmez; o, Lindy Hop'u
					şekillendiren, adeta yeniden icat eden bir öncüydü. Dans pistlerinde
					yarattığı havada akrobatik figürlerle herkesi hayrete düşürdü ve bu
					dansı tüm dünyaya sevdirdi.
				</p>

				<div className="mb-8 flex flex-col gap-6 md:flex-row">
					<div className="my-auto md:w-1/2">
						<Image
							src="/images/blogs/1.jpg"
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
							Frankie, 1914'te dünyaya geldi ve gençliğini Harlem'in kalbinde,{" "}
							<span className="font-semibold">Savoy Ballroom</span>, elektrikli
							atmosferinde geçirdi. Burası, cazın coştuğu, dansçıların
							birbirleriyle yarıştığı ve yeni adımların doğduğu gerçek bir
							laboratuvardı. Frankie de burada kendini geliştirdi.
						</p>

						<p className="mb-4">
							Onun asıl devrimi, dansı yere bağlı olmaktan çıkarıp havaya
							taşımasıydı. <span className="font-semibold">"Aerials"</span>{" "}
							dediğimiz o akrobatik, partneri fırlatıp tuttuğu hareketleri Lindy
							Hop'a kattı. O kadar etkileyiciydi ki, Frankie pistteyken Savoy
							tıklım tıklım dolardı. İnsanlar onu izlemek için gelirdi.
						</p>

						<p className="mb-4">
							1940'larda{" "}
							<span className="font-semibold">Whitey's Lindy Hoppers</span> adlı
							grupla dünyayı dolaştı. Hollywood filmlerinde dans sahneleri
							koreografiledi. "Hellzapoppin'" filmindeki o meşhur sahneyi belki
							görmüşsünüzdür; işte o, Frankie'nin imzasını taşır. Dansı beyaz
							perdede ölümsüzleştirdi.
						</p>

						<p className="mb-4">
							Ama her hikayede bir dönüş vardır. Swing dönemi kapandı, büyük
							orkestralar dağıldı. Frankie Manning de, belki de en parlak
							döneminde, adeta sessizliğe gömüldü. Dansı unutuldu... ta ki
							1980'lerde genç bir nesil, eski kayıtları bulup Lindy Hop'u
							yeniden keşfedene kadar.
						</p>
					</div>
				</div>
			</section>

			<section className="mb-8 rounded-lg bg-white/10 p-6 backdrop-blur-sm">
				<h2 className="mb-4 font-semibold text-2xl text-orange-300">
					Ve Efsane Uyandı
				</h2>
				<p className="mb-4">
					Frankie, 70'li yaşlarında, tüm dünyayı dolaşmaya, yeni nesillere
					atılımları, aerials'ı ve dansın ruhunu öğretmeye başladı. Onun için
					dans, sadece adımlardan ibaret değildi; bir neşe, bir özgürlük ve
					yaratıcılık ifadesiydi. Şöyle derdi: "Dans etmek, müziğin içinde
					uçmaktır."
				</p>
				<p>
					Frankie Manning, 2009'da, neredeyse 95 yaşında aramızdan ayrıldı. Ama
					mirası asla bitmedi. Bugün dünyanın dört bir yanındaki her swing
					festivalinde, her workshop'ta, pistte havaya kaldırılan her partnerde
					onun ruhu yaşıyor.
				</p>
			</section>

			<section className="rounded-lg p-6">
				<h3 className="mb-4 font-semibold text-orange-300 text-xl">
					Son Söz: Frankie'nin Dansı Asla Bitmez!
				</h3>
				<p className="mb-4">
					Frankie Manning, 2009'da, neredeyse 95 yaşında aramızdan ayrıldı. Ama
					mirası asla bitmedi. Bugün dünyanın dört bir yanındaki her swing
					festivalinde, her workshop'ta, pistte havaya kaldırılan her partnerde
					onun ruhu yaşıyor.
				</p>
				<div className="mt-6">
					<p className="mb-2 font-semibold">
						Peki ya siz? Hiç Lindy Hop denediniz mi?
					</p>
					<p>
						Yoksa onun hikayesi sizi dans etmek (veya izlemek) konusunda
						heyecanlandırdı mı?
					</p>
				</div>
			</section>
		</div>
	);
}
