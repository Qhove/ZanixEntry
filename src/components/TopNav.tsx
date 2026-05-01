import React from 'react';
import { StatusWidgets } from './widgets/StatusWidgets';

export const TopNav: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 w-full p-6 flex justify-between items-start z-30">
      <div id="nav-left" className="flex items-center gap-4">
        {/* Placeholder for left-side widgets */}
      </div>
      <div id="nav-right" className="flex items-center gap-4">
        <StatusWidgets />
      </div>
    </nav>
  );
};
