import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Icon } from "@iconify/react";
import TopNavbar from "../components/TopNavbar";
import DocsSidebarNav from "../components/docs/DocsSidebarNav";
import Footer from "../components/Footer";

export default function DocsLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  const drawerBaseClasses =
    "fixed top-0 left-0 h-full w-64 bg-white border-r border-slate-200 shadow-xl z-50 transform transition-transform duration-300 ease-out md:hidden";
  const drawerStateClasses = isSidebarOpen
    ? " translate-x-0"
    : " -translate-x-full";

  return (
    <div className="min-h-screen text-neutral-4">
      <TopNavbar />

      <div className="flex py-5 lg:py-10">
        {/* Sidebar desktop (sticky) */}
        <aside className="hidden md:block w-64 border-r-4 border-primary-50">
          <div className="sticky top-36 px-5">
            <div className="max-h-[calc(100vh-120px)] overflow-y-auto">
              <DocsSidebarNav />
            </div>
          </div>
        </aside>

        {/* Main content */}
        <section className="flex-1">
          <div className="container">
            {/* Mobile: toggle button */}
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

            <main className="min-w-0">
              <Outlet />
            </main>
          </div>
        </section>
      </div>

      {/* Mobile overlay */}
      {isSidebarOpen && (
        <button
          type="button"
          onClick={closeSidebar}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
        />
      )}

      {/* Mobile drawer */}
      <div className={drawerBaseClasses + drawerStateClasses}>
        <header className="flex items-center justify-between border-b border-slate-200 px-4 py-4">
          <span className="text-sm font-medium">Documentation</span>
          <button type="button" onClick={closeSidebar}>
            <Icon icon="mdi:close" width={20} />
          </button>
        </header>

        <div className="h-[calc(100%-60px)] overflow-y-auto px-4 py-4">
          <DocsSidebarNav />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
