import React, { useState } from 'react';

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    { id: 1, title: 'Card 1', content: 'This is card 1' },
    { id: 2, title: 'Card 2', content: 'This is card 2' },
    { id: 3, title: 'Card 3', content: 'This is card 3' },
    { id: 4, title: 'Card 4', content: 'This is card 4' },
    { id: 5, title: 'Card 5', content: 'This is card 5' },
    { id: 6, title: 'Card 6', content: 'This is card 6' },
    { id: 7, title: 'Card 7', content: 'This is card 7' },
  ];

  const cardsToShow = 3;
  const maxIndex = Math.ceil(cards.length / cardsToShow) - 1;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 > maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? maxIndex : prevIndex - 1));
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-6 py-12">
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-4 rounded-full shadow-lg hover:bg-gray-600"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex-none w-full sm:w-1/3 px-3"
            >
              <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold mb-4">{card.title}</h2>
                <p className="text-gray-700">{card.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-4 rounded-full shadow-lg hover:bg-gray-600"
        onClick={nextSlide}
      >
        &gt;
      </button>
    </div>
  );
};

export default CardSlider;
