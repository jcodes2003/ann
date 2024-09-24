'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SecondPage = () => {
    const [isClient, setIsClient] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        { src: "/assets/images/image1.png", caption: "First pic together AHAHHAHA. pina joshua garcia na nga angol BWAHAHHAHA! 7/11 pani nya naa pas sati abikog kita ray mang lakaw ana ba HAHAHHAAHA" },
        { src: "/assets/images/image2.png", caption: "First padagat jesper yarn. Sorry dipa taka ma dalag maschada na dagat ana. saon taman kulang patas budget HAHAHAHA. But i've got a good time with you." },
        { src: "/assets/images/image3.png", caption: "Random Picture i took cuz you look so pretty and i think its our first coffee date together. Nasuko paka nako gi picturan taka HAHAHAHA. sorry na gud i love youu!!" },
        { src: "/assets/images/image4.png", caption: "First Fireworks display that we watched sa boulevard pani layo kayo tag gibaklay ba HAHAHA through worth it cuz we're together naman hehe." },
        { src: "/assets/images/image5.png", caption: "First simbang gabi nato love. pero naabtan ug gabuntag hahahaha nangakulbaan kay pagpauli natabo ang papa nimo HAHHAHAHAHAA!" },
        { src: "/assets/images/image6.png", caption: "First pa Eden nato kay naa natay service HAHAHA. chada kayo akong brown eyes ba? Chada kayg view but you're still the most beautiful view i've seen. I love youu!" },
        { src: "/assets/images/image7.png", caption: "First Puasa layo kayng binaklaya ba? but still one of the best time nga gauban ta" },
        { src: "/assets/images/image8.png", caption: "First watch natog sine nag linyaha pako ani without knowing taas man diay kaayong linya sa likod galingkod lang HAHAHAHHAA" },
        { src: "/assets/images/image10.png", caption: "First hard Copy na picture nato hehe. Sorry diko kabalo mag posing huhu Suko pa kayka nako kay diko kabalo mag posing huhuhu" },
        { src: "/assets/images/image9.png", caption: "First Concert nga ato untang matanaw ang Silent Sanctuary. Kaso wala nato natanaw kay dugay kaayo sila HAHAHAHAHA" },
    ];

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === images.length - 1 ? prevIndex : prevIndex + 1
        );
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
            <header className="mb-8">
                <h1 className="text-4xl font-bold">❤️</h1>
            </header>
            <main className="text-center">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center w-full max-w-2xl">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                        <span className="text-2xl text-red-500">❤️</span>
                    </div>
                    <p className="text-lg mt-2" style={{ fontFamily: 'monospace' }}>
                        {currentImageIndex === 0 && (
                            <>
                                Hi there, you might be wondering what this website all about. <br></br>
                                Well, its a website dedicated for you. <br></br>
                                We've been through a lot together and its been a year since we started. <br></br>
                                I don't even know where to start and i don't even know myself anymore. <br></br>
                                i do things that i never thought i would do. and this website is a proof of that.<br></br>
                                I'd never know na mag love pakog inani jud i've been doing things i find corny and cringe before. <br></br>
                                nagka jejemon nako ron sorry na gud HAHAHAHAHAHAHAH! <br></br>
                                This website is a collection of memories and moments that we've shared together. <br></br>
                            </>
                        )}
                        <br></br>
                        <div className="flex flex-col items-center">
                            <div className="relative w-[300px] h-[300px]">
                                <Image src={images[currentImageIndex].src} alt="Image" layout="fill" objectFit="cover" />
                            </div>
                            <p className="mt-2">{images[currentImageIndex].caption}</p>
                            {currentImageIndex < images.length - 1 && (
                                <button 
                                    onClick={handleNextImage}
                                    className="mt-4 px-4 py-2 text-lg bg-white text-gray-900 rounded hover:bg-gray-200"
                                >
                                    Next Image
                                </button>
                            )}
                        </div>
                        <br></br>
                        {currentImageIndex === images.length - 1 && (
                            <Link href="/thirdpage" className="px-4 py-2 text-lg bg-white text-gray-900 rounded hover:bg-gray-200">
                                Continue to the next page
                            </Link>
                        )}
                    </p>
                </div>
            </main>
        </div>
    );
};

export default SecondPage;
