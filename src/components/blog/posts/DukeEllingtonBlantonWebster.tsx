"use client";

import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title:
		"Duke Ellington ile swing çağına yolculuk: Blanton/Webster Döneminin Dans ve Can Üzerine Etkisi",
	description:
		"Duke Ellington'un 1940-42 yılları arasında RCA Victor ile yaptığı legendary albümü, Blanton-Webster dönemi ve Swing döneminin doruk noktası hakkında detaylı analiz.",
	keywords: [
		"Duke Ellington",
		"Never No Lament",
		"Blanton/Webster Band",
		"Jazz Standard",
		"Swing Dönemi",
		"Jimmy Blanton",
		"Ben Webster",
		"Billy Strayhorn",
		"Caz Tarihi",
		"Lindy Hop Müzik",
		"Ankara Lindy Hop",
	],
	openGraph: {
		title:
			"Duke Ellington ile swing çağına yolculuk: Blanton/Webster Döneminin Dans ve Can Üzerine Etkisi",
		description:
			"Duke Ellington'un 1940-42 yılları arasında RCA Victor ile yaptığı legendary albümü, Blanton-Webster dönemi ve Swing döneminin doruk noktası hakkında detaylı analiz.",
		url: "https://ankaralindyhop.org/blog/duke-ellington-never-no-lament",
		siteName: "Ankara Lindy Hop",
		locale: "tr_TR",
		type: "article",
	},
};

