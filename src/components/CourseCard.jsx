import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const CourseCard = ({
  title,
  desc,
  instructor,
  company,
  rating,
  reviews,
  price,
  image,
  avatar,
}) => {
  return (
    <div className="w-full max-w-xs bg-white rounded-xl shadow-md border border-gray-200 p-4">
      <figure className="rounded-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-40 object-cover" />
      </figure>

      <div className="mt-4">
        <h2 className="font-semibold text-lg text-gray-800 leading-snug">
          {title}
        </h2>
        <p className="text-sm text-gray-500 mt-1">{desc}</p>

        <div className="flex items-center gap-3 mt-3">
          <img src={avatar} alt={instructor} className="w-8 h-8 rounded-full" />
          <div className="text-sm">
            <p className="font-medium text-gray-800">{instructor}</p>
            <p className="text-gray-500">
              Senior Accountant di{" "}
              <span className="font-medium">{company}</span>
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-1 text-yellow-400 text-sm">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            <FaRegStar />
            <span className="text-gray-600 ml-2">
              {rating} <span className="text-gray-400">({reviews})</span>
            </span>
          </div>
          <div className="text-green-600 font-semibold text-lg">
            Rp {price / 1000}K
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
