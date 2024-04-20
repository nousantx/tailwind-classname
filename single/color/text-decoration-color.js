const tdColor = {
  ".decoration-inherit": "td-c-inherit",
  ".decoration-current": "td-c-currentColor",
  ".decoration-transparent": "td-c-transparent",
  ".decoration-black": "td-c-#000",
  ".decoration-white": "td-c-#fff",
  ".decoration-slate-50": "td-c-#f8fafc",
  ".decoration-slate-100": "td-c-#f1f5f9",
  ".decoration-slate-200": "td-c-#e2e8f0",
  ".decoration-slate-300": "td-c-#cbd5e1",
  ".decoration-slate-400": "td-c-#94a3b8",
  ".decoration-slate-500": "td-c-#64748b",
  ".decoration-slate-600": "td-c-#475569",
  ".decoration-slate-700": "td-c-#334155",
  ".decoration-slate-800": "td-c-#1e293b",
  ".decoration-slate-900": "td-c-#0f172a",
  ".decoration-slate-950": "td-c-#020617",
  ".decoration-gray-50": "td-c-#f9fafb",
  ".decoration-gray-100": "td-c-#f3f4f6",
  ".decoration-gray-200": "td-c-#e5e7eb",
  ".decoration-gray-300": "td-c-#d1d5db",
  ".decoration-gray-400": "td-c-#9ca3af",
  ".decoration-gray-500": "td-c-#6b7280",
  ".decoration-gray-600": "td-c-#4b5563",
  ".decoration-gray-700": "td-c-#374151",
  ".decoration-gray-800": "td-c-#1f2937",
  ".decoration-gray-900": "td-c-#111827",
  ".decoration-gray-950": "td-c-#030712",
  ".decoration-zinc-50": "td-c-#fafafa",
  ".decoration-zinc-100": "td-c-#f4f4f5",
  ".decoration-zinc-200": "td-c-#e4e4e7",
  ".decoration-zinc-300": "td-c-#d4d4d8",
  ".decoration-zinc-400": "td-c-#a1a1aa",
  ".decoration-zinc-500": "td-c-#71717a",
  ".decoration-zinc-600": "td-c-#52525b",
  ".decoration-zinc-700": "td-c-#3f3f46",
  ".decoration-zinc-800": "td-c-#27272a",
  ".decoration-zinc-900": "td-c-#18181b",
  ".decoration-zinc-950": "td-c-#09090b",
  ".decoration-neutral-50": "td-c-#fafafa",
  ".decoration-neutral-100": "td-c-#f5f5f5",
  ".decoration-neutral-200": "td-c-#e5e5e5",
  ".decoration-neutral-300": "td-c-#d4d4d4",
  ".decoration-neutral-400": "td-c-#a3a3a3",
  ".decoration-neutral-500": "td-c-#737373",
  ".decoration-neutral-600": "td-c-#525252",
  ".decoration-neutral-700": "td-c-#404040",
  ".decoration-neutral-800": "td-c-#262626",
  ".decoration-neutral-900": "td-c-#171717",
  ".decoration-neutral-950": "td-c-#0a0a0a",
  ".decoration-stone-50": "td-c-#fafaf9",
  ".decoration-stone-100": "td-c-#f5f5f4",
  ".decoration-stone-200": "td-c-#e7e5e4",
  ".decoration-stone-300": "td-c-#d6d3d1",
  ".decoration-stone-400": "td-c-#a8a29e",
  ".decoration-stone-500": "td-c-#78716c",
  ".decoration-stone-600": "td-c-#57534e",
  ".decoration-stone-700": "td-c-#44403c",
  ".decoration-stone-800": "td-c-#292524",
  ".decoration-stone-900": "td-c-#1c1917",
  ".decoration-stone-950": "td-c-#0c0a09",
  ".decoration-red-50": "td-c-#fef2f2",
  ".decoration-red-100": "td-c-#fee2e2",
  ".decoration-red-200": "td-c-#fecaca",
  ".decoration-red-300": "td-c-#fca5a5",
  ".decoration-red-400": "td-c-#f87171",
  ".decoration-red-500": "td-c-#ef4444",
  ".decoration-red-600": "td-c-#dc2626",
  ".decoration-red-700": "td-c-#b91c1c",
  ".decoration-red-800": "td-c-#991b1b",
  ".decoration-red-900": "td-c-#7f1d1d",
  ".decoration-red-950": "td-c-#450a0a",
  ".decoration-orange-50": "td-c-#fff7ed",
  ".decoration-orange-100": "td-c-#ffedd5",
  ".decoration-orange-200": "td-c-#fed7aa",
  ".decoration-orange-300": "td-c-#fdba74",
  ".decoration-orange-400": "td-c-#fb923c",
  ".decoration-orange-500": "td-c-#f97316",
  ".decoration-orange-600": "td-c-#ea580c",
  ".decoration-orange-700": "td-c-#c2410c",
  ".decoration-orange-800": "td-c-#9a3412",
  ".decoration-orange-900": "td-c-#7c2d12",
  ".decoration-orange-950": "td-c-#431407",
  ".decoration-amber-50": "td-c-#fffbeb",
  ".decoration-amber-100": "td-c-#fef3c7",
  ".decoration-amber-200": "td-c-#fde68a",
  ".decoration-amber-300": "td-c-#fcd34d",
  ".decoration-amber-400": "td-c-#fbbf24",
  ".decoration-amber-500": "td-c-#f59e0b",
  ".decoration-amber-600": "td-c-#d97706",
  ".decoration-amber-700": "td-c-#b45309",
  ".decoration-amber-800": "td-c-#92400e",
  ".decoration-amber-900": "td-c-#78350f",
  ".decoration-amber-950": "td-c-#451a03",
  ".decoration-yellow-50": "td-c-#fefce8",
  ".decoration-yellow-100": "td-c-#fef9c3",
  ".decoration-yellow-200": "td-c-#fef08a",
  ".decoration-yellow-300": "td-c-#fde047",
  ".decoration-yellow-400": "td-c-#facc15",
  ".decoration-yellow-500": "td-c-#eab308",
  ".decoration-yellow-600": "td-c-#ca8a04",
  ".decoration-yellow-700": "td-c-#a16207",
  ".decoration-yellow-800": "td-c-#854d0e",
  ".decoration-yellow-900": "td-c-#713f12",
  ".decoration-yellow-950": "td-c-#422006",
  ".decoration-lime-50": "td-c-#f7fee7",
  ".decoration-lime-100": "td-c-#ecfccb",
  ".decoration-lime-200": "td-c-#d9f99d",
  ".decoration-lime-300": "td-c-#bef264",
  ".decoration-lime-400": "td-c-#a3e635",
  ".decoration-lime-500": "td-c-#84cc16",
  ".decoration-lime-600": "td-c-#65a30d",
  ".decoration-lime-700": "td-c-#4d7c0f",
  ".decoration-lime-800": "td-c-#3f6212",
  ".decoration-lime-900": "td-c-#365314",
  ".decoration-lime-950": "td-c-#1a2e05",
  ".decoration-green-50": "td-c-#f0fdf4",
  ".decoration-green-100": "td-c-#dcfce7",
  ".decoration-green-200": "td-c-#bbf7d0",
  ".decoration-green-300": "td-c-#86efac",
  ".decoration-green-400": "td-c-#4ade80",
  ".decoration-green-500": "td-c-#22c55e",
  ".decoration-green-600": "td-c-#16a34a",
  ".decoration-green-700": "td-c-#15803d",
  ".decoration-green-800": "td-c-#166534",
  ".decoration-green-900": "td-c-#14532d",
  ".decoration-green-950": "td-c-#052e16",
  ".decoration-emerald-50": "td-c-#ecfdf5",
  ".decoration-emerald-100": "td-c-#d1fae5",
  ".decoration-emerald-200": "td-c-#a7f3d0",
  ".decoration-emerald-300": "td-c-#6ee7b7",
  ".decoration-emerald-400": "td-c-#34d399",
  ".decoration-emerald-500": "td-c-#10b981",
  ".decoration-emerald-600": "td-c-#059669",
  ".decoration-emerald-700": "td-c-#047857",
  ".decoration-emerald-800": "td-c-#065f46",
  ".decoration-emerald-900": "td-c-#064e3b",
  ".decoration-emerald-950": "td-c-#022c22",
  ".decoration-teal-50": "td-c-#f0fdfa",
  ".decoration-teal-100": "td-c-#ccfbf1",
  ".decoration-teal-200": "td-c-#99f6e4",
  ".decoration-teal-300": "td-c-#5eead4",
  ".decoration-teal-400": "td-c-#2dd4bf",
  ".decoration-teal-500": "td-c-#14b8a6",
  ".decoration-teal-600": "td-c-#0d9488",
  ".decoration-teal-700": "td-c-#0f766e",
  ".decoration-teal-800": "td-c-#115e59",
  ".decoration-teal-900": "td-c-#134e4a",
  ".decoration-teal-950": "td-c-#042f2e",
  ".decoration-cyan-50": "td-c-#ecfeff",
  ".decoration-cyan-100": "td-c-#cffafe",
  ".decoration-cyan-200": "td-c-#a5f3fc",
  ".decoration-cyan-300": "td-c-#67e8f9",
  ".decoration-cyan-400": "td-c-#22d3ee",
  ".decoration-cyan-500": "td-c-#06b6d4",
  ".decoration-cyan-600": "td-c-#0891b2",
  ".decoration-cyan-700": "td-c-#0e7490",
  ".decoration-cyan-800": "td-c-#155e75",
  ".decoration-cyan-900": "td-c-#164e63",
  ".decoration-cyan-950": "td-c-#083344",
  ".decoration-sky-50": "td-c-#f0f9ff",
  ".decoration-sky-100": "td-c-#e0f2fe",
  ".decoration-sky-200": "td-c-#bae6fd",
  ".decoration-sky-300": "td-c-#7dd3fc",
  ".decoration-sky-400": "td-c-#38bdf8",
  ".decoration-sky-500": "td-c-#0ea5e9",
  ".decoration-sky-600": "td-c-#0284c7",
  ".decoration-sky-700": "td-c-#0369a1",
  ".decoration-sky-800": "td-c-#075985",
  ".decoration-sky-900": "td-c-#0c4a6e",
  ".decoration-sky-950": "td-c-#082f49",
  ".decoration-blue-50": "td-c-#eff6ff",
  ".decoration-blue-100": "td-c-#dbeafe",
  ".decoration-blue-200": "td-c-#bfdbfe",
  ".decoration-blue-300": "td-c-#93c5fd",
  ".decoration-blue-400": "td-c-#60a5fa",
  ".decoration-blue-500": "td-c-#3b82f6",
  ".decoration-blue-600": "td-c-#2563eb",
  ".decoration-blue-700": "td-c-#1d4ed8",
  ".decoration-blue-800": "td-c-#1e40af",
  ".decoration-blue-900": "td-c-#1e3a8a",
  ".decoration-blue-950": "td-c-#172554",
  ".decoration-indigo-50": "td-c-#eef2ff",
  ".decoration-indigo-100": "td-c-#e0e7ff",
  ".decoration-indigo-200": "td-c-#c7d2fe",
  ".decoration-indigo-300": "td-c-#a5b4fc",
  ".decoration-indigo-400": "td-c-#818cf8",
  ".decoration-indigo-500": "td-c-#6366f1",
  ".decoration-indigo-600": "td-c-#4f46e5",
  ".decoration-indigo-700": "td-c-#4338ca",
  ".decoration-indigo-800": "td-c-#3730a3",
  ".decoration-indigo-900": "td-c-#312e81",
  ".decoration-indigo-950": "td-c-#1e1b4b",
  ".decoration-violet-50": "td-c-#f5f3ff",
  ".decoration-violet-100": "td-c-#ede9fe",
  ".decoration-violet-200": "td-c-#ddd6fe",
  ".decoration-violet-300": "td-c-#c4b5fd",
  ".decoration-violet-400": "td-c-#a78bfa",
  ".decoration-violet-500": "td-c-#8b5cf6",
  ".decoration-violet-600": "td-c-#7c3aed",
  ".decoration-violet-700": "td-c-#6d28d9",
  ".decoration-violet-800": "td-c-#5b21b6",
  ".decoration-violet-900": "td-c-#4c1d95",
  ".decoration-violet-950": "td-c-#2e1065",
  ".decoration-purple-50": "td-c-#faf5ff",
  ".decoration-purple-100": "td-c-#f3e8ff",
  ".decoration-purple-200": "td-c-#e9d5ff",
  ".decoration-purple-300": "td-c-#d8b4fe",
  ".decoration-purple-400": "td-c-#c084fc",
  ".decoration-purple-500": "td-c-#a855f7",
  ".decoration-purple-600": "td-c-#9333ea",
  ".decoration-purple-700": "td-c-#7e22ce",
  ".decoration-purple-800": "td-c-#6b21a8",
  ".decoration-purple-900": "td-c-#581c87",
  ".decoration-purple-950": "td-c-#3b0764",
  ".decoration-fuchsia-50": "td-c-#fdf4ff",
  ".decoration-fuchsia-100": "td-c-#fae8ff",
  ".decoration-fuchsia-200": "td-c-#f5d0fe",
  ".decoration-fuchsia-300": "td-c-#f0abfc",
  ".decoration-fuchsia-400": "td-c-#e879f9",
  ".decoration-fuchsia-500": "td-c-#d946ef",
  ".decoration-fuchsia-600": "td-c-#c026d3",
  ".decoration-fuchsia-700": "td-c-#a21caf",
  ".decoration-fuchsia-800": "td-c-#86198f",
  ".decoration-fuchsia-900": "td-c-#701a75",
  ".decoration-fuchsia-950": "td-c-#4a044e",
  ".decoration-pink-50": "td-c-#fdf2f8",
  ".decoration-pink-100": "td-c-#fce7f3",
  ".decoration-pink-200": "td-c-#fbcfe8",
  ".decoration-pink-300": "td-c-#f9a8d4",
  ".decoration-pink-400": "td-c-#f472b6",
  ".decoration-pink-500": "td-c-#ec4899",
  ".decoration-pink-600": "td-c-#db2777",
  ".decoration-pink-700": "td-c-#be185d",
  ".decoration-pink-800": "td-c-#9d174d",
  ".decoration-pink-900": "td-c-#831843",
  ".decoration-pink-950": "td-c-#500724",
  ".decoration-rose-50": "td-c-#fff1f2",
  ".decoration-rose-100": "td-c-#ffe4e6",
  ".decoration-rose-200": "td-c-#fecdd3",
  ".decoration-rose-300": "td-c-#fda4af",
  ".decoration-rose-400": "td-c-#fb7185",
  ".decoration-rose-500": "td-c-#f43f5e",
  ".decoration-rose-600": "td-c-#e11d48",
  ".decoration-rose-700": "td-c-#be123c",
  ".decoration-rose-800": "td-c-#9f1239",
  ".decoration-rose-900": "td-c-#881337",
  ".decoration-rose-950": "td-c-#4c0519",
};
