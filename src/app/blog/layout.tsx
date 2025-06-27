import CustomBlackLayout from "@/components/ui/CustomBlackLayout";

export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <CustomBlackLayout>{children}</CustomBlackLayout>;
}
