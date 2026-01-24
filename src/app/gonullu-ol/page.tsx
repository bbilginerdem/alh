import type { Metadata } from "next";
import CustomBlackLayout from "@/components/ui/CustomBlackLayout";
import { VolunteerButton } from "@/components/VolunteerButton";

export const metadata: Metadata = {
	title: "Gönüllü Ol",
	description:
		"Ankara Lindy Hop topluluğuna gönüllü olarak katkıda bulunun. DJ'lik, grafik tasarım, etkinlik organizasyonu ve daha fazlası için ekibimize katılın.",
	openGraph: {
		title: "Gönüllü Ol | Ankara Lindy Hop",
		description:
			"Yeteneklerinle topluluğumuza katkı sağla. Gönüllü ekibimize katıl!",
		url: "https://ankaralindyhop.org/gonullu-ol",
	},
	alternates: {
		canonical: "/gonullu-ol",
	},
};

export default function VolunteerPage() {
	const teamMembers = [
		{
			id: "safety",
			role: "Sahne Güvenliği",
			description:
				"Sahne Güvenliği ekibi, fiziksel ve duygusal güvenliği sağlamak için etkinlik alanlarında dikkatli gözlem yapar, olası sorunlara öncülük eder ve katılımcıların rahatça dans edebileceği destekleyici bir ortam oluşturur.",
			icon: "🛡️",
		},
		{
			id: "dj",
			role: "DJler",
			description:
				"Etkinliklerde müzik çalarak dans atmosferini oluştururlar. Swing ve caz repertuarını araştırır, uygun müzik listeleri hazırlar ve etkinliklerde müzik akışını yönetirler.",
			icon: "🎧",
		},
		{
			id: "dancers",
			role: "Lindy Hop Dansçıları",
			description:
				"Gönüllü deneyimli dansçılar kimi zaman pratik sırasında diğer dansçılara destek olurken kimi zaman atölyelerle destek olurlar.",
			icon: "💃",
		},
		{
			id: "social-media",
			role: "Sosyal Medya & Grafik Tasarım",
			description:
				"Instagram, Facebook gibi platformlarda topluluk tanıtımı yapar. Etkinlik afişleri, sosyal medya paylaşımları ve görsel içerikleri hazırlar.",
			icon: "📱",
		},
		{
			id: "events",
			role: "Etkinlik Organizasyonu",
			description:
				"Haftalık pratikler, özel etkinlikler ve festivallerin planlanmasını, mekan rezervasyonlarını, davetiyeleri ve etkinlik akışını organize eder.",
			icon: "🎉",
		},
	];

	return (
		<CustomBlackLayout>
			<article className="mx-auto max-w-4xl px-4 py-8 text-zinc-100">
				<header className="mb-12 text-center">
					<h1 className="mb-4 font-bold text-3xl md:text-4xl lg:text-5xl">
						Ekibimiz
					</h1>
					<div className="mx-auto h-1 w-24 bg-orange-300" />
					<p className="mt-6 text-lg text-zinc-300">
						Ankara Lindy Hop Topluluğu, gönüllülük esasına dayalı olarak çalışan
						bir topluluktur.
					</p>
				</header>

				<div className="max-w-none text-base md:text-lg">
					<section className="mb-12 rounded-lg bg-white/5 p-6 backdrop-blur-sm">
						<h2 className="mb-4 font-semibold text-2xl text-orange-300 md:text-3xl">
							Gönüllülük Esası
						</h2>
						<p className="mb-4 text-base md:text-lg">
							Topluluğumuz tamamen gönüllü üyeler tarafından yürütülmektedir.
							Hiçbir üye maddi kazanç amacı gütmemektedir. Tüm çalışmalar sevgi,
							paylaşma ve dans kültürü yayma motivasyonuyla gerçekleşmektedir.
						</p>
					</section>

					<section className="mb-12">
						<h2 className="mb-8 text-center font-semibold text-2xl text-orange-300 md:text-3xl">
							Ekip Üyelerimizin Rolleri
						</h2>

						<div className="grid gap-6 md:grid-cols-2">
							{teamMembers.map((member) => (
								<div
									key={member.id}
									className="rounded-lg border border-orange-300/20 bg-white/5 p-6 transition-all hover:border-orange-300/40 hover:bg-white/10"
								>
									<div className="mb-4 flex items-center">
										<span className="mr-3 text-2xl">{member.icon}</span>
										<h3 className="font-semibold text-orange-300 text-xl">
											{member.role}
										</h3>
									</div>
									<p className="text-zinc-300">{member.description}</p>
								</div>
							))}
						</div>
					</section>

					<section className="mb-12 rounded-lg bg-white/5 p-6 backdrop-blur-sm">
						<h2 className="mb-4 font-semibold text-2xl text-orange-300 md:text-3xl">
							Nasıl Katkı Sağlayabilirsin?
						</h2>
						<p className="mb-6 text-base md:text-lg">
							Topluluğumuzun büyümesi ve gelişmesi için herkes katkı
							sağlayabilir. Yeteneklerin ne olursa olsun, bizim için değerlisin!
						</p>

						<div className="grid gap-4 md:grid-cols-2">
							<div className="rounded-md bg-orange-300/5 p-4">
								<h3 className="font-semibold text-orange-300">DJ</h3>
								<p className="mt-2 text-sm text-zinc-300">
									Swing ve caz müzikleriyle dans atmosferi oluştur
								</p>
							</div>
							<div className="rounded-md bg-orange-300/5 p-4">
								<h3 className="font-semibold text-orange-300">
									Grafik Tasarımcı
								</h3>
								<p className="mt-2 text-sm text-zinc-300">
									Afiş ve sosyal medya içerikleri hazırla
								</p>
							</div>
							<div className="rounded-md bg-orange-300/5 p-4">
								<h3 className="font-semibold text-orange-300">Organizasyon</h3>
								<p className="mt-2 text-sm text-zinc-300">
									Etkinlik planlama ve koordinasyonunda görev al
								</p>
							</div>
						</div>
					</section>

					<section className="text-center">
						<div className="rounded-lg border border-orange-300/30 bg-orange-300/5 p-8">
							<h2 className="mb-4 font-semibold text-2xl text-orange-300 md:text-3xl">
								Aramıza Katılmak İster misin?
							</h2>
							<p className="mx-auto mb-6 max-w-2xl text-zinc-300">
								Topluluğumuzun büyümesine katkı sağlamak istiyorsan, gönüllü
								olarak aramıza katılabilirsin. Yeteneklerin ne olursa olsun,
								seni aramızda görmek isteriz!
							</p>
							<VolunteerButton />
							<p className="mt-4 text-sm text-zinc-400">
								Gönüllü formunu doldurarak katkı sağlayabileceğin alanları
								belirtebilirsin
							</p>
						</div>
					</section>
				</div>
			</article>
		</CustomBlackLayout>
	);
}
