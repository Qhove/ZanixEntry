import type { SearchEngine } from "@/config/engines";

interface ShortcutChipProps {
  engine: SearchEngine;
}

export function ShortcutChip({ engine }: ShortcutChipProps) {
  return (
    <div className="flex items-center gap-1.5 bg-zinc-800 text-white rounded px-2 py-1 text-xs font-medium border border-white/10 whitespace-nowrap">
      <span className="opacity-70">{engine.icon}</span>
      <span>{engine.name}</span>
    </div>
  );
}
