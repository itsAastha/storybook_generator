import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  FaSun,
  FaMoon,
  FaRocket,
  FaPuzzlePiece,
  FaShoppingCart,
  FaBuilding,
  FaRegLightbulb,
} from "react-icons/fa"; // Importing icons
import { BsFillPatchQuestionFill, BsStars } from "react-icons/bs";
import HeroImage from "../images/Hero.png";
import Logo from "../images/logo.gif";


const suggestedPrompts = [
  "A thrilling adventure in a haunted mansion.",
  "A heartwarming tale about friendship overcoming adversity.",
  "An epic fantasy quest to recover a lost artifact.",
  "A mysterious journey through time and space.",
];


export const PromptInput = () => {
  const [prompt, setPrompt] = useState("");
  const [story, setStory] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const generateStory = () => {
    // Placeholder for story generation logic, replace with actual implementation
    setStory(`This is a generated story based on your prompt: ${prompt}`);
  };

  const handlePromptChange = (e) => {
    const text = e.target.value;
    setPrompt(text);
    setWordCount(text.trim().split(/\s+/).filter(Boolean).length);
  };

  const handleSuggestionClick = (suggestion) => {
    setPrompt((prevPrompt) => suggestion + " " + prevPrompt); // Add the selected suggestion to the existing prompt
  };

  const handleSuggestionsHover = () => {
    setShowSuggestions(true);
  };

  const handleSuggestionsLeave = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setShowSuggestions(false);
    }
  };

  

  return (
    <div>  <div className="mt-10 flex flex-col bg-neutral-100 rounded-2xl  items-center ">
    <div className="relative border-b border-neutral-200  w-full">
      <button
        className="absolute top-4 right-4 flex items-center gap-1 rounded-md  px-3 py-1 text-xs text-neutral-600 text-opacity-70 "
        onMouseEnter={handleSuggestionsHover}
        onMouseLeave={handleSuggestionsLeave}
      >
        Tips <FaRegLightbulb />
      </button>
      {showSuggestions && (
        <div
          className="absolute top-10 right-2 bg-white border border-gray-200 rounded-md shadow-md p-2 text-sm text-gray-700 z-10"
          onMouseEnter={handleSuggestionsHover}
          onMouseLeave={handleSuggestionsLeave}
        >
          <p className="font-semibold mb-1">Suggested Prompts:</p>
          {suggestedPrompts.map((prompt, index) => (
            <p
              key={index}
              className="mb-1 italic cursor-pointer hover:text-green-300"
              onClick={() => handleSuggestionClick(prompt)}
            >
              {prompt}
            </p>
          ))}
        </div>
      )}
      <div className="p-5">
        <textarea
          value={prompt}
          onChange={handlePromptChange}
          placeholder="I want a story about..."
          className="resize-none overflow-hidden bg-neutral-100 h-14 w-full placeholder:text-neutral-400 placeholder:font-serif placeholder:text-base pl-4 rounded-md py-2 text-black text-base focus:outline-none"
          rows={2}
        />
      </div>
      <div className="absolute font-serif bottom-1 right-3 text-sm text-neutral-400">
        {wordCount}/150
      </div>
    </div>
    <button
      onClick={generateStory}
      className="rounded-md flex items-center gap-2 m-4 font-sans bg-red-300 px-10  py-2 text-lg font-semibold leading-7 text-neutral-700 shadow-sm hover:bg-green-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-300"
    >
      Submit <BsStars />
    </button>
  </div>
  {story && (
    <div className="mt-6 bg-yellow-100 rounded-lg p-6 shadow-md">
      <div className="text-2xl text-pink-600 font-bold mb-4">
        Story Time!
      </div>
      <div className="text-lg leading-8 text-gray-800 font-medium">
        {story}
      </div>
      
    </div>
  )}</div>
  )
}