export default function DukeEllingtonBlantonWebster() {
	return (
		<div>
			<section className="mb-8">
				<p className="mb-8 text-base md:text-lg">
					Bir albüm ya da eser üzerine yazmak; şarkıyı gündelik hayatın içinde
					listeden çalıp dinlemekten kat be kat daha zor olduğunu fark ediyorum.
					Listeler yapıyoruz, müzik platformlarından şarkılar arıyor ekliyor ve
					çalıyoruz, üzerine dans ediyoruz… Bu kadar günlük hayatımızın içinde
					olan bir şey hakkında nasıl olur da yorum yapmaya çalışınca koca bir
					boşluk önümüze çıkıyor. Bu yazı dizisinde eğer elimden gelirse -en
					azından Türkiye lindyhop sahnesi içerisinde- bu duruma biraz daha
					yoğunlaşıp, üzerine dans ettiğimiz müzikler konusunda hikayeler,
					detaylar, bilgiler anlatarak müzik konusunun daha içerisine girmek
					istiyorum. Çoğunluğumuz gibi ben de konunun uzmanı değilim ama müzik
					üzerine konuşmak ve gerçekten dinlemek (absorbe ederek), odaklanmak ve
					analiz etmek için illa konunun uzmanı olunmasına gerek olmadığı
					kanaatindeyim. Müziğin sadece dans ederken bize eşlikçi olmadığını
					bilakis varlığıyla dans edeni, dinleyeni o kadar dolaysız bir şekilde
					cezbetmesi beni en çok büyüleyen noktası olmuştur ve olmaya devam
					etmektedir. Bu sebeple bu yazılarda da müziği, albümleri bu bakış
					açısından ele almaya çalışarak anlamaya ve daha çok dans sahnemizin
					odağına almayı hedeflemekteyim, umarım bir nebze olsun başarabilirim.
				</p>

				<p className="mb-8 text-base md:text-lg">
					Buradan hareketle, günümüzde sıkça yaptığımız gibi şarkı bazlı ve
					sürekli favori önerilenlerden, başka listelerden alınan şarkılardan
					ziyade, bir albüme odaklanarak albüm hakkında yazmanın daha uygun
					olduğu düşüncesindeyim. Böylece albümün çıkış hikayesine, albümde yer
					alan şarkıların enstrümanlarına, sanatçılarına daha derinlemesine
					nüfuz edilebilecektir. Mesela 1920lerdeki aranjman, beste ve müzisyen
					ekolleri ile 1940’lardakiler arasında kıyaslama yapılamayacağı gibi bu
					dönemlerde farklı müzikal ekollerden, tarihi olaylardan, teknolojik ve
					sosyokültürel sorunlardan kaynaklı albümlerin ve müziklerin yanlış
					yorumlanabilmesinin önüne geçilebilecektir.
				</p>

				<div className="mb-8 flex flex-col items-center">
					<div className="relative h-64 w-full max-w-md overflow-hidden rounded-lg bg-zinc-800 shadow-lg">
						<div className="absolute inset-0 flex items-center justify-center">
							<Image
								width={600}
								height={600}
								src="/images/blogs/10.webp"
								alt="Duke Ellington - Never No Lament Albüm Kapağı"
								className="h-full w-full object-cover"
							/>
						</div>
					</div>
					<p className="mt-2 text-center text-xs text-zinc-400">
						Duke Ellington - Never No Lament: The Blanton/Webster Band
					</p>
				</div>
			</section>

			<section className="mb-8 rounded-lg bg-white/10 p-6 backdrop-blur-sm">
				<h2 className="mb-4 font-semibold text-orange-300 text-xl md:text-2xl">
					DUKE ELLINGTON - NEVER NO LAMENT - THE BLANTON/WEBSTER BAND
				</h2>
				<blockquote className="border-orange-300 border-l-4 pl-4 text-zinc-300 italic">
					“Gün gelecek tüm caz sanatçıları bir araya gelecek ve dizleri üstüne
					çökerek Duke Ellington’a hürmetlerini sunacaklar.” - Miles Davis
				</blockquote>
			</section>

			<section className="mb-8">
				<h2 className="mb-4 font-semibold text-orange-300 text-xl md:text-2xl">
					1940'lar: Swing'in Doruk Noktası ve İnişin Başlangıcı
				</h2>
				<p className="mb-4 text-base md:text-lg">
					1940’lar ilginç bir dönem gerçekten, dışarıdan bakıldığında Swing
					Dönemi’nin doruk noktası diyebiliriz. Biraz yakından ve dikkatli
					baktığımızda ise düşüşe geçtiğinin belirtilerini görebileceğimize
					inanıyorum. Müzik endüstrisinde bir orkestraya dahil müzisyenler
					büyüyen müzik endüstrisine rağmen hak ettikleri ekonomik seviyeye
					ulaşamamaktaydılar. Buna ek olarak sürekli seyahat halinde olmak da
					eklenince giderek zorlaşan bir atmosfer olduğu görülmektedir.
					Müzisyenler için oluşan bu sıkıntıların, yayıncılar ve menajerler için
					geçerli olmadığı da bu dönemde fark edilmeye başlanıyor. Müzisyenler
					artık sadece müzik yapabilecekleri, seyahat etmek istemeyecekleri yeni
					kulüplerin ihtiyacını hissediyor*; aranjör ve besteciler daha yüksek
					fiyatlarla çalışabilecekleri orkestralar arayarak yer
					değiştiriyorlardı**. Müzik sektörü büyümüş, büyüdükçe endüstrileşmiş
					ve altından kötü kokular gelmeye başlamıştı. Bu da her popüler eğilim
					gibi kalitede bir düşüş ve müzikten ziyade matematiksel ticari bir
					atmosfer oluşmasını kaçınılmaz kılmaktadır. BOP ve Jump Blues için bu
					tohumlar yeterli olacaktır. Büyük Orkestralar için ise savaşın da
					kaçınılmaz olarak getirdikleri ile beraber büyük bir darbe alacakları
					dönem yaklaşmaktadır. Duke Ellington bu değişimi bence fark etmişti.
					Yayıncısı ile arasının açılmasında ve hatta şu cümleyi söylemesindeki
					ana etkenin bu fark ediş olduğunu düşünmekteyim: “Jazz is music, Swing
					is business.”
				</p>
			</section>

			<section className="mb-8 rounded-lg bg-white/10 p-6 backdrop-blur-sm">
				<h2 className="mb-4 font-semibold text-orange-300 text-xl md:text-2xl">
					Duke Ellington Orkestrası: Sessizliklere Karşı Müzik
				</h2>
				<p className="mb-4 text-base md:text-lg">
					Duke Ellington Orkestra’nın en önemli başarısı caz müziğine özgü kendi
					tınısını (sound) korumasıdır. Bunu da beraber çalıştığı müzisyenleri
					hem müzikal olarak hem de ekonomik olarak her zaman desteklemesinden
					kaynaklanmaktadır. Kısaca bu müzisyenlere baktığımızda orkestra
					içerisinde oturmuş bir uyumun ve güven ortamının sağlandığını hemen
					görebiliriz. Örneğin Johnny Hodges(Saksafon) ve Cootie Williams
					(Trompet), Juan Tizol (Pistonlu Trombon), Sonny Greer (Davul), Fred
					Guy (Gitar, Banjo) gibi Duke Ellington ortestrasının virtüözleri 10
					yılı aşkın senedir, Rex Stewart (Trompet) ise 5 senedir gruptadır.
					Duke Ellington’un grup içerisindeki bu virtüözlerin icra yeteneklerine
					göre besteler yapması ve yıllar içeresinde gelişen beste-icra uyumunu
					ve buna bağlı kalite ve başarasını yakalamasında bu müzisyenlere
					verdiği değer açıkça belli olmaktadır.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="mb-4 font-semibold text-orange-300 text-xl md:text-2xl">
					Albümün Kökeni ve Önemi
				</h2>
				<p className="mb-4 text-base md:text-lg">
					Bu albüm de Duke Ellington’un, Colombia Kayıt şirketi ve yayıncısı ile
					yaşadığı sıkıntıların ardından kayıt ve yayın haklarını değiştirdiği;
					1940-42 yılları arasında RCA Victorla yaptığı albümlerin bir
					koleksiyonunu oluşturmaktadır. Albüm’ün aslı Blanton-Webster Band
					adıyla 1986 yılında piyasaya çıkmıştır. Aynı yayın şirketi 9 ek şarkı
					daha ekleyerek 2003 yılında genişletilmiş bu albümü piyasaya
					sürmüştür.
				</p>
				<p className="mb-4 text-base md:text-lg">
					Bu albümü caz tarihi ve Duke Ellington için önemli kılan birçok etmen
					vardır. Duke Ellington da 1920’lerin ikinci yarısından itibaren
					başladığı “Jungle Style” müziği ve sonrasında klasik seviyesine
					oturduğu ve birçok jazz standardı çıkardığı 1930’lar sonrasında
					yenilenmiş bir tını arayışı içerisindeydi. Kayıt ve yayın şirketinin
					değişmesi ve teknolojik gelişmelerin de etkisiyle Ellington, daha
					yüksek bir müzik ve ses kalitesi hedeflemekteydi.
				</p>
			</section>

			<section className="mb-8 rounded-lg bg-white/10 p-6 backdrop-blur-sm">
				<h2 className="mb-4 font-semibold text-orange-300 text-xl md:text-2xl">
					Yenilikçiler: Billy Strayhorn ve Jimmy Blanton
				</h2>
				<p className="mb-4 text-base md:text-lg">
					1938 yılında gruba davet edilen 23 yaşındaki besteci ve aranjör Billy
					Strayhorn bunun en önemli göstergesidir. Duke’ün baş yardımcısı ve
					partneri olarak yıllarca Duke ile birlikte çalışacak olan Strayhorn,
					Duke’ün bu yıllardan sonraki tüm işlerinde aranjman veya besteci
					olarak yer alacaktır. Bu yıllardan sonraki tüm albümlerde akor
					yürüyüşleri ve aranjmanların daha üst seviyede bir cazı haber
					vermesindeki en dikkate değer adım olarak Strayhorn gösterilmektedir.
				</p>
				<p className="mb-4 text-base md:text-lg">
					Strayhorn’a ek olarak Jimmy Blanton bu yenilik adımlarının ikinci bir
					göstergesi olmaktadır. Ellington, Blanton’u iş sonrası gittiği bir
					gece kulübünde dinlemiştir ve o zamanlar Blanton 20 yaşındadır.
					Blanton’un kontrbas tekniği yaklaşık 5 sene sonra iyice yaygınlaşacak
					BOP hareketini önceden müjdeleyen ve caz bassında fazlasıyla yenilikçi
					hamleler barındırmaktadır. Duke ve Strayhorn, Blanton’un bu
					virtüözlüğünü oldukça ön plana çıkarmak için birçok şarkıda bass solo
					bölümleri ayırmışlardır. Blanton’u gruba dahil ettiği andan itibaren
					daha önce caz tarihinde görülmedik bir şekilde kontrbası ön plana
					çıkarmış, sahnede de en önce merkezi olacak şekilde Ben Webster’la
					birlikte yer vermiştir.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="mb-4 font-semibold text-orange-300 text-xl md:text-2xl">
					Ben Webster ve Grup Dinamikleri
				</h2>
				<p className="mb-4 text-base md:text-lg">
					Ben Webster ise Duke’un her zaman grubunda olmasını istediği bir
					sanatçıydı. Aynı yayın şirketi ile çalışan Cab Calloway Band’da
					olduğundan sadece bir iki şarkı kaydı için beraber çalışmışlardı ve
					kendi orkestrasına alamamıştı. Yayın şirketi değişince bu konuda
					rahatladı ve Ben Webster gibi bir müzisyeni -grubunda 4 tane kamışlı
					müzisyen olmasına rağmen- grubuna dahil etti. Ben Webster’ın bu kadar
					müzisyen varken gruba nasıl katkı sağlayacağı konusunda endişeli
					olmasına rağmen, onu motive ederek ve özgür bırakarak bu albümde caz
					tarihine Ben Webster soloları olarak kalacak sololar çıkmasını
					sağladı.
				</p>
				<p className="mb-4 text-base md:text-lg">
					Elimizde 75 şarkılık bir koleksiyon var ve bu şarkıların 7 tanesi Caz
					Standardı olmuştur.
				</p>
			</section>

			<section className="mb-8 rounded-lg bg-white/10 p-6 backdrop-blur-sm">
				<h2 className="mb-4 font-semibold text-orange-300 text-xl md:text-2xl">
					Seçilmiş Şarkılar: Ko-Ko
				</h2>
				<p className="mb-4 text-base md:text-lg">
					Ko-Ko değişik bir şarkı. Karanlık ve kötü haberler getiren bir girişin
					ardından tam bir Ellington kontrastlığı içerisinden geçerek parçalara
					ayrılıyor ve karşılıklı konuşmalarla toparlanan bir genel resim
					çiziyor. Tromboneların birbirine farklı noktalardan konuşmaları ve
					arkasındaki destekleyici üflemelilerle desteklenen swing ritmi
					dinleyeni farklı yerlerden yakalayacak şekilde atmosferi kuruyor. Bu
					şarkının bestesinin ve aranjmanın ileride Miles Davis’le Modal Caz
					olarak adlandırılacak yapıya atıf yaptığı da bilinmektedir.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="mb-4 font-semibold text-orange-300 text-xl md:text-2xl">
					Cotton Tail: Webster'ın Sessizliği ve Dinamikler
				</h2>
				<p className="mb-4 text-base md:text-lg">
					Cotton Tail çok cüretkâr bir giriş ile introsuz bir şekilde başlıyor.
					Nakarata tüm ekip hızlı ve kendinden emin bir keskinlikte girdiği
					halde, ilerlerken arkada buğu ve toz kaldırırcasına enstrümanlar
					kalıyor ve atışmalar başlıyor. Sonrasında ise Ben Webster bu toz duman
					koşuşturmanın arasında sakince solosunu alıyor ve tam kendisi gibi, o
					bütünleşmiş beden enstrüman uyumuyla yukarılara çıkıyor ve şarkı
					bambaşka bir evrene giriyor. Gunther Schuller, Webster'ın bu şarkıdaki
					solosu için, "müzikal fikirler dünyasının tamamı arasında dikkate
					değer bir denge bulduğunu: uzun ve etkileyici tutulan notalarla
					serpiştirilmiş sallanan sekiz notalı ifadeler, bunlardan bazıları
					tutkulu vibratolar ve sarsıntılarla süslenmiş, yumuşak tonlardan sıcak
					ve boğuk tınılara kadar uzanan tonal renklendirmeler, hepsi
					öngörülebiliri ve öngörülemez olanın zengin bir karışımı. Dinleyiciye,
					yerleşik değişikliklerden sapan, ancak melodik duyumsaması hala
					yerinde, dikkate değer bir mantık ve zanaatın solosu gibi geliyor. Bir
					solonun bir hikâye anlattığını söylemek klişe haline geldi, ancak
					Webster tam da bunu başarıyor: etkileyici bir giriş, anahtar
					ifadelerin geliştirilmesi, doruk noktasına doğru ilerleme, bunların
					hepsinde belirgin bir anlatı niteliği var. Şaşırtıcı bir şekilde, tek
					seferde çivilenmiş gibi <span className="text-orange-400">[1]</span>.
					Ellington’un her zaman yaptığı gibi ufak piyano dokunuşlarıyla
					yönlendirmesinin ardından, Sonny Dreer ve Blanton’un çığırından
					çıkmışçasına kaygan zeminde, kontrollü ve uyumsuz olarak ilerleyen bir
					enstrümanlar makinesi… aman allahım şarkı nerdeydi. Sanki nakarat
					aranıyor ve bulunmuyor gibi bir ilerleyiş. Eleştirmenler Duke’ün
					gizlice BOP’un kutsal mekanı Milton’s da gizlice takıldığını ve bu
					şarkıyı oradaki takılmalarından esinlenerek yazdığını bile
					düşünmekteler. Şarkı aslında “I got Rhythm” adlı başka bir standardın
					akor ilerleyişleri üzerine yapılmış melodilerden oluşmaktadır. Bir
					Jazz Standardı üzerine başka bir Caz Standardı… Ayrıca gelecek
					nesiller ve özellikle BOP için sürekli ele alınan ve geliştirilen bir
					eser. Bu şarkıyı Duke Ellington’dan başkası yazamazdı ayrıca O’nun
					sadece şarkı yazmak değil ayrıca enstrüman sololarını ve orkestra
					üyelerini ön plana çıkarak şekilde icrayı önemseyen duruşunun da bir
					simgesidir bu şarkı. Swing Dönemi’nin ortasında yüksek tempolu ve zor
					dans edilebilir böyle bir şarkıyı yapması da ne kadar ileri görüşlü
					modern caza ilham veren yönünü de açıkça göstermektedir.
				</p>
			</section>

			<section className="mb-8 rounded-lg bg-white/10 p-6 backdrop-blur-sm">
				<h2 className="mb-4 font-semibold text-orange-300 text-xl md:text-2xl">
					Chelsea Bridge: Empresyonist Bir Resim
				</h2>
				<p className="mb-4 text-base md:text-lg">
					Chelsea Bridge evde sakince oturup müzik dinlerken, bir resmin içine
					girmişçesine etrafınızı saracak denli empresyonist. Ellington’suz bir
					Billy Strayhorn imzası. Strayhorn şarkının isminde Turner’ın bir
					tablosundan esinlenmiş ve şarkının cazdan ziyade klasik müzikten,
					özellikle Ravel’den ilham aldığını söyleyen yazarlar var. Trombonların
					sisli atmosferi ile oluşturulan atmosfer, sislerin arasında çıkıp
					gizlenen hatlar gibi ilerlerken, resmin konturlarını belirginleştiren
					ve adeta dışarı vuran ressam ise Ben Webster. Webster’ın bu kısa
					solosu caz tarihine geçecek denli özel olmuştur. Sonrasında da bu
					şarkıya repertuarında defalarca yer ayırmış ve onunla özdeşleşmiş bir
					şarkı olmuştur. Yine bu şarkıda döneminin o kadar ötesindedir ki Miles
					Davis’in Besteci ve aranjörü Gil Evans şu yorumu yapmıştır: “Chelsea
					Bridge’i duyduğum anda onu denemek için harekete geçtim. Sadece bunu
					yaptım, şimdiye kadar yaptığım tek şey buydu; Billy Strayhorn’un
					yaptıklarını yapmayı denemek{" "}
					<span className="text-orange-400">[2]</span>.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="mb-4 font-semibold text-orange-300 text-xl md:text-2xl">
					In a Mellowtone ve Perdido: Swing'in Kalbi
				</h2>
				<p className="mb-4 text-base md:text-lg">
					Mevcut bir şarkının akor ilerleyişini alıp üzerine yeni eklemeler
					yapmak Duke Ellington’un çoğu bestesinde karşılaşılabilir bir
					durumdur. Fakat O, yeni melodiler hazırlarken akorların derinlerinde
					yatan kutsal müziği bir şekilde açığa çıkarmaktadır. In a Mellowtone
					da başka bir swing hiti olan “Rose Room” şarkısının akor ilerleyişleri
					üzerine hazırlanan bir şarkıdır. Günümüzde bir caz kombosu için döneme
					geri dönmek istenirse, bir zaman makinesi gibi Swing Çağı’na
					götürebilecek basitlikte ve güzellikte bir şarkıdır. Girişteki basit
					piyano solosu ve bass çağrısıyla sanki bir kalabalık toplaşmaya
					geçilen bir kapıdan geçilir ve içeride kamışlılarla bakır
					üflemelilerin karşılıklı konuşmalarına geçilir ve Cootie Williams’ın o
					parlak keskin ışıltılı solosunun yine koroya emirler veren sanki
					savaşa hazırlayan mükemmel bölümleri gelir. Daha alçak tondan ve
					yumuşak sihirli bir solo da Johnny Hodges ‘la devam eder ve müziğin
					sonlarında artık Swing Çağına girmiş bulunuruz. Şarkı ayrıca bu güzel
					swing riffleri içerisinde sololar için inanılmaz imkanlar yaratabilir
					özelliktedir. Bu da şarkının birçok küçük grupla çalınabilmesini ve
					çok sayıda icrasını mümkün kılmıştır. Özellikle Johnny Hodges ve John
					Coltrane’nin birlikte çaldıkları 7 dakikalık versiyonunda Coltrane’nin
					bu şarkıdaki inanılmaz sololarını dinleyebilirsiniz. Tabi ki
					partilerimizde bu şarkıya her zaman yer verdiğimiz Count Basie’nin
					çeşitli yorumları da bulunmaktadır. Bir de dans harici bu şarkıyı
					güzel bir Pazar sabahında özümsemek isterseniz Ben Webster ile Coleman
					Hawkins-Roy Eldridge ve Jo Jones’un sololarının bulunduğu 20 dakikalık
					versiyonunu da dinleyebilirsiniz.
				</p>
				<p className="mb-4 text-base md:text-lg">
					Yine basit yapısıyla ve tekrar eden riffler üzerine Duke kontrastlığı
					ile derinleştirilmiş dans şarkımız Perdido. Şarkı grubun pistonlu
					tromboncusu Juan Tizol tarafından bestelenmiş gözükmektedir. Bu
					dönemde radyo yayınları ile ilgili yaşanan sıkıntılardan dolayı Duke
					Ellington kendi adını kullanmamakta olmasına rağmen şarkının ismi ve
					latin tınısı bunu gerçekten Tizol’ün bestelediğini hissettirmektedir.
					Bu şarkı haricinde Caravan, Bakiff ve Conga Brava da Porto Riko asıllı
					müzisyen Tizol imzasını taşımaktadır. Tekrar eden bölümler ve
					karşılıklı müzisyen etkileşimlerinin kontrastlığı ile tipik bir Duke
					Ellington düzenlemesinden geçmiş gibi görünen şarkı, dönemin swing
					ruhu için çok uygun olmuştur. Akılda kalıcı melodilerle desteklenen
					güçlü swing hissiatı ve şarkının basitliğine ve bir iki hafta sonra
					olacak Pearl Harbor saldırısı ile Amerika’nın savaşa girmesine rağmen
					arada kaynamamış ve günümüze kadar bir swing hiti ve jazz standardı
					olmasını sağlamıştır. Ayrıca solo atışmalar için müzisyenlere mükemmel
					bir altyapı sağlamaktadır. Bir caz klasiği olan atışma ve jamler de
					her müzisyene basitliği ile tarafsız alan sunan bu şarkı da ne derece
					bir atışma olabileceğini görmek için, Illnois Jacquet ve Flip Philips
					ile bu şarkı üzerinden atışmalarını dinleyebilirsiniz.
				</p>
			</section>

			<section className="mb-8 rounded-lg bg-white/10 p-6 backdrop-blur-sm">
				<h2 className="mb-4 font-semibold text-orange-300 text-xl md:text-2xl">
					Sonuç: Dans-Müzik İlişkisi İçin Bir Harita
				</h2>
				<p className="mb-4 text-base md:text-lg">
					Albüm swing dansı için daha birçok şarkıyı barındırmasına rağmen
					hepsinin üzerine birer cümle de olsa söylemek isterim fakat bu yazı
					bir yerde bitmesi gerekiyor. Bu sebeple bence dans-müzik ilişkisi için
					bu album zengin içeriği ile çok uygun görünmektedir. Swing müziği ve
					Duke Ellington dünyasına giriş için çok güzel eserler
					barındırmaktadır. Duke Ellington’un birçok eleştirmene göre en verimli
					olduğu ve en iyi grubunu oluşturduğu bu dönem; ayrıca dansımızı
					oluşturan etmenlerin nasıl bir atmosfere sahip olduklarını da oldukça
					iyi açıklamaktadır. Blanton’un bu dönemin ortasında trajik ölümü,
					radyo yayıncılarının kısıtlamaları, ikinci dünya savaşına girilmesi
					gibi etmenler dolayısıyla bu efsane orkestra 1944 yılında dağılmıştır.
					Savaş sonrasında ise hiçbir şey eskisi gibi olmayacak, küçük caz
					komboları oluşarak BOP ve Jump Blues piyasada yerini alacaktır. Büyük
					orkestralar büyük darbe almasına rağmen Duke Ellington, büyük orkestra
					lideri olarak uzun yıllar daha devam edecektir.
				</p>
			</section>

			<section className="my-8">
				<p className="text-base md:text-lg">
					<span className="text-orange-400">[1]</span> 1940’larda Avrupa’da
					İkinci Dünya Savaşı başlamış, Amerika daha savaşa katılmamış ama plak
					üretiminde ve radyo yayınlarında bazı kısıtlamalar oluşmaya
					başlamıştır. Bu sebeple Büyük Orkestra’ların müzisyenlerinin ekonomik
					sıkıntıları artmıştır. Ayrıca Jazz sahnesinin popülerleşmesi ile
					birlikte, virtüözlerin kendi ayakları üzerinde durmaya ve özerk olmaya
					karşı arzuları artmaktadır. Küçük caz komboları ticari olmayan işler
					için -büyük işlere ek olarak- küçük jam kulüplerinde takılmaktadırlar.
					Milton’s Playhouse gibi müzisyenlerin takılacağı, akşamları herkesin
					özgürce jam yaptığı ve BOP müziğinin doğum yeri olacak böyle bir
					kulübün 1938 yılında açılmasını başka nedenler açıklamıyor. Çünkü
					Amerika savaş yüzünden radyo yayın vergilerinin artmasını, plak
					basımını azaltma gibi girişimlere henüz başlamış değil, bunlar 1940
					sonrasında olacak ve 1942’den itibaren savaşa girecektir. Minton’un
					başarısı müzik piyasasında sağlam bağları olması ve müzisyen
					sendikaları ile ilişkileri sayesinde müzisyenlere barında jam session
					yaptırıyor olabilmesindeydi. Yani müzisyenler tarafından bir talep
					vardı, özgürce müzik yapabilecekleri bir alan istiyorlardı.
				</p>
				<p className="text-base md:text-lg">
					<span className="text-orange-400">[2]</span> Örneğin Jimmie Lunceford
					Orkestrasın’da Sy Oliver ekonomik nedenlerle ayrılıyor ve bunun
					Lunceford’un cimriliği olduğunu düşünüyorlardı fakat yıllar sonra
					anlaşılıyor ki Lunceford’da Manajeri için çalmıştı yıllarca. Aynı
					şekilde Duke Ellington’da, yayın haklarını ve programlarını organize
					eden Irwing Mills’in Duke’ün reputasyonu en üst düzeydeyken bile
					ekonomik olarak Mills’in istismar ettiği bir ekonomik koşullar
					yaratmıştı.
				</p>
			</section>
		</div>
	);
}
