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
      <div className="bg-primary-500 text-white py-24 px-6">
        <div className="container grid grid-cols-1 gap-10 md:grid-cols-3 md:items-center">
          <div className="space-y-2 text-center md:text-left">
            <Logo variant="white" className="mx-auto md:mx-0 justify-center" />
            <p className="mt-3 font-medium">
              Automate text cleaning with precision
            </p>
            <p className="text-sm text-white/80">Leksara, 2025</p>
          </div>

          <div className="flex justify-center">
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map(({ icon, href, label }) => (
                <a
                  key={icon}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/30 backdrop-blur-md transition hover:bg-white/40"
                >
                  <Icon icon={icon} width={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-3 text-sm lg:text-base text-center md:text-left">
            <p className="flex items-center justify-center gap-2 md:justify-start">
              <Icon icon="vaadin-office" width={18} />
              <span>Fakultas Ilmu Komputer Universitas Brawijaya</span>
            </p>
            <p className="flex items-center justify-center gap-2 md:justify-start">
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

      <div className="py-4 text-sm lg:text-base text-neutral-1">
        <div className="container flex flex-col items-center justify-between gap-2 md:flex-row">
          <p className="text-center md:text-left">
            © 2025 Basic Computing Community FILKOM UB. All rights reserved.
          </p>

          <nav className="flex flex-wrap items-center justify-center gap-4">
            <a href="#" className="hover:text-primary-600">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary-600">
              Privacy Policy
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
