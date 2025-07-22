import React, { useEffect, useState } from 'react';

function DarkModeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);
  return (
    <button
      onClick={() => setDark(!dark)}
      className="mb-8 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700"
    >
      {dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}

export default DarkModeToggle;
