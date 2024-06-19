import React from 'react'
import adobe from '../../assets/images/adobe.png'
const Copyright = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 60 15.619"
            aria-labelledby="IconBase-title-5d695342-6f9c-4dcd-9083-66b3ea3ff554 IconBase-description-5d695342-6f9c-4dcd-9083-66b3ea3ff554"
            role="graphics-symbol img"
            aria-hidden="true"
            width={80}
            fill='white'
          >
            <title id="IconBase-title-5d695342-6f9c-4dcd-9083-66b3ea3ff554">
              Adobe, Inc.
            </title>
            <desc id="IconBase-description-5d695342-6f9c-4dcd-9083-66b3ea3ff554"></desc>
            <g>
              <path
                d="M179.682,34.616l-.647,2a.145.145,0,0,1-.148.107h-1.564c-.094,0-.122-.053-.107-.132l2.7-7.78a2.513,2.513,0,0,0,.132-.823.089.089,0,0,1,.081-.094h2.157c.067,0,.094.013.108.081l3.06,8.629c.026.067.013.12-.067.12h-1.75a.132.132,0,0,1-.149-.094l-.688-2.009ZM182.3,32.93c-.264-.89-.808-2.522-1.058-3.479h-.013c-.216.9-.7,2.38-1.058,3.479Z"
                transform="translate(-153.778 -24.202)"
              ></path>
              <path
                d="M241.14,28.636a3.573,3.573,0,0,1,3.91-3.541c.107,0,.242.015.444.028V22.46a.085.085,0,0,1,.094-.094h1.7c.067,0,.081.026.081.081v7.969a7.51,7.51,0,0,0,.054.984c0,.067-.013.094-.094.122a6.793,6.793,0,0,1-2.657.538A3.226,3.226,0,0,1,241.14,28.636Zm4.355-1.915a1.389,1.389,0,0,0-.5-.067,1.8,1.8,0,0,0-1.928,1.887,1.687,1.687,0,0,0,1.793,1.915,1.9,1.9,0,0,0,.633-.081Z"
                transform="translate(-209.252 -19.408)"
              ></path>
              <path
                d="M303.016,46.411a3.328,3.328,0,1,1-6.646.041,3.3,3.3,0,0,1,3.356-3.492A3.212,3.212,0,0,1,303.016,46.411Zm-4.746.015c0,1.19.553,1.941,1.455,1.941.783,0,1.375-.674,1.375-1.915,0-1.058-.431-1.928-1.455-1.928C298.864,44.524,298.27,45.225,298.27,46.426Z"
                transform="translate(-257.179 -37.279)"
              ></path>
              <path
                d="M356.658,22.37c.108,0,.132.013.132.108v2.764a4.3,4.3,0,0,1,1.135-.144,3.086,3.086,0,0,1,3.236,3.209,3.743,3.743,0,0,1-4.044,3.761A7.063,7.063,0,0,1,355,31.759a.156.156,0,0,1-.081-.132V22.464c0-.067.026-.094.094-.094Zm.926,4.314a2.71,2.71,0,0,0-.793.108v3.654a2.064,2.064,0,0,0,.5.054,1.856,1.856,0,0,0,1.954-2.023,1.58,1.58,0,0,0-1.656-1.792Z"
                transform="translate(-307.986 -19.412)"
              ></path>
              <path
                d="M409.443,46.941c.067.768.607,1.4,1.928,1.4a4.176,4.176,0,0,0,1.658-.309c.041-.028.081-.013.081.067v1.28c0,.1-.026.132-.094.163a4.53,4.53,0,0,1-2.063.4,3.161,3.161,0,0,1-3.424-3.41,3.286,3.286,0,0,1,3.262-3.56,2.748,2.748,0,0,1,2.844,2.909,4.281,4.281,0,0,1-.067.9.114.114,0,0,1-.107.107,12.3,12.3,0,0,1-1.39.054Zm1.753-1.308a4.486,4.486,0,0,0,.674-.026v-.1a1.1,1.1,0,0,0-1.147-1.058,1.278,1.278,0,0,0-1.295,1.19Z"
                transform="translate(-353.639 -37.288)"
              ></path>
              <path
                d="M84.13,0h6.523V15.619Z"
                transform="translate(-73.005)"
              ></path>
              <path d="M6.529,0H0V15.619Z"></path>
              <path
                d="M48.032,43.53l4.156,9.862H49.465l-1.243-3.141H45.18Z"
                transform="translate(-39.205 -37.774)"
              ></path>
            </g>
          </svg>
        </div>
        <div className='flex mt-1'>
          <h1 className='font-bold text-white text-sm'>
            &copy;&nbsp;2024 Adobe Inc. All rights reserved.
          </h1>
        </div>
      </div>
      <div className='flex flex-wrap gap-6 items-center text-sm'>
        <a href=''>English</a>
        <a href=''>TOU</a>
        <a href=''>Privacy</a>
        <a href=''>Communities</a>
        <a href=''>Cookie Preferences</a>
        <a href=''>Do not sell or share my personal information</a>
      </div>
    </div>
  );
}

export default Copyright