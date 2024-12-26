import React from 'react';
import { Header } from './components/layout/Header';
import { Toolbar } from './components/toolbar/Toolbar';
import { Dashboard } from './components/dashboard/Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Toolbar />
      <main className="max-w-7xl mx-auto">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;