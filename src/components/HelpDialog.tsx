import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Info, ExternalLink, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HelpDialog: React.FC = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white hover:bg-zinc-800/50">
          <Info className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-zinc-950/90 backdrop-blur-xl border-zinc-800 text-zinc-100 max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold mb-4">Zanix Entry Help</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-2">Hints & Tips</h3>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li className="flex items-start gap-2">
                <code className="bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-100 font-mono text-xs">!w</code>
                <span>Search Wikipedia directly (e.g., <span className="italic text-zinc-400">!w quantum computing</span>)</span>
              </li>
              <li className="flex items-start gap-2">
                <code className="bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-100 font-mono text-xs">!g</code>
                <span>Search Google (e.g., <span className="italic text-zinc-400">!g vite react</span>)</span>
              </li>
              <li className="flex items-start gap-2">
                <code className="bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-100 font-mono text-xs">!yt</code>
                <span>Search YouTube</span>
              </li>
              <li className="flex items-start gap-2">
                <code className="bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-100 font-mono text-xs">/</code>
                <span>Focus the search bar instantly</span>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-2">Credits</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Built with <span className="text-zinc-200">React</span>, <span className="text-zinc-200">shadcn/ui</span>, and <span className="text-zinc-200">Lucide Icons</span>. Designed for speed and minimal distraction.
            </p>
          </section>

          <section className="pt-2 border-t border-zinc-800">
            <a 
              href="https://github.com/zanix-entry/zanix-entry" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors group"
            >
              <Code className="h-4 w-4" />
              <span>GitHub Repository</span>
              <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};
