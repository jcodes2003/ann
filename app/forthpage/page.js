'use client'
import React, { useState, useRef } from 'react';

const ForthPage = () => {
    const [showQuestion, setShowQuestion] = useState(true);
    const [showCelebration, setShowCelebration] = useState(false);
    const [noButtonPosition, setNoButtonPosition] = useState({ top: '50%', left: '60%' });
    const noButtonRef = useRef(null);

    const handleYes = () => {
        setShowCelebration(true);
    };

    const handleNo = () => {
        const newTop = Math.random() * 80 + 10; // 10-90%
        const newLeft = Math.random() * 80 + 10; // 10-90%
        setNoButtonPosition({ top: `${newTop}%`, left: `${newLeft}%` });
    };

    const handleNoButtonMouseEnter = () => {
        const newTop = Math.random() * 80 + 10; // 10-90%
        const newLeft = Math.random() * 80 + 10; // 10-90%
        setNoButtonPosition({ top: `${newTop}%`, left: `${newLeft}%` });
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
            {showQuestion && !showCelebration && (
                <div className="text-center">
                    <h2 className="text-3xl mb-8">Would you love to put label on what we have right now?</h2>
                    <div className="space-x-4">
                        <button
                            onClick={handleYes}
                            className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                        >
                            Yes
                        </button>
                        <button
                            ref={noButtonRef}
                            onClick={handleNo}
                            onMouseEnter={handleNoButtonMouseEnter}
                            className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                            style={{
                                position: 'absolute',
                                top: noButtonPosition.top,
                                left: noButtonPosition.left,
                                transition: 'all 0.3s ease'
                            }}
                        >
                            No
                        </button>
                    </div>
                </div>
            )}
            {showCelebration && (
                <div className="text-center">
                    <h2 className="text-4xl mb-8">Yay! 🎉</h2>
                    <img src="/assets/images/celebration.gif" alt="Celebration" className="max-w-md mx-auto" />
                </div>
            )}
        </div>
    );
};

export default ForthPage;
