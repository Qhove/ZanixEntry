import { Button } from "./ui/button";
import type { SearchEngine } from "@/config/engines";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface EngineSelectorProps {
  activeEngine: SearchEngine;
  onEngineChange: (engine: SearchEngine) => void;
  engines: SearchEngine[];
}

export function EngineSelector({ activeEngine, onEngineChange, engines }: EngineSelectorProps) {
  return (
    <div className="flex justify-center mt-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "text-white hover:bg-white/20 hover:text-white transition-all duration-300",
              "bg-white/10 backdrop-blur-md border border-white/10 rounded-xl px-4 h-10 shadow-lg"
            )}
          >
            <span className="mr-2 font-mono text-sm opacity-70 flex items-center justify-center">
              {activeEngine.icon.startsWith('/') || activeEngine.icon.endsWith('.svg') ? (
                <img src={activeEngine.icon} alt="" className="w-4 h-4 object-contain" />
              ) : (
                activeEngine.icon
              )}
            </span>
            <span className="font-medium mr-2">{activeEngine.name}</span>
            <ChevronDown className="w-4 h-4 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          className="bg-zinc-900/90 backdrop-blur-xl border-white/10 text-white w-[480px] rounded-2xl p-2 grid grid-cols-3 gap-1"
          align="center"
        >
          {engines.map((engine) => (
            <DropdownMenuItem
              key={engine.id}
              onClick={() => onEngineChange(engine)}
              className={cn(
                "hover:bg-white/10 focus:bg-white/10 focus:text-white cursor-pointer py-2 px-3 rounded-xl flex items-center gap-2.5 transition-all duration-200",
                activeEngine.id === engine.id && "bg-white/20"
              )}
            >
              <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                {engine.icon.startsWith('/') || engine.icon.endsWith('.svg') ? (
                  <img src={engine.icon} alt="" className="w-4 h-4 object-contain" />
                ) : (
                  <span className="font-mono text-xs opacity-70">{engine.icon}</span>
                )}
              </div>
              <span className="text-xs font-medium truncate">{engine.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
