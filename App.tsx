import React from 'react';
import { Header } from './components/Header';
import { VisualProof } from './components/VisualProof';
import { APP_DESCRIPTION } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      <main className="flex-grow flex flex-col items-center justify-center p-4 sm:px-6 lg:px-8">
        <VisualProof />
      </main>
      
      <footer className="bg-white border-t border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} {APP_DESCRIPTION}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
