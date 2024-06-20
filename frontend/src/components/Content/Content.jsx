/* eslint-disable no-unused-vars */
import { Eye, ThumbsUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import { data } from "../../data/content/images";
import PopupSign from "../Footer/PopupSign";
import { useAppState } from "../../context/Context";
import Modal from "./Modal";
import { HOST } from "../../data";
const ContentCard = (item) => {
  console.log(item)
  const {openModal, setOpenModal} = useAppState(false);
  return (
    <div className="flex flex-col gap-1 ">
      <div className="flex vignette"
      onClick={() => {setOpenModal(true);localStorage.setItem("item", JSON.stringify(item));}}
      >
        <img
          src={item.images[Math.random() * item.images.length | 0]}
          // src={item.images[0]}
          alt="random"
          className="rounded-md w-[22rem] h-[16rem] object-cover"
          width={400}
          height={400}
        />
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className="flex">
            <h1 className="font-bold">{item.image_name}</h1>
          </div>
          <div className="flex gap-3 text-sm">
            <div className="flex gap-1 items-center">
              <ThumbsUp size={16} className="text-gray-500" />
              <h1 className="font-bold">
                {item.likes > 1000
                  ? `${(item.likes / 1000).toFixed(1)}k`
                  : item.likes}
              </h1>
            </div>
            <div className="flex gap-1 items-center">
              <Eye size={16} className="text-gray-500" />
              <h1 className="font-bold">
                {item.views > 1000
                  ? `${(item.views / 1000).toFixed(1)}k`
                  : item.views}
              </h1>
            </div>
          </div>
        </div>
        <div className="flex">
          <h1 className="text-sm text-gray-500 mt-[-2px]">
            {item.creator_name}
          </h1>
        </div>
      </div>
    </div>
  );
};
const Content = () => {
  const [signupActive, setSignupActive] = useState(true);
  const { recommendedStates, setRecommendedStates } = useAppState("");
  const [Cardsdata, setCardsData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const { openModal, setOpenModal } = useAppState(false);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${HOST}cards/all`);
      if(response.ok){
        const data = await response.json();
        setCardsData(data.properties);
        setOriginalData(data.properties);
        console.log(data.properties)
      }
    }
    fetchData();
  },[])
  useEffect(() => {
    if (recommendedStates !== "") {
      const filtered = originalData.filter((item) =>
        item.sort_by.includes(recommendedStates)
      );
      setCardsData(filtered.map((item) => item));
    } else {
      setCardsData(data.map((item) => item));
    }
  }, [recommendedStates]);
  return (
    <>
      <div className={`flex flex-col gap-8`}>
        <div className="flex flex-wrap gap-4">
          {Cardsdata.map((item, index) => (
            <ContentCard key={index} {...item} />
          ))}
        </div>
        {signupActive && <PopupSign />}
        {openModal && 
        <div className="flex relative top-0 right-0">
          <Modal/>
          </div>
          }
      </div>
    </>
  );
};

export default Content;
