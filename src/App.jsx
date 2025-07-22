import React from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-8">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
          🌟 Tailwind Components Kit
        </h1>
        <DarkModeToggle />
        <Navbar />
        <Button />
        <Card />
        {/* Add more components here */}
        <footer className="mt-12 text-center text-gray-400">
          MIT &copy; {new Date().getFullYear()} Redwan (Redwiat)
        </footer>
      </div>
    </div>
  );
}

export default App;
