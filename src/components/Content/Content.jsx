/* eslint-disable no-unused-vars */
import { Eye, ThumbsUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import { data } from "../../data/content/images";
import PopupSign from "../Footer/PopupSign";
import { useAppState } from "../../context/Context";
const ContentCard = (item) => {
  return (
    <div className="flex flex-col gap-1 w-[22rem]">
      <div className="flex">
        <img
          // src={item.images[Math.random() * item.images.length | 0]}
          src={item.images[0]}
          alt="random"
          className="rounded-md w-[24rem] h-[16rem] object-cover"
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
  const [Cardsdata, setCardsData] = useState(data);
  useEffect(() => {
    if (recommendedStates !== "recommended") {
      const filtered = data.filter((item) =>
        item.sort_by.includes(recommendedStates)
      );
      setCardsData(filtered.map((item) => item));
    } else {
      setCardsData(data.map((item) => item));
    }
  }, [recommendedStates]);
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap gap-4">
        {Cardsdata.map((item, index) => (
          <ContentCard key={index} {...item} />
        ))}
      </div>
      {signupActive && <PopupSign />}
    </div>
  );
};

export default Content;
