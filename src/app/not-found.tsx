// app/not-found.tsx
import CustomBlackLayout from "@/components/ui/CustomBlackLayout";
import Link from 'next/link';

export default function NotFound() {
  return (
    <CustomBlackLayout>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="font-bold text-4xl md:text-6xl text-orange-300 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          Üzgünüz, aradığınız sayfa bulunamadı.
        </h2>
        <p className="text-lg mb-8 text-center max-w-md">
          Adresi yanlış yazmış olabilirsiniz veya sayfa kaldırılmış olabilir.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-orange-300 text-zinc-950 font-medium rounded-md hover:bg-orange-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-950 focus:ring-orange-300"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </CustomBlackLayout>
  );
}
