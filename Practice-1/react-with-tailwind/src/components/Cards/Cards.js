import React from "react";
import { AnnotationIcon, RssIcon, ThumbUpIcon } from "@heroicons/react/solid";
const Cards = () => {
  const profiles = [
    {
      id: 1,
      name: "Rohim Uddin",
      location: "London, UK",
      img: "https://aromusk.netlify.app/images/customer1.jpg",
      follower: 54,
      post: 221,
      like: 48,
    },
    {
      id: 2,
      name: "Karim Uddin",
      location: "Dubai, UAE",
      img: "https://aromusk.netlify.app/images/customer2.jpg",
      follower: 76,
      post: 344,
      like: 63,
    },
    {
      id: 3,
      name: "Solim Uddin",
      location: "Johanesburg, RSA",
      img: "https://aromusk.netlify.app/images/customer3.jpg",
      follower: 38,
      post: 182,
      like: 29,
    },
  ];
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-10 justify-center my-10 px-5">
        {profiles.map((profile) => (
          <div>
            <div className="bg-white shadow-xl rounded border border-violet-700">
              <div>
                <img
                  src="https://picsum.photos/seed/picsum/400/150"
                  alt=""
                  className="rounded-t w-full"
                />
              </div>
              <div className="relative top-[-40px] md:top-[-60px] ">
                <img
                  src={profile.img}
                  alt=""
                  className=" w-20 md:w-32 rounded-full mx-auto border-2 border-purple-700 aspect-square"
                />
              </div>

              <div>
                <h4 className="text-xl md:text-3xl mt-[-30px] md:mt-[-40px] text-violet-800">
                  {profile.name}
                </h4>
                <p className="text-slate-400 mt-1">{profile.location}</p>
              </div>
              <hr className="mt-11 mb-3" />
              <div className="flex flex-row justify-center gap-10  mb-3">
                <div>
                  <AnnotationIcon className="w-8 font text-base text-gray-500 mx-auto"></AnnotationIcon>
                  <p className="text-base text-blue-700">{profile.post}</p>
                  <p className="text-base text-gray-500">Posts</p>
                </div>
                <div>
                  <RssIcon className="w-8 font text-base text-gray-500 mx-auto"></RssIcon>
                  <p className="text-base text-blue-700">{profile.follower}K</p>
                  <p className="text-base text-gray-500">Follower</p>
                </div>
                <div>
                  <ThumbUpIcon className="w-8 font text-base text-gray-500 mx-auto"></ThumbUpIcon>
                  <p className="text-base text-blue-700">{profile.like}K</p>
                  <p className="text-base text-gray-500">Likes</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
