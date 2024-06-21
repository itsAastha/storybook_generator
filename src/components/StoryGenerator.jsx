import { useState, useRef } from 'react';
import { FcSpeaker } from "react-icons/fc";
import { HiOutlineX, HiOutlineSparkles } from "react-icons/hi";


export default function StoryGenerator() {
  const [prompt, setPrompt] = useState('');
  const [isReading, setIsReading] = useState(false);
  const [readingSpeed, setReadingSpeed] = useState(1); // Default reading speed
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const timeoutRef = useRef(null);

  const storyText = `Write a story about a magical forest.
Create an adventure with talking animals.
Imagine a journey through space.
Tell a tale about a brave knight and a dragon.
Explore a day in the life of a friendly alien.`;

  const words = storyText.split(/\s+/);

  const handleStartReading = () => {
    setIsReading(true);
    readText();
  };

  const handlePauseReading = () => {
    setIsReading(false);
    clearTimeout(timeoutRef.current);
  };

  const handleResumeReading = () => {
    setIsReading(true);
    readText(currentWordIndex);
  };

  const handleStopReading = () => {
    setIsReading(false);
    clearTimeout(timeoutRef.current);
    setCurrentWordIndex(0);
  };

  const handleSpeedChange = (newSpeed) => {
    setReadingSpeed(newSpeed);
    if (isReading) {
      handlePauseReading();
      handleResumeReading();
    }
  };

  const readText = (startIndex = 0) => {
    timeoutRef.current = setTimeout(() => {
      setCurrentWordIndex(startIndex);
      if (startIndex < words.length - 1 && isReading) {
        readText(startIndex + 1);
      } else {
        setIsReading(false);
      }
    }, 60000 / readingSpeed); // Calculate duration based on reading speed
  };

  return (
    <div className="flex flex-col items-center justify-center py-16 w-screen p-20 bg-neutral-900">
      <div className="max-w-full w-full h-screen p-10 bg-neutral-800 bg-opacity-80 backdrop-blur-xl border border-gray-700 rounded-xl shadow-xl">
        <div className='flex items-center flex-row mb-8 gap-5'>
          <h2 className="text-4xl font-medium font-playwrite  flex items-center gap-2 text-left text-white">Story Time!<HiOutlineSparkles className='fill-yellow-300 text-yellow-500'/></h2>
          <div className="flex gap-10">
            {!isReading && (
              <button
                onClick={handleStartReading}
                className="flex items-center gap-2 bg-green-300 hover:bg-green-400 text-black font-medium py-2 px-5 rounded-2xl focus:outline-none focus:shadow-outline"
              >
                Start <FcSpeaker className="text-xl" />
              </button>
            )}
            {isReading && (
              <>
                <button
                  onClick={handlePauseReading}
                  className="flex items-center gap-2 bg-blue-300 hover:bg-blue-400 text-black font-medium py-2 px-5 rounded-2xl focus:outline-none focus:shadow-outline"
                >
                  Pause <FcSpeaker className="text-xl" />
                </button>
                <button
                  onClick={handleStopReading}
                  className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-5 rounded-2xl focus:outline-none focus:shadow-outline"
                >
                  Stop <HiOutlineX className="text-xl" />
                </button>
              </>
            )}
            <div className='flex items-center gap-2'>
            <label htmlFor="speedSelect" className="text-gray-300">Speed:</label>
            <select
              id="speedSelect"
              value={readingSpeed}
              onChange={(e) => handleSpeedChange(Number(e.target.value))}
              className="bg-gray-800 text-white rounded-md py-1 px-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value={0.5}>0.5x</option>
              <option value={1}>1x</option>
              <option value={1.5}>1.5x</option>
              <option value={2}>2x</option>
            </select></div>
          </div>
        </div>
        <p className="text-2xl w-1/2 text-gray-300 whitespace-pre-line">
          {words.map((word, index) => (
            <span key={index} className={index === currentWordIndex ? 'text-white font-bold' : 'text-gray-300'}>
              {word}{' '}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
