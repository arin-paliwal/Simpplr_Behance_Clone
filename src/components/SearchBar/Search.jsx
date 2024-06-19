import { SlidersHorizontal,Search as SearchIcon, Image, ChevronDown } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { sort_by_search_bar } from '../../data/search';

const Search = () => {
  const [recommendedModalOpen, setRecommendedModalOpen] = useState(false)
  const [recommendedState, setRecommendedState] = useState(sort_by_search_bar[0].heading)
  const trigger = useRef(null);
  const dropdown = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (
        dropdown.current &&
        !dropdown.current.contains(e.target) &&
        trigger.current &&
        !trigger.current.contains(e.target)
      ) {
        setRecommendedModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);
  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-4 items-center">
        <div className="flex gap-2 hover:bg-gray-100 cursor-pointer duration-300 transform border p-3 justify-center items-center rounded-full w-[8rem]">
          <SlidersHorizontal size={17} className="text-gray-500" />
          <h1 className="font-semibold">Filter</h1>
        </div>
        <div className="flex border rounded-full bg-[#f9f9f9] w-full items-center">
          <div className="flex items-center p-3 gap-4 w-full">
            <SearchIcon size={20} className="" />
            <input
              type="text"
              placeholder="Search the creative world at work"
              className="outline-none w-full placeholder:font-bold placeholder:text-black bg-[#f9f9f9]"
            />
          </div>
          <div className="flex gap-2 border bg-white w-[12rem] justify-center p-2 rounded-full mr-1 items-center">
            <Image size={20} className="text-gray-500" />
            <h1 className="font-semibold">Search by Image</h1>
          </div>
        </div>
        <div
          className="flex hover:border-black cursor-pointer gap-2 border-2 transform duration-300 p-3 justify-center items-center rounded-full w-[15rem]"
          onClick={() => setRecommendedModalOpen(!recommendedModalOpen)}
          ref={trigger}
        >
          <h1 className="font-semibold">{recommendedState}</h1>
          <ChevronDown
            size={17}
            className={`${
              recommendedModalOpen
                ? "rotate-180 transform duration-300"
                : "transform duration-300"
            }`}
          />
        </div>
        {recommendedModalOpen && 
        <div className="absolute right-0 z-40 top-[8rem] bg-white shadow-lg py-4 rounded w-[13rem]"
        ref={dropdown}
        >
          <div className="flex flex-col ml-6 gap-2">
            {sort_by_search_bar.map((item, index) => (
              <h1
                key={index}
                className="font-semibold cursor-pointer hover:text-blue2"
                onClick={() => setRecommendedState(item.heading)}
              >
                {item.heading}
              </h1>
            ))}
          </div>
        </div>
        }
      </div>
      <hr className="w-full h-[1px] mt-4" />
    </div>
  );
}

export default Search