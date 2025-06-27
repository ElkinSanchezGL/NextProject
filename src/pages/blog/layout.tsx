import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#FFF8F2] text-gray-900 font-sans">
      <header className="bg-orange-600 text-white p-5 shadow">
        <h1 className="text-2xl font-bold">Capi's Kitchen</h1>
      </header>
      <main className="p-6 max-w-4xl mx-auto">{children}</main>
      <footer className="bg-orange-100 text-center text-sm text-gray-600 p-4 mt-10">
        © 2025 Capi's Blog - Todas las recetas son 100% caseras 🍳
      </footer>
    </div>
  );
}
