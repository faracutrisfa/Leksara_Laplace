import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";

type NavItem = {
  label: string;
  to?: string;
  href?: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Guide", to: "/docs/getting-started" },
  { label: "Try it", href: "#" },
  { label: "About", href: "#" },
];

const baseLink =
  "px-3 py-1 rounded-full transition text-sm lg:text-base font-medium";
const activeLink = `${baseLink} text-primary-600 font-semibold`;
const normalLink = `${baseLink} hover:bg-slate-100 text-slate-700`;

const mobileMenuVariants = {
  hidden: { opacity: 0, y: -8, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -8, scale: 0.98 },
} as const;

export default function TopNavbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="container">
        <div className="mt-3 flex items-center justify-between rounded-full border border-slate-200 bg-white/80 px-4 py-2.5 shadow-sm backdrop-blur-md sm:px-6 lg:px-9">
          <Logo />

          <nav className="hidden items-center gap-4 rounded-full bg-primary-50/60 px-5 py-2 backdrop-blur-sm md:flex">
            {NAV_ITEMS.map((item) =>
              item.to ? (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  {item.label}
                </NavLink>
              ) : (
                <a key={item.label} href={item.href} className={normalLink}>
                  {item.label}
                </a>
              )
            )}

            <span className="text-xs font-medium text-slate-600 lg:text-sm">
              v9.9.0
            </span>
          </nav>
          
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-100 md:hidden"
          >
            <motion.span
              initial={false}
              animate={{ rotate: open ? 180 : 0, scale: open ? 1.05 : 1 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              {open ? (
                <Icon icon="mdi:close" width="22" />
              ) : (
                <Icon icon="mdi:menu" width="22" />
              )}
            </motion.span>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="mobile-menu"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mt-3 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-sm backdrop-blur-md md:hidden"
            >
              <nav className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                {NAV_ITEMS.map((item) =>
                  item.to ? (
                    <NavLink
                      key={item.label}
                      to={item.to}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        isActive
                          ? "rounded-xl bg-primary-50 px-3 py-2 text-primary-600"
                          : "rounded-xl px-3 py-2 hover:bg-slate-100"
                      }
                    >
                      {item.label}
                    </NavLink>
                  ) : (
                    <button
                      key={item.label}
                      type="button"
                      onClick={closeMenu}
                      className="rounded-xl px-3 py-2 text-left hover:bg-slate-100"
                    >
                      {item.label}
                    </button>
                  )
                )}

                <span className="mt-1 self-start rounded-full bg-slate-100 px-3 py-1.5 text-xs text-slate-500">
                  v9.9.0
                </span>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
