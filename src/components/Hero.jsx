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
import { PromptInput } from "./PromptInput";

const navigation = [
  { name: "Home", href: "#", icon: FaRocket, color: "text-red-300" },
  { name: "Features", href: "#", icon: FaPuzzlePiece, color: "text-green-300" },
  {
    name: "FAQ's",
    href: "#",
    icon: BsFillPatchQuestionFill,
    color: "text-yellow-300",
  },
];

const suggestedPrompts = [
  "A thrilling adventure in a haunted mansion.",
  "A heartwarming tale about friendship overcoming adversity.",
  "An epic fantasy quest to recover a lost artifact.",
  "A mysterious journey through time and space.",
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [isDaytime, setIsDaytime] = useState(true); // Default to true assuming daytime
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

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      const currentHour = now.getHours();
      setIsDaytime(currentHour >= 6 && currentHour < 18); // Assuming day time is between 6 AM and 6 PM
      const options = {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
        timeZone: "Asia/Kolkata",
      };
      const formattedTime = now.toLocaleTimeString("en-US", options);
      setCurrentTime(formattedTime);
    };

    // Initial call
    updateCurrentTime();

    const interval = setInterval(updateCurrentTime, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 font-playwrite text-white">
      <img
        src={HeroImage}
        className="absolute inset-0 -z-10 h-max w-full object-cover"
      />
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"></div>
      <div className="px-6 lg:px-8  bg-black bg-opacity-40">
        <nav className="flex items-center justify-between pt-6">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <img className="h-12" src={Logo} alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-xl font-medium leading-6 ${item.color} flex items-center gap-x-1`}
              >
                <item.icon className="h-5 w-5" aria-hidden="true" />
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-xl flex items-center  gap-2 font-medium leading-6 text-white"
            >
              {currentTime}
              {isDaytime ? (
                <FaSun className="inline-block h-5 w-5 mr-1 text-yellow-200" />
              ) : (
                <FaMoon className="inline-block h-5 w-5 mr-1 text-gray-300" />
              )}
            </a>
          </div>
        </nav>
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel
            focus="true"
            className="fixed inset-0 z-10 overflow-y-auto bg-gray-900 px-6 py-6 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <a href="#" className="">
                <img className="h-10" src={Logo} alt="" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`-mx-3 block rounded-lg py-2 px-3 text-base font-medium leading-7 hover:bg-gray-400/10 flex items-center gap-x-1 ${item.color}`}
                    >
                      <item.icon className="h-5 w-5" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block  rounded-lg py-2.5 px-3 flex items-center gap-2 text-base font-medium leading-6 text-white hover:bg-gray-400/10"
                  >
                    {currentTime}
                    {isDaytime ? (
                      <FaSun className="inline-block h-5 w-5 mr-1 text-yellow-200" />
                    ) : (
                      <FaMoon className="inline-block h-5 w-5 mr-1 text-gray-300" />
                    )}
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
        <div className="mx-auto  max-w-4xl py-32 sm:py-48 lg:py-20">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full tracking-tight py-4 px-10 text-lg bg-black bg-opacity-40  leading-6 text-white ring-1 ring-white/10 hover:ring-white/20">
              Explore a world of creativity where kids can craft their own
              stories using vibrant, captivating images. Dive into imaginative
              adventures filled with endless possibilities. Start creating
              unforgettable tales today!{" "}
              <a href="#" className="font-medium text-white"></a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-medium  text-white lg:text-nowrap sm:text-6xl">
              Discover magical adventures
            </h1>
            <p className="mt-6 text-lg leading-8 text-white font-normal">
              Create Stories with Captivating Images for Kids
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md  font-sans bg-gradient-to-l from-rose-300 to-blue-300 px-3.5 py-1.5 text-base font-semibold leading-7 text-neutral-700 shadow-sm hover:bg-red-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-300"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-base font-medium leading-7 text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
            {/* story generator for parents */}
          <PromptInput/>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#gradient)"
            fillOpacity=".2"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="gradient"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
