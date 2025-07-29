"use client";

import Button from "@/components/ui/Button";
import CustomBlackLayout from "@/components/ui/CustomBlackLayout";

export default function Toplulukİlkeleri() {
	const handleButtonClick = () => {
		window.open(
			"https://docs.google.com/forms/d/e/1FAIpQLScyrPGGqRb-dUQBOj4VGtpmOHd-SbuoWspXjTCSPb0Fc3_MUA/viewform  ",
			"_blank",
		);
	};

	return (
		<CustomBlackLayout>
			<article className="mx-auto max-w-4xl px-4 py-8 text-zinc-100">
				<header className="mb-8 text-center">
					<h1 className="mb-4 font-bold text-3xl md:text-4xl lg:text-5xl">
						{" "}
						{/* Responsive title */}
						ALH Topluluğu Etik İlkeleri
					</h1>
					<div className="mx-auto h-1 w-24 bg-orange-300" />
				</header>

				<div className="prose prose-invert max-w-none text-base md:text-lg">
					{" "}
					{/* Responsive base text */}
					<section className="mb-8">
						<p className="mb-6 text-lg md:text-xl">
							Ankara Lindy Hop Topluluğu (ALH) kar odaklı olmayan, yardımlaşma
							ve dayanışma ile güçlenmeyi ilke edinmiş bir dans topluluğudur.
							Swing danslarının ve caz müzik kültürünün samimi, neşeli, arkadaş
							canlısı ve sosyal açıdan insanların birbirini desteklediği bir
							ortam yarattığına inanıyoruz.
						</p>

						<div className="mb-8">
							<h2 className="mb-4 font-semibold text-2xl text-orange-300 md:text-3xl">
								{" "}
								{/* Responsive heading */}
								Topluluğun Politikaları
							</h2>
							<ul className="mb-4 list-disc space-y-2 pl-5 text-base md:space-y-3 md:text-lg">
								{" "}
								{/* Responsive list */}
								<li>
									ALH cinsiyet kimliği, cinsel yönelim, engellilik, fiziksel
									görünüm, vücut ölçüsü, ırk, dil, din, dans beceri düzeyi veya
									dans rolü ne olursa olsun herkes için güvenli ve keyifli bir
									etkinlik deneyimi sağlamaya kendini adamıştır.
								</li>
								<li>
									ALH ayrımcılığa karşıdır, bir önceki maddede söz edilen
									konular dahilinde herkese eşit mesafededir.
								</li>
								<li>
									ALH, toplulukla ilgili tüm uygunsuz davranış ihbarlarını
									titizlik ve gizlilik içinde (mümkün olduğunca) ele alır,
									gerekli yolları izler ve ihtiyaç duyulursa güvenli dans
									alanını korumak adına çeşitli yaptırımlar uygular.
								</li>
								<li>
									ALH başta cinsel taciz ve cinsel şiddet olmak üzere şiddetin
									her türlüsüne sıfır tolerans gösterir.
								</li>
							</ul>
						</div>
					</section>
					<section className="mb-8 rounded-lg bg-white/10 p-4 backdrop-blur-sm md:p-6">
						{" "}
						{/* Responsive padding */}
						<h2 className="mb-4 font-semibold text-2xl text-orange-300 md:text-3xl">
							Taciz ve Uygunsuz Davranışlar
						</h2>
						<p className="mb-4 text-base md:text-lg">
							Aşağıdakileri içerir ancak bunlarla sınırlı değildir:
						</p>
						<ul className="list-disc space-y-2 pl-5 text-base md:space-y-3 md:text-lg">
							<li>
								Cinsiyet, cinsel yönelim, engellilik, fiziksel görünüm, vücut
								ölçüsü, ırk, dil, din, dans beceri düzeyi veya dans rolüyle
								ilgili saldırgan sözlü yorumlar ve sözsüz davranışlar
							</li>
							<li>
								İstenmeyen cinsel ilgi (ilişkiye girmek için ısrarcı
								davranışlar, istenmeyen mesajlar, rahatsız edici bakışlar, dans
								etme konusunda ısrar vb.)
							</li>
							<li>
								Partneri rahatsız edecek her türlü uygunsuz fiziksel temas
							</li>
							<li>
								Dans dışında ilişki kurmaya zorlama (Sürekli telefon açma, mesaj
								atma, türlü etkinliklere katılmak için ısrarcı olma, çeşitli
								bahanelerle görüşmeye mecbur bırakma vb.)
							</li>
							<li>
								Haberleşme amaçlı kurulmuş ALH whatsapp grubu (dirty lindy
								talks) üzerinden, kendilerinin onayı olmaksızın-grup dışında
								etkileşim kurmadıkları dansçıların telefon numaralarını alma ve
								flört amaçlı mesajlarla taciz etme
							</li>
							<li>
								Önceden izin almadan başkalarını fotoğraflama, videolarını
								kaydetme ya da sosyal medyada paylaşma
							</li>
							<li>Kasıtlı korkutma</li>
							<li>Israrla takip etme veya takip ettirme</li>
						</ul>
						<p className="mt-4 text-base md:text-lg">
							Topluluk kurallarını ihlal edenler yaptırıma tabi tutulurlar.
							Taciz durumunda ALH Yönetiminden güvendiğiniz biriyle iletişime
							geçin.
						</p>
					</section>
					<section className="mb-8">
						<h2 className="mb-4 font-semibold text-2xl text-orange-300 md:text-3xl">
							Dans Pistinde Görgü Kuralları
						</h2>
						<ul className="list-disc space-y-2 pl-5 text-base md:space-y-3 md:text-lg">
							<li>
								Birisiyle dans etmek istiyorsanız, lider (leader) ya da takipçi
								(follower) olmanız fark etmeksizin ilk adımı siz atarak onu
								dansa davet edebilirsiniz. Önce davet eden partneri kapar, dansa
								daha erken başlar
							</li>
							<li>
								Biri size dans teklif ettiğinde bunu geri çevirmek istemeniz
								gayet anlaşılabilir bir durumdur. Yalnızca nazik olmanız
								gerektiğini unutmayın.
							</li>
							<li>
								Sizinle dans etmeye istekli olan bir partnerle dilediğiniz
								sayıda şarkıda dans edebilirsiniz.
							</li>
							<li>
								Her iki partner de yeterli olduğunu düşündüklerinde dansı
								sonlandırabilirler. Ayrılırken karşılıklı olarak teşekkür etmek,
								birlikte dans etmekten aldığımız keyfin hoş bir ifadesi
								olabilir.
							</li>
							<li>
								Dans pisti, kendimiz gibi olabileceğimiz bir yerdir. Bu yüzden
								olumlu/olumsuz duygularımızı yansıtabilir, çılgınca dans
								edebilir, kendi sınırlarımızı zorlayabiliriz. Yalnızca
								başkalarını rahatsız etmediğimizden emin olmamız gerekir.
							</li>
							<li>
								Unutmayın ki ne kadar büyüleyici olursa olsun bir dans, yalnızca
								bir danstır. Partnerinizle dansta yakaladığınız uyumu dans
								dışında yakalayamayabilirsiniz.
							</li>
							<li>
								Birbirimizin iyilik halini gözetmemiz için etrafımıza dikkat
								etmemiz gerekir. Birine çarparsanız iyi olup olmadığından emin
								olun, yardım ihtiyacı olup olmadığını öğrenin
							</li>
							<li>
								Dans ederken karşımızdakini kişisel alanımıza alırız. Güvende
								hissetmek için birbirimizin sınırlarına özen gösterelim.
								Partnerinizin sınırlarından emin değilseniz, onlara açıkça
								sorun.
							</li>
							<li>
								Yaratıcı olmak ve birlikte yeni bir şeyler denemek ne kadar
								keyifli olsa da partnerimizin bundan aynı ölçüde keyif alıp
								almadığını bilmemiz önemlidir.
							</li>
							<li>
								Sosyal dans, bir ders öğretme ortamı değildir. Partneriniz açık
								bir soru sormadığı ya da geri bildirim vermenizi istemediği
								takdirde, partnerinizin dansı ile ilgili herhangi bir yorumda
								bulunmayın.
							</li>
							<li>
								Temiz kıyafetlerle ve duş almış olarak dansa gitmek, ter
								kokusunu önleyici krem-deodorant vb. kullanmak, yanında havlu
								taşımak ya da belirli aralıklarla kıyafet değiştirmek diğer
								herkesi kötü kokuların gazabından kurtarabilir.
							</li>
							<li>
								Yüksek miktarda alkol tüketmişken birini dansa kaldırmak,
								alkolün beden koordinasyonunu bozabilmesi nedeniyle partnere
								tacize varabilecek düzeyde zarar verebilir.
							</li>
						</ul>
					</section>
					<section className="mb-8">
						<h2 className="mb-4 font-semibold text-2xl text-orange-300 md:text-3xl">
							Etkinlik Mekanı Kuralları
						</h2>
						<ul className="list-disc space-y-2 pl-5 text-base md:space-y-3 md:text-lg">
							<li>
								Topluluk üyelerinin sağlığı, mekan açısından da benzer
								etkinliklerin devamı için tuvaletleri temiz tutmak çok
								önemlidir.
							</li>
							<li>
								Etkinlik mekanına giriş izni, yalnızca etkinlik için ayrılan
								alanla sınırlıdır.
							</li>
							<li>
								Eşyalarınızın güvenliğini sağlama sorumluluğu size aittir.
							</li>
							<li>
								Etkinlikte yaşanabilecek kazalar ya da yaralanmalarda ALH ve
								etkinlik mekanı sorumluluk kabul etmez.
							</li>
							<li>
								Etkinliklerimizde uyuşturucu madde kullanımı kesinlikle
								yasaktır.
							</li>
							<li>
								Mekanın izin verdiği alanlar dışında sigara kullanımı yasaktır.
							</li>
							<li>
								Mekan izin vermediği sürece mekana dışarıdan alkol ve yiyecek
								sokulması yasaktır.
							</li>
						</ul>
						<div className="mt-6 text-base md:text-lg">
							<p className="mb-4 font-semibold">
								Rahatsız edici bir durumla karşılaşırsanız:
							</p>
							<p>1. İlgili kişiyle nazikçe konuşun</p>
							<p>
								2. Bu konuşmayı yapmak zorsa ALH Yönetiminden biri ile iletişime
								geçin
							</p>
							<p className="mt-4 italic">
								Tüm süreç kesin bir gizlilikle yönetilecektir.
							</p>
						</div>
					</section>
					{/* Care Team Section */}
					<section className="my-12 rounded-lg border border-orange-300/30 bg-orange-300/5 p-6 text-center">
						<p className="font-medium text-lg text-orange-300">
							Bu ilkeler topluluğumuzun refahı ve güvenliği için özenle
							hazırlanmıştır
						</p>
						<p className="mt-2 text-sm text-zinc-300">
							ALH Care Team tarafından ❤️ ile yazıldı
						</p>
					</section>
					<section className="text-center">
						<Button
							title="İhlal Bildirimi Yap"
							containerClass="mx-auto my-4"
							onClick={handleButtonClick}
						/>
						<p className="my-3 text-sm text-zinc-400">
							Topluluk ilkelerini ihlal eden bir durumla karşılaştıysanız, bu
							buton aracılığıyla bildirimde bulunabilirsiniz.
						</p>
					</section>
				</div>
			</article>
		</CustomBlackLayout>
	);
}
