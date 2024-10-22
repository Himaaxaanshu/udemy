import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoBookOutline } from "react-icons/io5";
import { TiThSmall } from "react-icons/ti";


const Profile = () => {
  const navigate = useNavigate()
  const [isEditing, setIsEditing] = useState(false)

  const [profileData, setProfileData] = useState({
    name: 'Shanuj Yadav',
    email: 'john.doe@example.com',
    phone: '+123 456 7890',
    gender: 'Male',
    age: '28',
    industry: 'Technology',
    profession: 'Software Engineer'
  })

  const handleEditClick = () => {
    setIsEditing(!isEditing)
  }


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedProfileData = { ...profileData, [name]: value };
    setProfileData(updatedProfileData);
    console.log(updatedProfileData);
  }

  return (
    <div className="flex-1">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 my-4">
        <a href='/my-course' class="no-underline p-2 mx-2">
          <div class="flex items-center flex-row w-full bg-purple-700 rounded-md p-2">
            <div class="flex text-indigo-500 dark:text-white items-center bg-white dark:bg-[#0F172A] p-1 rounded-md flex-none w-6 h-6 md:w-8 md:h-8">
              <IoBookOutline size={20} />
            </div>
            <div class="flex flex-col justify-around flex-grow ml-5 text-white">
              <div class="text-md font-semibold whitespace-nowrap">My Courses (2)</div>
            </div>
            <div class="flex items-center flex-none text-white">
              <IoIosArrowForward size={20} />
            </div>
          </div>
        </a>



        <a href='/wishlist' class="no-underline p-2 mx-2">
          <div class="flex items-center flex-row w-full bg-purple-700 rounded-md p-2">
            <div class="flex text-indigo-500 dark:text-white items-center bg-white dark:bg-[#0F172A] p-1 rounded-md flex-none w-6 h-6 md:w-8 md:h-8">
              <IoMdHeartEmpty size={20} />
            </div>
            <div class="flex flex-col justify-around flex-grow ml-5 text-white">
              <div class="text-md font-semibold whitespace-nowrap">Wishlist</div>
            </div>
            <div class="flex items-center flex-none text-white">
              <IoIosArrowForward size={20} />
            </div>
          </div>
        </a>


        <a href='/cart' class="no-underline p-2 mx-2">
          <div class="flex items-center flex-row w-full bg-purple-700 rounded-md p-2">
            <div class="flex text-indigo-500 dark:text-white items-center bg-white dark:bg-[#0F172A] p-1 rounded-md flex-none w-6 h-6 md:w-8 md:h-8">
              <IoCartOutline size={20} />
            </div>
            <div class="flex flex-col justify-around flex-grow ml-5 text-white">
              <div class="text-md font-semibold whitespace-nowrap">Cart (2)</div>
            </div>
            <div class="flex items-center flex-none text-white">
              <IoIosArrowForward size={20} />
            </div>
          </div>
        </a>


        <a href='/' class="no-underline p-2 mx-2">
          <div class="flex items-center flex-row w-full bg-purple-700 rounded-md p-2">
            <div class="flex text-indigo-500 dark:text-white items-center bg-white dark:bg-[#0F172A] p-1 rounded-md flex-none w-6 h-6 md:w-8 md:h-8">
              <TiThSmall size={20} />
            </div>
            <div class="flex flex-col justify-around flex-grow ml-5 text-white">
              <div class="text-md font-semibold whitespace-nowrap">All Courses</div>
            </div>
            <div class="flex items-center flex-none text-white">
              <IoIosArrowForward size={20} />
            </div>
          </div>
        </a>
      </div>



      <div className="max-w-full md:max-w-3xl lg:max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden p-6 my-5 mx-auto">
        <div className="mb-4">
          <h2 className="text-2xl text-indigo-600 md:text-3xl font-bold">{profileData.name}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p className="text-gray-700"><strong>Email:</strong> {profileData.email}</p>
          <p className="text-gray-700"><strong>Phone:</strong> {profileData.phone}</p>
          <p className="text-gray-700"><strong>Gender:</strong> {isEditing ? (
            <select
              name="gender"
              value={profileData.gender}
              onChange={handleInputChange}
              className="border p-2 w-full"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          ) : (
            profileData.gender
          )}</p>
          <p className="text-gray-700"><strong>Age:</strong> {isEditing ? (
            <input
              type="text"
              name="age"
              value={profileData.age}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          ) : (
            profileData.age
          )}</p>
          <p className="text-gray-700"><strong>Industry:</strong> {isEditing ? (
            <input
              type="text"
              name="industry"
              value={profileData.industry}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          ) : (
            profileData.industry
          )}</p>
          <p className="text-gray-700"><strong>Profession:</strong> {isEditing ? (
            <select
              name="profession"
              value={profileData.profession}
              onChange={handleInputChange}
              className="border p-2 w-full"
            >
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
              <option value="Working Professional">Working Professional</option>
            </select>
          ) : (
            profileData.profession
          )}</p>
        </div>

        <div className="mt-6 text-right">
          {isEditing ? (
            <button
              onClick={handleEditClick}
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none"
            >
              Save
            </button>
          ) : (
            <button
              onClick={handleEditClick}
              className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:outline-none"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div >
  )
}
export default Profile