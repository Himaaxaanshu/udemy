import React, { useEffect, useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa"
import { courseData } from "./courseData";
import Topbar from "../common/Topbar";


const Wishlist = () => {
  const [course, setCourse] = useState(courseData)
  const savedWishlist = localStorage.getItem("altaEdWishlist")

  const [wishlist, setWishlist] = useState(() => {
    return savedWishlist ? JSON.parse(savedWishlist) : []
  })


  useEffect(() => {
    const fevList = JSON.parse(savedWishlist) || []
    setCourse(course.filter((item) => fevList.includes(item.title)));
    localStorage.setItem("altaEdWishlist", JSON.stringify(wishlist));
  }, [wishlist])



  const onClickHeart = (title) => {
    if (wishlist.includes(title)) {
      setWishlist(wishlist.filter((item) => item !== title))
    } else {
      setWishlist([...wishlist, title]);
    }
  }


  return (
    <>
      <Topbar title='Wishlist' from='Home' to='Wishlist' />
      <div className="grid grid-cols-1 my-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {course.map((course, id) => {
          return (
            <div className="w-full bg-gray-100 border border-gray-900 shadow-md rounded-md">
              <div className="flex flex-col rounded-xl text-gray-700 h-[350px]">
                <div className="relative overflow-hidden bg-blue-gray-500 h-[150px] rounded-md">
                  <img
                    src="https://www.simplilearn.com/ice9/free_resources_article_thumb/full_stack_banner.jpg"
                    alt="Course Thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex w-full p-3">
                  <div className="w-[85%]">
                    <h5 className="text-lg md:text-base sm:text-sm font-medium text-blue-gray-900 text-justify line-clamp-2">
                      {course.title}
                    </h5>
                  </div>
                  <div
                    className="w-[15%] flex items-center justify-center cursor-pointer"
                    onClick={() => onClickHeart(course.title)}
                  >
                    {wishlist.includes(course.title) ? (
                      <FaHeart size={20} color="red" />
                    ) : (
                      <FaRegHeart size={20} />
                    )}
                  </div>
                </div>
                <div className="px-3 flex flex-col">
                  <span className="text-base sm:text-sm text-black">course.author</span>
                  <span className="text-base sm:text-sm text-black">course.level</span>
                  <span className="text-base sm:text-sm text-black">
                    ₹ <span className="text-purple-600 font-semibold">course.price</span>
                  </span>
                </div>
                <div className="p-3 mt-auto flex space-x-3">
                  <button className="w-1/2 rounded-md bg-transparent px-3 py-2 text-xs text-black uppercase font-semibold shadow-md border border-black transition hover:bg-gray-800">
                    View Details
                  </button>
                  <button className="w-1/2 rounded-md bg-purple-600 px-3 py-2 text-xs text-white uppercase font-semibold shadow-md transition hover:bg-purple-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default Wishlist