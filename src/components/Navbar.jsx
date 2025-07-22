import React from 'react';
import copyToClipboard from '../utils/copyToClipboard';

const code = `<nav className="bg-gray-900 px-4 py-3 flex justify-between items-center">
  <span className="text-white text-xl font-semibold">Logo</span>
  <ul className="flex gap-4">
    <li><a href="#" className="text-white hover:underline">Home</a></li>
    <li><a href="#" className="text-white hover:underline">About</a></li>
    <li><a href="#" className="text-white hover:underline">Contact</a></li>
  </ul>
</nav>`;

function Navbar() {
  return (
    <div className="mb-8">
      <h2 className="font-bold mb-2">Navbar</h2>
      <nav className="bg-gray-900 px-4 py-3 flex justify-between items-center">
        <span className="text-white text-xl font-semibold">Logo</span>
        <ul className="flex gap-4">
          <li><a href="#" className="text-white hover:underline">Home</a></li>
          <li><a href="#" className="text-white hover:underline">About</a></li>
          <li><a href="#" className="text-white hover:underline">Contact</a></li>
        </ul>
      </nav>
      <pre className="bg-gray-100 rounded p-2 my-2 text-sm overflow-x-auto">{code}</pre>
      <button
        onClick={() => copyToClipboard(code)}
        className="text-xs bg-gray-800 text-white px-2 py-1 rounded hover:bg-gray-600"
      >
        Copy Code
      </button>
    </div>
  );
}

export default Navbar;
