import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
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

export default function TopNavbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <header className="py-3 sticky top-0 z-50 bg-white/70 backdrop-blur-md">
      <div className="container">
        <div className="flex items-center justify-between rounded-full border shadow-md border-slate-200 px-4 sm:px-6 lg:px-9 py-3.5 bg-white/60 backdrop-blur-md">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-4 bg-primary-50/60 backdrop-blur-sm rounded-full py-2 px-5">
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

            <span className="text-xs lg:text-sm text-slate-600 font-medium">
              v9.9.0
            </span>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-100 transition"
          >
            {open ? (
              <Icon icon="mdi:close" width="22" />
            ) : (
              <Icon icon="mdi:menu" width="22" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden mt-3 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-md shadow-sm py-3 px-4">
            <nav className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              {NAV_ITEMS.map((item) =>
                item.to ? (
                  <NavLink
                    key={item.label}
                    to={item.to}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      isActive
                        ? "px-3 py-2 rounded-xl bg-primary-50 text-primary-600"
                        : "px-3 py-2 rounded-xl hover:bg-slate-100"
                    }
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <button
                    key={item.label}
                    type="button"
                    onClick={closeMenu}
                    className="text-left px-3 py-2 rounded-xl hover:bg-slate-100"
                  >
                    {item.label}
                  </button>
                )
              )}

              <span className="mt-1 px-3 py-1.5 rounded-full bg-slate-100 text-xs text-slate-500 self-start">
                v9.9.0
              </span>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
