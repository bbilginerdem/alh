import type { Metadata } from "next";
import CustomBlackLayout from "@/components/ui/CustomBlackLayout";

export const metadata: Metadata = {
	title: "Gizlilik Politikası",
	description:
		"Ankara Lindy Hop topluluğu gizlilik politikası ve kişisel verilerin korunması hakkında bilgi. Verilerinizin güvenliğini nasıl sağladığımızı öğrenin.",
	openGraph: {
		title: "Gizlilik Politikası | Ankara Lindy Hop",
		description: "Gizliliğiniz ve veri güvenliğiniz hakkında bilgi edinin.",
		url: "https://ankaralindyhop.org/gizlilik-politikasi",
	},
};

export default function PrivacyPolicyPage() {
	return (
		<CustomBlackLayout>
			<article className="mx-auto max-w-4xl px-4 py-8 text-zinc-100">
				<header className="mb-8 text-center">
					<h1 className="mb-4 font-bold text-3xl md:text-4xl lg:text-5xl">
						Gizlilik Politikası
					</h1>
					<div className="mx-auto h-1 w-24 bg-orange-300" />
					<p className="mt-4 text-sm text-zinc-400">
						Son Güncellenme: Aralık 2025
					</p>
				</header>

				<div className="max-w-none text-base md:text-lg">
					<section className="mb-8">
						<p className="mb-6 text-lg md:text-xl">
							Ankara Lindy Hop Topluluğu (ALH) olarak, gizliliğinize saygı
							duyuyor ve kişisel verilerinizi korumaya önem veriyoruz. Bu
							gizlilik politikası, web sitemizi ziyaret ettiğinizde hangi
							bilgilerin toplandığını ve nasıl kullanıldığını açıklamaktadır.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="mb-4 font-semibold text-2xl text-orange-300 md:text-3xl">
							1. Toplanan Bilgiler
						</h2>
						<p className="mb-4">
							Web sitemizi kullanırken aşağıdaki bilgiler toplanabilir:
						</p>
						<ul className="mb-4 list-disc space-y-2 pl-5 text-base md:space-y-3 md:text-lg">
							<li>
								<strong>İletişim Bilgileri:</strong> İletişim formunu
								kullandığınızda ad, e-posta adresi ve mesaj içeriği
							</li>
							<li>
								<strong>Çerez Verileri:</strong> Tarayıcı türü, ziyaret edilen
								sayfalar, ziyaret süresi gibi teknik bilgiler
							</li>
							<li>
								<strong>Kullanım Verileri:</strong> Site kullanım istatistikleri
								ve etkileşim bilgileri
							</li>
						</ul>
					</section>

					<section className="mb-8 rounded-lg bg-white/10 p-4 backdrop-blur-sm md:p-6">
						<h2 className="mb-4 font-semibold text-2xl text-orange-300 md:text-3xl">
							2. Çerezler (Cookies)
						</h2>
						<p className="mb-4">
							Web sitemiz, kullanıcı deneyimini iyileştirmek için çerezler
							kullanmaktadır. Çerezler, tarayıcınız tarafından bilgisayarınıza
							kaydedilen küçük metin dosyalarıdır.
						</p>
						<div className="mb-4">
							<h3 className="mb-2 font-semibold text-lg text-orange-200">
								Kullandığımız Çerez Türleri:
							</h3>
							<ul className="list-disc space-y-2 pl-5">
								<li>
									<strong>Zorunlu Çerezler:</strong> Web sitesinin temel
									işlevlerini yerine getirmesi için gereklidir
								</li>
								<li>
									<strong>Tercih Çerezleri:</strong> Çerez tercihlerinizi
									hatırlamak için kullanılır
								</li>
								<li>
									<strong>Analitik Çerezler:</strong> Site kullanımını
									anlamamıza ve iyileştirmemize yardımcı olur
								</li>
							</ul>
						</div>
						<p className="text-sm text-zinc-300 italic">
							Çerezleri tarayıcı ayarlarınızdan yönetebilir veya silebilirsiniz.
							Ancak, bazı çerezleri devre dışı bırakmanız durumunda web
							sitesinin bazı özellikleri düzgün çalışmayabilir.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="mb-4 font-semibold text-2xl text-orange-300 md:text-3xl">
							3. Bilgilerin Kullanımı
						</h2>
						<p className="mb-4">
							Topladığımız bilgileri şu amaçlarla kullanırız:
						</p>
						<ul className="list-disc space-y-2 pl-5 text-base md:space-y-3 md:text-lg">
							<li>İletişim taleplerinize yanıt vermek</li>
							<li>Web sitesinin işlevselliğini sağlamak ve geliştirmek</li>
							<li>Kullanıcı deneyimini iyileştirmek</li>
							<li>
								Etkinlikler ve topluluk haberleri hakkında bilgilendirme yapmak
							</li>
							<li>Web sitesi güvenliğini sağlamak</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="mb-4 font-semibold text-2xl text-orange-300 md:text-3xl">
							4. Bilgi Paylaşımı
						</h2>
						<p className="mb-4">
							Kişisel bilgilerinizi üçüncü taraflarla paylaşmıyoruz.
							Bilgileriniz yalnızca aşağıdaki durumlarda paylaşılabilir:
						</p>
						<ul className="list-disc space-y-2 pl-5 text-base md:space-y-3 md:text-lg">
							<li>Yasal bir zorunluluk olduğunda</li>
							<li>Haklarımızı korumak için gerekli olduğunda</li>
							<li>Açık rızanız olduğunda</li>
						</ul>
					</section>

					<section className="mb-8 rounded-lg bg-white/10 p-4 backdrop-blur-sm md:p-6">
						<h2 className="mb-4 font-semibold text-2xl text-orange-300 md:text-3xl">
							5. Veri Güvenliği
						</h2>
						<p className="mb-4">
							Kişisel verilerinizi korumak için uygun teknik ve idari önlemler
							alıyoruz. Ancak, internet üzerinden yapılan hiçbir veri iletiminin
							%100 güvenli olmadığını unutmayın.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="mb-4 font-semibold text-2xl text-orange-300 md:text-3xl">
							6. Haklarınız
						</h2>
						<p className="mb-4">
							KVKK (Kişisel Verilerin Korunması Kanunu) kapsamında aşağıdaki
							haklara sahipsiniz:
						</p>
						<ul className="list-disc space-y-2 pl-5 text-base md:space-y-3 md:text-lg">
							<li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
							<li>İşlenmişse buna ilişkin bilgi talep etme</li>
							<li>
								İşlenme amacını ve bunların amacına uygun kullanılıp
								kullanılmadığını öğrenme
							</li>
							<li>
								Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme
							</li>
							<li>
								Eksik veya yanlış işlenmiş olması halinde düzeltilmesini isteme
							</li>
							<li>Verilerin silinmesini veya yok edilmesini talep etme</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2 className="mb-4 font-semibold text-2xl text-orange-300 md:text-3xl">
							7. Üçüncü Taraf Bağlantılar
						</h2>
						<p className="mb-4">
							Web sitemiz, üçüncü taraf web sitelerine bağlantılar içerebilir.
							Bu sitelerin gizlilik uygulamalarından sorumlu değiliz. Bu
							siteleri ziyaret ettiğinizde gizlilik politikalarını incelemenizi
							öneririz.
						</p>
					</section>

					<section className="mb-8 rounded-lg bg-white/10 p-4 backdrop-blur-sm md:p-6">
						<h2 className="mb-4 font-semibold text-2xl text-orange-300 md:text-3xl">
							8. Çocukların Gizliliği
						</h2>
						<p className="mb-4">
							Web sitemiz 18 yaşın altındaki çocuklardan bilerek kişisel bilgi
							toplamaz. Eğer bir ebeveyn veya vasi olarak çocuğunuzun bize
							kişisel bilgi verdiğini fark ederseniz, lütfen bizimle iletişime
							geçin.
						</p>
					</section>

					<section className="mb-8">
						<h2 className="mb-4 font-semibold text-2xl text-orange-300 md:text-3xl">
							9. Politika Değişiklikleri
						</h2>
						<p className="mb-4">
							Bu gizlilik politikasını zaman zaman güncelleyebiliriz. Önemli
							değişiklikler olduğunda, bu sayfada güncelleme tarihini
							değiştirerek sizi bilgilendireceğiz. Düzenli olarak bu sayfayı
							kontrol etmenizi öneririz.
						</p>
					</section>

					<section className="mb-8 rounded-lg border border-orange-300/30 bg-orange-300/5 p-4 md:p-6">
						<h2 className="mb-4 font-semibold text-2xl text-orange-300 md:text-3xl">
							10. İletişim
						</h2>
						<p className="mb-4">
							Gizlilik politikamız hakkında sorularınız veya talepleriniz varsa,
							bizimle iletişime geçebilirsiniz:
						</p>
						<div className="space-y-2 text-base md:text-lg">
							<p>
								<strong className="text-orange-200">E-posta:</strong>{" "}
								<a
									href="mailto:ankaralindyhop@gmail.com"
									className="text-orange-300 underline transition-colors hover:text-orange-200"
								>
									ankaralindyhop@gmail.com
								</a>
							</p>
							<p>
								<strong className="text-orange-200">İletişim Formu:</strong>{" "}
								<a
									href="/iletisim"
									className="text-orange-300 underline transition-colors hover:text-orange-200"
								>
									İletişim sayfamızı ziyaret edin
								</a>
							</p>
						</div>
					</section>

					<section className="my-12 rounded-lg border border-orange-300/30 bg-orange-300/5 p-6 text-center">
						<p className="font-medium text-lg text-orange-300">
							Gizliliğiniz bizim için önemlidir
						</p>
						<p className="mt-2 text-sm text-zinc-300">
							Bu politika, verilerinizin güvenliği ve gizliliği için özenle
							hazırlanmıştır
						</p>
					</section>
				</div>
			</article>
		</CustomBlackLayout>
	);
}
