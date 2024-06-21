import React, { useState } from 'react';
import { FaArrowCircleLeft,FaArrowCircleRight } from "react-icons/fa";

// Sample questions and options
const questions = [
  {
    question: "What's your favorite animal?",
    options: [
      { id: 1, text: 'Lion', imageUrl: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { id: 2, text: 'Elephant', imageUrl: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlcGhhbnR8ZW58MHx8MHx8fDA%3D' },
      { id: 3, text: 'Dolphin', imageUrl: 'https://images.unsplash.com/photo-1523670982602-6bb44fd1586e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { id: 4, text: 'Penguin', imageUrl: 'https://images.unsplash.com/photo-1475874619827-b5f0310b6e6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVuZ3VpbiUyMHdhdGVyY29sb3J8ZW58MHx8MHx8fDA%3D' },
      { id: 5, text: 'Tiger', imageUrl: 'https://images.unsplash.com/photo-1615963244664-5b845b2025ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGlnZXJ8ZW58MHx8MHx8fDA%3D' },
      { id: 6, text: 'Giraffe', imageUrl: 'https://images.unsplash.com/photo-1626548307930-deac221f87d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lyYWZmZXxlbnwwfHwwfHx8MA%3D%3D' },
      { id: 7, text: 'Monkey', imageUrl: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9ua2V5fGVufDB8fDB8fHww' },
      { id: 8, text: 'Koala', imageUrl: 'https://images.unsplash.com/photo-1579649554660-463ed1d72831?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a29hbGF8ZW58MHx8MHx8fDA%3D' },
      { id: 9, text: 'Panda', imageUrl: 'https://images.unsplash.com/photo-1525382455947-f319bc05fb35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGFuZGF8ZW58MHx8MHx8fDA%3D' },
      { id: 10, text: 'Zebra', imageUrl: 'https://plus.unsplash.com/premium_photo-1661849793437-70a6f9564372?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8emVicmF8ZW58MHx8MHx8fDA%3D' },
    ],
  },
  {
    question: 'Which superhero do you admire the most?',
    options: [
      { id: 1, text: 'Spider-Man', imageUrl: 'https://via.placeholder.com/150' },
      { id: 2, text: 'Wonder Woman', imageUrl: 'https://via.placeholder.com/150' },
      { id: 3, text: 'Batman', imageUrl: 'https://via.placeholder.com/150' },
      { id: 4, text: 'Superman', imageUrl: 'https://via.placeholder.com/150' },
      { id: 5, text: 'Captain America', imageUrl: 'https://via.placeholder.com/150' },
      { id: 6, text: 'Iron Man', imageUrl: 'https://via.placeholder.com/150' },
      { id: 7, text: 'Black Widow', imageUrl: 'https://via.placeholder.com/150' },
      { id: 8, text: 'Thor', imageUrl: 'https://via.placeholder.com/150' },
      { id: 9, text: 'Hulk', imageUrl: 'https://via.placeholder.com/150' },
      { id: 10, text: 'Captain Marvel', imageUrl: 'https://via.placeholder.com/150' },
    ],
  },
  {
    question: 'What is your favorite color?',
    options: [
      { id: 1, text: 'Red', imageUrl: 'https://via.placeholder.com/150' },
      { id: 2, text: 'Blue', imageUrl: 'https://via.placeholder.com/150' },
      { id: 3, text: 'Green', imageUrl: 'https://via.placeholder.com/150' },
      { id: 4, text: 'Yellow', imageUrl: 'https://via.placeholder.com/150' },
      { id: 5, text: 'Purple', imageUrl: 'https://via.placeholder.com/150' },
      { id: 6, text: 'Orange', imageUrl: 'https://via.placeholder.com/150' },
      { id: 7, text: 'Pink', imageUrl: 'https://via.placeholder.com/150' },
      { id: 8, text: 'Black', imageUrl: 'https://via.placeholder.com/150' },
      { id: 9, text: 'White', imageUrl: 'https://via.placeholder.com/150' },
      { id: 10, text: 'Brown', imageUrl: 'https://via.placeholder.com/150' },
    ],
  },
  {
    question: 'What is your favorite food?',
    options: [
      { id: 1, text: 'Pizza', imageUrl: 'https://via.placeholder.com/150' },
      { id: 2, text: 'Ice Cream', imageUrl: 'https://via.placeholder.com/150' },
      { id: 3, text: 'Burger', imageUrl: 'https://via.placeholder.com/150' },
      { id: 4, text: 'Sushi', imageUrl: 'https://via.placeholder.com/150' },
      { id: 5, text: 'Pasta', imageUrl: 'https://via.placeholder.com/150' },
      { id: 6, text: 'Chocolate', imageUrl: 'https://via.placeholder.com/150' },
      { id: 7, text: 'Fries', imageUrl: 'https://via.placeholder.com/150' },
      { id: 8, text: 'Cake', imageUrl: 'https://via.placeholder.com/150' },
      { id: 9, text: 'Tacos', imageUrl: 'https://via.placeholder.com/150' },
      { id: 10, text: 'Salad', imageUrl: 'https://via.placeholder.com/150' },
    ],
  },
  // Add more questions as needed
];

const Option = ({ option, onSelect, isSelected }) => (
  <div
    className={`flex flex-col items-center justify-center space-y-2 cursor-pointer transform transition-transform duration-300 ${
      isSelected ? 'scale-110' : ''
    }`}
    onClick={() => onSelect(option)}
  >
    <img
      src={option.imageUrl}
      alt={option.text}
      className="rounded-lg shadow-md object-cover"
      style={{ width: '250px', height: '250px' }}
    />
    <span className="text-lg font-medium text-neutral-100">{option.text}</span>
  </div>
);

const KidStoryMaker = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleOptionSelect = (selectedOption) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = selectedOption;
    setAnswers(updatedAnswers);
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmit = () => {
    // Optionally handle submission logic here
    // For now, let's just log the selected answers and proceed to next step
    console.log('Submitted Answers:', answers);
    // Example of proceeding to next step (generate story or show message)
    // For illustration purpose, let's simulate moving to the next screen after 1 second
    setTimeout(() => {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }, 1000);
  };

  return (
    <div className="w-full px-20 bg-neutral-900 py-20 mx-auto ">
      {currentQuestionIndex < questions.length && (
        <div className="mb-8 ">
          <h2 className="text-4xl font-medium text-center px-6 mb-14 font-serif bg-neutral-800 bg-opacity-80 p-5 text-neutral-200 backdrop-blur-xl border border-gray-700 rounded-xl shadow-xl">{questions[currentQuestionIndex].question}</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 gap-y-16">
            {questions[currentQuestionIndex].options.map((option) => (
              <Option
                key={option.id}
                option={option}
                onSelect={handleOptionSelect}
                isSelected={answers[currentQuestionIndex]?.id === option.id}
              />
            ))}
          </div>
          <div className="mt-10 flex justify-center gap-10 ">
            <button
              onClick={handlePrevious}
              className={`bg-gradient-to-l from-rose-300 to-blue-300 hover:bg-gray-600 py-2 px-6 flex items-center gap-2 text-gray-800 font-medium rounded focus:outline-none focus:shadow-outline ${
                currentQuestionIndex === 0 ? 'opacity-80 cursor-not-allowed' : ''
              }`}
              disabled={currentQuestionIndex === 0}
            >
              <FaArrowCircleLeft/>Previous
            </button>
            <button
              onClick={currentQuestionIndex === questions.length - 1 ? handleSubmit : handleNext}
              className={`${
                currentQuestionIndex === questions.length - 1 ? 'bg-gradient-to-l from-rose-300 to-blue-300' : 'bg-gradient-to-l from-green-300 to-blue-300'
              } hover:bg-green-600 text-gray-800 font-medium py-2 px-6 flex items-center gap-2  rounded focus:outline-none focus:shadow-outline`}
            >
              {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}<FaArrowCircleRight/>
            </button>
          </div>
        </div>
      )}
      {currentQuestionIndex === questions.length && (
        <div className="text-2xl font-bold text-center  font-playwrite text-neutral-100">
          Thank you for answering all questions! Would you like to generate a story now?
          <div className="mt-10  flex justify-center">
            <button className="bg-gradient-to-l from-rose-300 text-lg font-serif to-blue-300 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4">
              Yes
            </button>
            <button className="bg-gray-500 hover:bg-gray-600 text-lg font-serif text-white font-medium py-2 px-4 rounded focus:outline-none shadow-outline">
              No, later
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default KidStoryMaker;