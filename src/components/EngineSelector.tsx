import { Button } from "./ui/button";
import { ENGINES } from "@/config/engines";
import type { SearchEngine } from "@/config/engines";
import { cn } from "@/lib/utils";

interface EngineSelectorProps {
  activeEngine: SearchEngine;
  onEngineChange: (engine: SearchEngine) => void;
}

export function EngineSelector({ activeEngine, onEngineChange }: EngineSelectorProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-6">
      {ENGINES.map((engine) => (
        <Button
          key={engine.id}
          variant="ghost"
          size="sm"
          onClick={() => onEngineChange(engine)}
          className={cn(
            "text-white hover:bg-white/20 hover:text-white transition-all duration-300",
            "bg-white/10 backdrop-blur-md border border-white/10",
            activeEngine.id === engine.id && "bg-white/30 border-white/30 ring-2 ring-white/50"
          )}
        >
          <span className="mr-2 font-mono text-xs opacity-70">{engine.icon}</span>
          {engine.name}
        </Button>
      ))}
    </div>
  );
}
