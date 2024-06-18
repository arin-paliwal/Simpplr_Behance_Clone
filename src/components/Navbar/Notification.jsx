import { Bell } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const NotificationItem = ({ update_title, update, timestamp }) => (
  <div className="w-full flex flex-col gap-3 p-3 bg-white dark:bg-black">
    <div className="flex flex-col gap-1">
      <div className="text-gray-500 text-sm dark:text-gray-400">
        {update_title}
      </div>
      <div className="font-semibold text-gray-900 dark:text-white">
        {update}
      </div>
    </div>
    <div className="text-xs text-blue-600 dark:text-blue-500">
      {timeAgo(timestamp)}
    </div>
  </div>
);

const Notifications = () => {
  const [openModal, setOpenModal] = useState(false);
  const [responseData, setResponse] = useState({});
  const dropdown = useRef(null);
  const trigger = useRef(null);

  const handleMouseEnter = () => {
    setOpenModal(true);
  };

  const handleMouseLeave = () => {
    setOpenModal(false);
  };

  return (
    <div className="">
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={trigger}
        id="dropdownNotificationButton"
        data-dropdown-toggle="dropdownNotification"
        className="relative inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 p-3 rounded-md gap-2 focus:outline-none dark:hover:text-white border-2 border-white dark:border-black hover:border-light-secondary dark:hover:border-dark-secondary dark:text-gray-400"
        type="button"
      >
        <Bell size={20} fill="#000" />
      </button>
      {openModal && (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={dropdown}
          id="dropdownNotification"
          className="z-20 flex flex-col absolute right-[2rem] w-full max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-black dark:divide-gray-700 mt-5"
          aria-labelledby="dropdownNotificationButton"
        >
          <div className="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-[#f5f5f5] dark:bg-dark-bg dark:text-white">
            Notifications
          </div>
          <div className="divide-y overflow-y-auto componentScroll max-h-[20rem] z-10 divide-gray-100 dark:divide-gray-700 backdrop-filter backdrop-blur-lg backdrop-brightness-75">
            {responseData?.data?.map((item, index) => (
              <NotificationItem key={index} {...item} />
            ))}
          </div>
          <div className="block px-4 py-1 font-medium text-center text-gray-700 rounded-t-lg bg-[#f5f5f5] dark:bg-dark-bg dark:text-white">
            View All
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;
