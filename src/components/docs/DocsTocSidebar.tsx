const toc = [
  { id: "overview", label: "Overview" },
  { id: "environment", label: "Environment" },
  { id: "modules", label: "Leksara Modules" },
];

export default function DocsTocSidebar() {
  return (
    <nav className="sticky top-24 text-xs">
      <p className="mb-2 font-semibold text-slate-500">On this page</p>

      <ul className="space-y-1">
        {toc.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="block px-2 py-1 rounded hover:bg-slate-50"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
