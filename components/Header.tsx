import React from 'react';
import { APP_TITLE } from '../constants';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">{APP_TITLE}</h1>
          </div>
          <div className="flex items-center">
             <div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>
             <span className="text-xs font-medium text-slate-500">System Operational</span>
          </div>
        </div>
      </div>
    </header>
  );
};