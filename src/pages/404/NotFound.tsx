import React, { useEffect, useState } from 'react';

const WordSearch = () => {
    const highlightIndices = [12, 13, 14, 26, 27, 28, 29, 33, 34, 35, 49, 50, 51, 52, 53];
    const [selectedLetters, setSelectedLetters] = useState<number[]>([]);

    useEffect(() => {
        let delay = 1500;
        highlightIndices.forEach((index) => {
            setTimeout(() => {
                setSelectedLetters((prev) => [...prev, index]);
            }, delay);
            delay += 500;
        });
    }, []);

    const letters = [
        'k', 'v', 'n', 'z', 'i', 'x', 'm', 'e', 't', 'a', 'x', 'l',
        '4','0','4','y','y','w','v','b','o','q','d','y','p','a','p','a','g','e',
        'v','j','a','n','o','t','s','c','e','w','v','x','e','p','c','f','h','q',
        'e','f','o','u','n','d','s','w','q','v','o','s','m','v','f','u'
    ];

    return (
        <div className="w-full md:w-1/2">
            <ul className="flex flex-wrap gap-1">
                {letters.map((letter, index) => {
                    const isSelected = selectedLetters.includes(index);
                    return (
                        <li
                            key={index}
                            className={`w-[12%] aspect-square flex items-center justify-center  text-opacity-70 uppercase font-light text-[1.6vw]
                                        transition-all duration-500 ease-in-out
                ${isSelected ? 'bg-primary   ' : 'bg-black bg-opacity-20'}
              `}
                        >
                            {letter}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

const NotFoundPage = () => {
    return (
        <div className="flex flex-row gap-4 w-11/12 max-w-[1600px] mx-auto mt-20 md:mt-32  font-sans">
            <WordSearch />
            <div className="w-full md:w-1/2 space-y-6 m-6 text-base md:text-lg leading-7">
                <h1 className="text-3xl md:text-5xl font-normal">Oops! Page not found.</h1>
                <p>We're sorry, but the page you are looking for doesn't seem to exist. It may have been moved, is temporarily unavailable, or no longer exists.</p>
                <p>Please check the URL for any typos, try using our search function, or head back to our homepage to explore other content.</p>
            </div>


        </div>
    );
};

export default NotFoundPage;
