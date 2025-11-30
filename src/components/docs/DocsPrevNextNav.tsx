import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";

type DocPage = {
  path: string;
  label: string;
  description?: string;
};

const DOC_PAGES: DocPage[] = [
  {
    path: "/docs/getting-started",
    label: "Leksara Install",
    description: "Getting started with installation",
  },
  {
    path: "/docs/modules",
    label: "Key Modules",
    description: "Overview of Leksara key modules",
  },
  {
    path: "/docs/api-overview",
    label: "API Overview",
    description: "API surface and usage patterns",
  },
  {
    path: "/docs/modules/cart-board",
    label: "CartBoard",
    description: "Detect noisy review data for cart analysis",
  },
  {
    path: "/docs/modules/review-cleaner",
    label: "Review Cleaner",
    description: "Clean and normalize raw review text",
  },
  {
    path: "/docs/modules/review-miner",
    label: "Review Miner",
    description: "Extract patterns and signals from reviews",
  },
  {
    path: "/docs/modules/userbrush",
    label: "UserBrush",
    description: "Anonymize and mask user-sensitive data",
  },
  {
    path: "/docs/modules/review-chain",
    label: "Review Chain",
    description: "Build processing pipelines with Leksara",
  },
];

export default function DocsPrevNextNav() {
  const { pathname } = useLocation();

  const currentIndex = DOC_PAGES.findIndex((p) => p.path === pathname);
  if (currentIndex === -1) return null;

  const prev = DOC_PAGES[currentIndex - 1];
  const next = DOC_PAGES[currentIndex + 1];

  if (!prev && !next) return null;

  return (
    <nav className="mt-10 border-t border-neutral-5 pt-6">
      <div className="flex gap-3 md:justify-between">
        {/* Previous */}
        {prev ? (
          <Link
            to={prev.path}
            className="group w-full md:max-w-xs rounded-xl border border-neutral-5 bg-white px-4 py-3 text-left shadow-sm transition hover:border-primary-500 hover:shadow-md"
          >
            <p className="flex items-center gap-1 text-xs font-medium text-primary-500">
              <Icon
                icon="mdi:arrow-left"
                width={16}
                className="transition group-hover:-translate-x-0.5"
              />
              Previous
            </p>
            <p className="mt-1 text-sm font-semibold text-neutral-900">
              {prev.label}
            </p>
            {prev.description && (
              <p className="hidden lg:block mt-1 text-xs text-neutral-500 line-clamp-2">
                {prev.description}
              </p>
            )}
          </Link>
        ) : (
          <div className="hidden w-full md:block md:max-w-xs" />
        )}

        {/* Next */}
        {next ? (
          <Link
            to={next.path}
            className="group w-full md:max-w-xs rounded-xl border border-neutral-5 bg-white px-4 py-3 text-left shadow-sm transition hover:border-primary-500 hover:shadow-md md:text-right"
          >
            <p className="flex items-center justify-start gap-1 text-xs font-medium text-primary-500 md:justify-end">
              Next
              <Icon
                icon="mdi:arrow-right"
                width={16}
                className="transition group-hover:translate-x-0.5"
              />
            </p>
            <p className="mt-1 text-sm font-semibold text-neutral-900">
              {next.label}
            </p>
            {next.description && (
              <p className="hidden lg:block mt-1 text-xs text-neutral-500 line-clamp-2">
                {next.description}
              </p>
            )}
          </Link>
        ) : (
          <div className="hidden w-full md:block md:max-w-xs" />
        )}
      </div>
    </nav>
  );
}
