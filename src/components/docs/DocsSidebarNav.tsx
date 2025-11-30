import { NavLink, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";

type PrimaryItemKey = "install" | "key-modules" | "api-overview";

interface PrimaryItem {
  key: PrimaryItemKey;
  label: string;
  to: string;
  icon: string;
}

interface MethodItem {
  label: string;
}

interface ModuleItem {
  key: string;
  label: string;
  to: string;
  methods?: MethodItem[];
}

const PRIMARY_ITEMS: PrimaryItem[] = [
  {
    key: "install",
    label: "Leksara Install",
    to: "/docs/getting-started",
    icon: "ri:install-fill",
  },
  {
    key: "key-modules",
    label: "Key Modules",
    to: "/docs/modules",
    icon: "si:featured-playlist-line",
  },
  {
    key: "api-overview",
    label: "API Overview",
    to: "/docs/api-overview",
    icon: "material-symbols:quickreply-outline",
  },
];

const MODULE_ITEMS: ModuleItem[] = [
  {
    key: "cartboard",
    label: "CartBoard",
    to: "/docs/modules/cart-board",
    methods: [
      { label: "get_flag" },
      { label: "get_stats" },
      { label: "noise_detect" },
    ],
  },
  {
    key: "review-cleaner",
    label: "Review Cleaner",
    to: "/docs/modules/review-cleaner",
    methods: [
      { label: "remove_tags" },
      { label: "case_normal" },
      { label: "remove_stopwords" },
      { label: "remove_ehitespaces" },
      { label: "remove_digits" },
      { label: "remove_puntutations" },
      { label: "replace_url" },
      { label: "remove_emoji" },
    ],
  },
  {
    key: "review-miner",
    label: "Review Miner",
    to: "/docs/modules/review-miner",
    methods: [
      { label: "replace_rating" },
      { label: "shorten_elongation" },
      { label: "replace_acronyms" },
      { label: "normalize_slangs" },
      { label: "expand_contraction" },
      { label: "word_normalization" },
    ],
  },
  {
    key: "userbrush",
    label: "UserBrush",
    to: "/docs/modules/userbrush",
    methods: [
      { label: "replace_phone" },
      { label: "replace_email" },
      { label: "replace_adress" },
      { label: "replace_id" },
    ],
  },
  {
    key: "review-chain",
    label: "Review Chain",
    to: "/docs/modules/review-chain",
    methods: [
      { label: "leksara" },
      { label: "reviewchain(class)" },
      { label: "get_present" },
      { label: "logging" },
    ],
  },
];

const PRIMARY_BASE =
  "flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-[11px] sm:text-xs md:text-[13px] font-medium transition";
const PRIMARY_ACTIVE = " bg-primary-500 text-white shadow-sm";
const PRIMARY_INACTIVE =
  " text-slate-600 hover:bg-slate-100 active:bg-slate-100/80";

const MODULE_BASE =
  "block w-full rounded-md px-1.5 py-1.5 text-[11px] sm:text-xs md:text-[13px] transition";
const MODULE_ACTIVE = " text-primary-600 font-semibold";
const MODULE_INACTIVE = " text-slate-600 hover:text-primary-600";

function isPrimaryActive(key: PrimaryItemKey, pathname: string): boolean {
  switch (key) {
    case "install":
      return pathname === "/docs/getting-started";
    case "key-modules":
      return pathname === "/docs/modules";
    case "api-overview":
      return pathname.startsWith("/docs/api-overview");
    default:
      return false;
  }
}

export default function DocsSidebarNav() {
  const { pathname } = useLocation();
  const activeModuleKey = MODULE_ITEMS.find((m) => m.to === pathname)?.key;

  return (
    <nav
      className="
        space-y-6 px-1 pb-4 pt-1 text-sm
        md:max-h-[calc(100vh-96px)] md:overflow-y-auto
      "
    >
      {/* Search */}
      <div className="relative">
        <Icon
          icon="mdi:magnify"
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          width={18}
        />
        <input
          type="text"
          placeholder="Search"
          className="
            w-full rounded-lg border-2 border-neutral-5 bg-white
            px-9 py-2 text-xs sm:text-sm
            placeholder:text-slate-400
            focus:border-primary-500 focus:outline-none
          "
        />
      </div>

      {/* Primary items */}
      <div className="space-y-2">
        <p className="px-1 text-[11px] font-semibold uppercase tracking-wide text-neutral-400 md:text-[10px]">
          Quick access
        </p>

        {PRIMARY_ITEMS.map((item) => {
          const active = isPrimaryActive(item.key, pathname);

          return (
            <NavLink
              key={item.key}
              to={item.to}
              className={
                PRIMARY_BASE + (active ? PRIMARY_ACTIVE : PRIMARY_INACTIVE)
              }
            >
              <Icon
                icon={item.icon}
                width={16}
                className={active ? "text-white" : "text-neutral-4"}
              />
              <span className="truncate">{item.label}</span>
            </NavLink>
          );
        })}
      </div>

      {/* Modules */}
      <div className="space-y-2 text-xs md:text-sm">
        <p className="px-1 text-[11px] font-semibold uppercase tracking-wide text-neutral-400 md:text-[10px]">
          Modules
        </p>

        {MODULE_ITEMS.map((module) => {
          const isActive = activeModuleKey === module.key;

          return (
            <div key={module.key} className="space-y-1">
              <NavLink
                to={module.to}
                className={
                  MODULE_BASE + (isActive ? MODULE_ACTIVE : MODULE_INACTIVE)
                }
              >
                {module.label}
              </NavLink>

              {isActive && module.methods && (
                <ul className="ml-4 mt-1 space-y-2 border-l border-primary-200 pl-3 text-[11px] text-slate-500">
                  {module.methods.map((method) => (
                    <li key={method.label} className="leading-4">
                      {method.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
