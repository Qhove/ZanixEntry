import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { SearchEngine } from "@/config/engines";
import { Trash2, Download, Upload, Plus } from "lucide-react";

const STORAGE_KEY = 'zanix_custom_engines';

export const EngineManager: React.FC = () => {
  const [customEngines, setCustomEngines] = useState<SearchEngine[]>([]);
  const [newEngine, setNewEngine] = useState<Omit<SearchEngine, 'id'>>({
    name: '',
    url: '',
    shortcut: '',
    icon: '',
  });

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setCustomEngines(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse custom engines", e);
      }
    }
  }, []);

  const saveCustomEngines = (engines: SearchEngine[]) => {
    setCustomEngines(engines);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(engines));
    window.dispatchEvent(new Event('zanix-engines-updated'));
  };

  const addEngine = () => {
    if (!newEngine.name || !newEngine.url || !newEngine.shortcut) return;
    
    const id = newEngine.name.toLowerCase().replace(/\s+/g, '-');
    const engine: SearchEngine = {
      ...newEngine,
      id: `${id}-${Date.now()}`,
    };
    
    saveCustomEngines([...customEngines, engine]);
    setNewEngine({ name: '', url: '', shortcut: '', icon: '' });
  };

  const removeEngine = (id: string) => {
    saveCustomEngines(customEngines.filter(e => e.id !== id));
  };

  const exportConfig = () => {
    const data = JSON.stringify(customEngines, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'zanix-config.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const importConfig = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target?.result as string);
        if (Array.isArray(imported)) {
          saveCustomEngines(imported);
        }
      } catch (err) {
        alert("Invalid JSON configuration");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="space-y-6">
      <section>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-3">Custom Engines</h3>
        <div className="space-y-2 max-h-40 overflow-y-auto pr-2 custom-scrollbar">
          {customEngines.length === 0 && (
            <p className="text-xs text-zinc-500 italic">No custom engines added.</p>
          )}
          {customEngines.map((engine) => (
            <div key={engine.id} className="flex items-center justify-between bg-zinc-900/50 p-2 rounded border border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-zinc-400">
                  {engine.icon || engine.name[0]}
                </div>
                <div>
                  <p className="text-sm font-medium">{engine.name}</p>
                  <p className="text-[10px] text-zinc-500">!{engine.shortcut}</p>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 text-zinc-500 hover:text-red-400 hover:bg-red-400/10"
                onClick={() => removeEngine(engine.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-3">Add New Engine</h3>
        <div className="grid grid-cols-2 gap-2 mb-2">
          <Input 
            placeholder="Name (e.g. YouTube)" 
            value={newEngine.name}
            onChange={e => setNewEngine({...newEngine, name: e.target.value})}
            className="bg-zinc-900 border-zinc-800 h-9 text-sm"
          />
          <Input 
            placeholder="Shortcut (e.g. yt)" 
            value={newEngine.shortcut}
            onChange={e => setNewEngine({...newEngine, shortcut: e.target.value})}
            className="bg-zinc-900 border-zinc-800 h-9 text-sm"
          />
        </div>
        <Input 
          placeholder="URL (use %s for query)" 
          value={newEngine.url}
          onChange={e => setNewEngine({...newEngine, url: e.target.value})}
          className="bg-zinc-900 border-zinc-800 h-9 text-sm mb-2"
        />
        <div className="flex gap-2">
          <Input 
            placeholder="Icon (text/emoji)" 
            value={newEngine.icon}
            onChange={e => setNewEngine({...newEngine, icon: e.target.value})}
            className="bg-zinc-900 border-zinc-800 h-9 text-sm"
          />
          <Button onClick={addEngine} className="bg-zinc-100 text-zinc-950 hover:bg-white h-9 px-4">
            <Plus className="h-4 w-4 mr-2" />
            Add
          </Button>
        </div>
      </section>

      <section className="pt-4 border-t border-zinc-800 flex gap-2">
        <Button 
          variant="outline" 
          onClick={exportConfig}
          className="flex-1 bg-zinc-900 border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-white h-9"
        >
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
        <div className="flex-1 relative">
          <Input 
            type="file" 
            accept=".json" 
            onChange={importConfig}
            className="absolute inset-0 opacity-0 cursor-pointer z-10"
          />
          <Button 
            variant="outline" 
            className="w-full bg-zinc-900 border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-white h-9"
          >
            <Upload className="h-4 w-4 mr-2" />
            Import
          </Button>
        </div>
      </section>
    </div>
  );
};
