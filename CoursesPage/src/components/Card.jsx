import React from 'react';
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';

function Card({ course, likedcourses, setLikedcourses }) {

  let description = course.description;
  if (description.length > 100) {
    description = description.substring(0, 100) + '...';
  }

  const handleLike = () => {
    if (likedcourses.includes(course.id)) {
      setLikedcourses((prev) => {
        toast.warning('Like removed');
        return prev.filter((id) => id !== course.id);
      });
    } else {
      setLikedcourses((prev) => {
        toast.success('Like added');
        return [...prev, course.id];
      });
    }
  };

  return (
    <div className="card w-[20vw] sm:w-[40vw] md:w-[20vw] border-2 border-blue-800 rounded-lg px-3 py-3 shadow-blue bg-white relative">
      <div className="rounded-full object-cover z-0">
        <img
          src={course.image.url || 'fallback-image-url.jpg'} // Fallback image if URL is missing
          alt={course.title || 'Course image'} // Fallback alt text
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="px-3 py-1 z-10">
        <h1 className="coursename font-bold text-xl mt-1 h-10"> {course.title || 'Course Title'} </h1>
        <p className="font-semibold mt-7 text-blue-500"> {description} </p>
      </div>
      {/* Like button */}
      <button
        className="w-12 h-12 px-2 py-2 rounded-full text-center bg-[#fcf8f8] absolute ml-[73%] mt-[-60%] z-40 cursor-pointer overflow-hidden"
        onClick={handleLike}
        aria-label={likedcourses.includes(course.id) ? 'Unlike course' : 'Like course'} // Accessibility improvement
        title={likedcourses.includes(course.id) ? 'Remove like' : 'Add like'} // Tooltip for better UX
      >
        {
          likedcourses.includes(course.id) ? <FcLike size={30} className="object-cover" /> : <FcLikePlaceholder size={30} className="object-cover"/>
        }
      </button>
    </div>
  );
}

export default Card;
