import { Icon } from "@iconify/react";
import Logo from "./Logo";

const SOCIAL_LINKS = [
  {
    icon: "streamline-plump:tiktok-solid",
    href: "#",
    label: "Leksara on TikTok",
  },
  { icon: "mdi:youtube", href: "#", label: "Leksara on YouTube" },
  { icon: "ri:instagram-fill", href: "#", label: "Leksara on Instagram" },
  { icon: "ri:linkedin-fill", href: "#", label: "Leksara on LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="mt-16">
      <div className="bg-primary-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 md:items-start">
            <div className="space-y-2 text-center md:text-left">
              <Logo
                variant="white"
                className="mx-auto md:mx-0 justify-center md:justify-start"
              />
              <p className="mt-3 text-sm sm:text-base font-medium">
                Automate text cleaning with precision
              </p>
              <p className="text-xs sm:text-sm text-white/80">Leksara, 2025</p>
            </div>

            <div className="flex justify-center lg:justify-center">
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                {SOCIAL_LINKS.map(({ icon, href, label }) => (
                  <a
                    key={icon}
                    href={href}
                    aria-label={label}
                    className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/30 backdrop-blur-md transition hover:bg-white/40"
                  >
                    <Icon icon={icon} width={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm lg:text-base text-center md:text-left">
              <p className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
                <Icon icon="vaadin-office" width={18} />
                <span className="max-w-xs sm:max-w-none">
                  Fakultas Ilmu Komputer Universitas Brawijaya
                </span>
              </p>
              <p className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
                <Icon icon="ic:baseline-local-post-office" width={18} />
                <a
                  href="https://bccfilkom.ub.ac.id/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-white/90 hover:text-white"
                >
                  bccfilkom.ub.ac.id
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-200/60 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 text-xs sm:text-sm lg:text-base text-neutral-700">
          <div className="flex flex-col items-center justify-between gap-3 md:flex-row md:items-center">
            <p className="text-center md:text-left">
              © 2025 Basic Computing Community FILKOM UB. All rights reserved.
            </p>

            <nav className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a href="#" className="hover:text-primary-600">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary-600">
                Privacy Policy
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
