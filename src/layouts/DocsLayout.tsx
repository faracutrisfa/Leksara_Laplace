import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Icon } from "@iconify/react";
import TopNavbar from "../components/TopNavbar";
import DocsSidebarNav from "../components/docs/DocsSidebarNav";
import Footer from "../components/Footer";
import DocsPrevNextNav from "../components/docs/DocsPrevNextNav"; // ⬅️ tambahkan ini

export default function DocsLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  const drawerBaseClasses =
    "fixed top-0 left-0 z-50 h-full w-72 max-w-[80vw] bg-white border-r border-slate-200 shadow-xl transform transition-transform duration-300 ease-out md:hidden";
  const drawerStateClasses = isSidebarOpen
    ? " translate-x-0"
    : " -translate-x-full";

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-2">
      <TopNavbar />

      <main className="flex-1 pt-20 ">
        <div className="container flex gap-6 py-5 lg:gap-10 lg:py-10">
          <aside className="hidden md:block w-64 shrink-0 border-r border-primary-50/80 pr-4">
            <div className="sticky top-28">
              <div className="max-h-[calc(100vh-140px)] overflow-y-auto">
                <DocsSidebarNav />
              </div>
            </div>
          </aside>

          <section className="flex-1 min-w-0">
            {/* mobile button */}
            <div className="mb-4 flex items-center justify-between md:hidden">
              <button
                type="button"
                onClick={toggleSidebar}
                className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-sm hover:bg-slate-50"
              >
                <Icon icon="f7:menu" width={18} />
                <span>Docs menu</span>
              </button>
            </div>

            <Outlet />

            <DocsPrevNextNav />
          </section>
        </div>
      </main>

      {isSidebarOpen && (
        <button
          onClick={closeSidebar}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
        />
      )}

      <div className={drawerBaseClasses + drawerStateClasses}>
        <header className="flex items-center justify-between border-b px-4 py-4">
          <span className="text-sm font-medium">Documentation</span>
          <button onClick={closeSidebar}>
            <Icon icon="mdi:close" width={20} />
          </button>
        </header>

        <div className="h-[calc(100%-56px)] overflow-y-auto px-4 py-4">
          <DocsSidebarNav />
        </div>
      </div>

      <Footer />
    </div>
  );
}
