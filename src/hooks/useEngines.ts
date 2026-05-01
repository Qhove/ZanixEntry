import { useState, useEffect, useMemo } from 'react';
import { ENGINES } from '@/config/engines';
import type { SearchEngine } from '@/config/engines';

const STORAGE_KEY = 'zanix_custom_engines';

export function useEngines() {
  const [customEngines, setCustomEngines] = useState<SearchEngine[]>([]);

  const loadEngines = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setCustomEngines(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse custom engines", e);
      }
    } else {
      setCustomEngines([]);
    }
  };

  useEffect(() => {
    loadEngines();

    const handleUpdate = () => {
      loadEngines();
    };

    window.addEventListener('zanix-engines-updated', handleUpdate);
    return () => window.removeEventListener('zanix-engines-updated', handleUpdate);
  }, []);

  const allEngines = useMemo(() => [...ENGINES, ...customEngines], [customEngines]);

  return { allEngines, customEngines };
}
