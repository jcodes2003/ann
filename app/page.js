'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const LandingPage = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'P ress the get started button below to get started';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + (fullText[index] || ''));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <header className="mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-4xl">❤️</span>
          </div>
        </div>
        <p className="text-lg mt-2" style={{ fontFamily: 'monospace' }}>{displayedText}</p>
      </header>
      <main className="text-center">
        <Link href="/secondpage" className="px-4 py-2 text-lg bg-white text-gray-900 rounded hover:bg-gray-200">
          Get Started
        </Link>
      </main>
      <footer className="mt-8">
        <p className="text-sm">© 2024 Your Joshua. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
