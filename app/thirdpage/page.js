'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const ThirdPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(true);
            setTimeout(() => {
                router.push('/forthpage');
            }, 10000);
        }, 100);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
            <div className="max-w-2xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
               <center> <p className="text-lg mt-2" style={{ fontFamily: 'monospace' }}>
                    We've got a lot of First Times together and will have more first times! I'd love to spend <br></br>
                    all my first time with you! It's more than a year since we've been together and we know each other. <br></br>
                    A lot of challenges, struggles and fights but we're still here. I know I've got my lackings in several aspects <br></br>
                    of being the man you wanted but you're still here. Thank you so much!! I'm so lucky we met. I want all of this <br></br>
                    to last forever. I love you so much! since you come to this page i would like to ask you if....
                    {isLoading && (
                        <span className="inline-block">
                            <span className="animate-pulse">...</span>
                            <span className="animate-pulse delay-100">...</span>
                            <span className="animate-pulse delay-200">...</span>
                        </span>
                    )}
                </p></center>
            </div>
        </div>
    )
}

export default ThirdPage
