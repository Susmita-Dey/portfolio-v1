"use client"
import ParticlesComponent from '@/components/particles';
import { workdata } from 'json/workdata';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const WorkCard = ({ work }) => {
    return (
        <div className="max-w-xs rounded-md overflow-hidden shadow-lg m-4 h-[25rem] bg-[#1b004d]">
            <Image className="w-full h-40 bg-white" src={work.image} alt={work.title} width={800} height={800} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{work.title}</div>
                <p className="text-gray-300 text-base">{work.description}</p>
            </div>
            <div className="px-6 pt-4 pb-8">
                <Link
                    href={work.repository}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Repository
                </Link>
                {work.preview && (
                    <a
                        href={work.preview}
                        className="ml-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Preview
                    </a>
                )}
            </div>
        </div>
    );
};

const Work = ({ work, selectedCategory }) => {
    // Filter the projects based on the selected category
    const filteredWork = selectedCategory === 'All' ? work : work.filter(item => item.category === selectedCategory);

    if (filteredWork.length === 0) {
        return (
            <h2 className="text-xl font-medium text-center mt-8 mb-10">Work in progress...</h2>
        );
    }

    return (
        <div className="flex flex-wrap justify-center">
            {filteredWork.map((item, index) => (
                <WorkCard key={index} work={item} />
            ))}
        </div>
    );
};

const MyWorkPage = () => {

    const [selectedCategory, setSelectedCategory] = useState('All');

    return (
        <>
            <ParticlesComponent />
            <div>
                <h1 className="text-3xl font-bold text-center mt-8 mb-10">My Work</h1>
                <div className="flex flex-row flex-wrap justify-center mt-8 mb-16">
                    <button
                        className={`px-4 py-2 border font-medium text-lg ${selectedCategory === 'All' ? 'active bg-white text-blue-950' : 'bg-blue-950 text-white'}`}
                        onClick={() => setSelectedCategory('All')}
                    >
                        All
                    </button>
                    <button
                        className={`px-4 py-2 border font-medium text-lg ${selectedCategory === 'Frontend' ? 'active bg-white text-blue-950' : 'bg-blue-950 text-white'}`}
                        onClick={() => setSelectedCategory('Frontend')}
                    >
                        Frontend
                    </button>
                    <button
                        className={`px-4 py-2 border font-medium text-lg ${selectedCategory === 'Full-Stack' ? 'active bg-white text-blue-950' : 'bg-blue-950 text-white'}`}
                        onClick={() => setSelectedCategory('Full-Stack')}
                    >
                        Full-Stack
                    </button>
                    <button
                        className={`px-4 py-2 border font-medium text-lg ${selectedCategory === 'Full-Stack' ? 'active bg-white text-blue-950' : 'bg-blue-950 text-white'}`}
                        onClick={() => setSelectedCategory('UI/UX')}
                    >
                        UI/UX
                    </button>
                    <button
                        className={`px-4 py-2 border font-medium text-lg ${selectedCategory === 'Full-Stack' ? 'active bg-white text-blue-950' : 'bg-blue-950 text-white'}`}
                        onClick={() => setSelectedCategory('No-Code')}
                    >
                        No-Code
                    </button>
                    <button
                        className={`px-4 py-2 border font-medium text-lg ${selectedCategory === 'Full-Stack' ? 'active bg-white text-blue-950' : 'bg-blue-950 text-white'}`}
                        onClick={() => setSelectedCategory('AI')}
                    >
                        AI
                    </button>
                    <button
                        className={`px-4 py-2 border font-medium text-lg ${selectedCategory === 'Full-Stack' ? 'active bg-white text-blue-950' : 'bg-blue-950 text-white'}`}
                        onClick={() => setSelectedCategory('App-Dev')}
                    >
                        Mobile Apps
                    </button>
                    <button
                        className={`px-4 py-2 border font-medium text-lg ${selectedCategory === 'Web3' ? 'active bg-white text-blue-950' : 'bg-blue-950 text-white'}`}
                        onClick={() => setSelectedCategory('Web3')}
                    >
                        Web3
                    </button>
                    <button
                        className={`px-4 py-2 border font-medium text-lg ${selectedCategory === 'Web3' ? 'active bg-white text-blue-950' : 'bg-blue-950 text-white'}`}
                        onClick={() => setSelectedCategory('Freelance')}
                    >
                        Freelance
                    </button>
                    <button
                        className={`px-4 py-2 border font-medium text-lg ${selectedCategory === 'Web3' ? 'active bg-white text-blue-950' : 'bg-blue-950 text-white'}`}
                        onClick={() => setSelectedCategory('Internship')}
                    >
                        Internship
                    </button>
                </div>
                <Work work={workdata} selectedCategory={selectedCategory} />
            </div>
        </>
    );
};

export default MyWorkPage;
