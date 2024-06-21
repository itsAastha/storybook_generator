import { useState } from 'react';

export default function StoryGenerator() {
  const [prompt, setPrompt] = useState('');
 

  return (
    <div className="flex flex-col items-center justify-center py-16 w-screen p-20 bg-neutral-900">
      <div className="max-w-full w-full h-screen p-10 bg-neutral-800 bg-opacity-80 backdrop-blur-xl border border-gray-700 rounded-xl shadow-xl">
        <h2 className="text-4xl font-medium w-1/2 font-playwrite text-left mb-4  text-white">Story Time!</h2>
      
        <p className="text-2xl w-1/2 text-gray-300 text-wrap">
        Write a story about a magical forest
    Create an adventure with talking animals
    Imagine a journey through space
    Tell a tale about a brave knight and a dragon
    Explore a day in the life of a friendly alien
        </p>
      </div>
    </div>
  );
}
