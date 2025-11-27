import { useState } from "react";
import { motion } from "framer-motion";

import Card1 from "../../public/assets/card/card1.webp";
import Card2 from "../../public/assets/card/card2.webp";
import Card3 from "../../public/assets/card/card3.webp";
import Card4 from "../../public/assets/card/card4.webp";
import Card5 from "../../public/assets/card/card5.webp";

import Detail1 from "../../public/assets/card/detail1.webp";
import Detail2 from "../../public/assets/card/detail2.webp";
import Detail3 from "../../public/assets/card/detail3.webp";
import Detail4 from "../../public/assets/card/detail4.webp";
import Detail5 from "../../public/assets/card/detail5.webp";

const FOLDERS = [
  { id: "cart", card: Card1, detail: Detail1 },
  { id: "review-cleaner", card: Card2, detail: Detail2 },
  { id: "user-brush", card: Card3, detail: Detail3 },
  { id: "review-miner", card: Card4, detail: Detail4 },
  { id: "review-chain", card: Card5, detail: Detail5 },
] as const;

const detailVariants = {
  closed: { opacity: 0, y: 50, rotate: 0, scale: 0.95 },
  open: { opacity: 1, y: -50, rotate: -6, scale: 1.1 },
} as const;

const detailTransition = {
  type: "spring",
  stiffness: 220,
  damping: 16,
} as const;
const cardTransition = { type: "spring", stiffness: 240, damping: 18 } as const;

type FolderCardProps = {
  active: boolean;
  onClick: () => void;
  card: string;
  detail: string;
};

function FolderCard({ active, onClick, card, detail }: FolderCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative inline-block w-full max-w-[320px] focus:outline-none"
    >
      <motion.img
        src={detail}
        alt=""
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        onMouseDown={(e) => e.preventDefault()}
        className="pointer-events-none absolute left-1/2 top-0 z-20 -translate-x-1/2"
        variants={detailVariants}
        initial={false}
        animate={active ? "open" : "closed"}
        transition={detailTransition}
      />

      <motion.img
        src={card}
        alt="card"
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        onMouseDown={(e) => e.preventDefault()}
        className="w-full h-auto select-none"
        whileHover={{ scale: 1.02, y: -4 }}
        transition={cardTransition}
      />
    </button>
  );
}

export default function CardSection() {
  const [activeId, setActiveId] = useState<string | null>("review-cleaner");

  return (
    <section className="relative pt-20 lg:pt-24">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div
            className="
              grid
              grid-cols-2
              sm:grid-cols-2
              lg:grid-cols-3
              gap-x-10 gap-y-16 lg:gap-y-20
              justify-items-center
            "
          >
            {FOLDERS.map(({ id, card, detail }) => (
              <FolderCard
                key={id}
                card={card}
                detail={detail}
                active={activeId === id}
                onClick={() => setActiveId((prev) => (prev === id ? null : id))}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
