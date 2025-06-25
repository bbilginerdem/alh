import CustomBlackLayout from "@/components/CustomBlackLayout";

export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <CustomBlackLayout>{children}</CustomBlackLayout>;
}
