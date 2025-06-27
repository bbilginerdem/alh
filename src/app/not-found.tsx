import CustomBlackLayout from "@/components/ui/CustomBlackLayout";

export default function NotFound() {
	return (
		<CustomBlackLayout>
			<div className="flex items-center justify-center">
				<h1 className="font-bold text-6xl text-white">Sayfa Bulunamadı</h1>
			</div>
		</CustomBlackLayout>
	);
}
