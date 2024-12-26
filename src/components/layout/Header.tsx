import React from 'react';
import { MenuIcon, BellIcon, SettingsIcon } from '../icons/icons';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <button className="p-2 rounded-md hover:bg-gray-100 lg:hidden">
              <MenuIcon className="h-6 w-6 text-gray-600" />
            </button>
            <h1 className="ml-2 text-2xl font-bold text-gray-900">AgroPastoralWatch</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100 relative">
              <BellIcon className="h-6 w-6 text-gray-600" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 transform translate-x-1/2 -translate-y-1/2"></span>
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <SettingsIcon className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}