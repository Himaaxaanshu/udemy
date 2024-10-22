import React from 'react'

const Instructor = () => {

    const instructors = [
        { name: 'Jon Kanter', title: 'Designer', image: 'url-to-image-1' },
        { name: 'Debbie Lachusa', title: 'SEO', image: 'url-to-image-2' },
        { name: 'Edwin Diaz', title: 'Composer', image: 'url-to-image-3' },
        { name: 'Cassie Evans', title: 'Photographer', image: 'url-to-image-4' },
        { name: 'Erich Andreas', title: 'Programmer', image: 'url-to-image-5' },
        { name: 'Jason Allen', title: 'Accounting', image: 'url-to-image-6' },
    ]


    return (
        <section className="py-16 relative">
            <div className="absolute inset-0 -z-10 w-full h-full bg-gradient-to-r from-purple-100 to-purple-200">
                <svg className="absolute top-0 right-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#f5f3ff"
                        fillOpacity="1"
                        d="M0,288L48,272C96,256,192,224,288,208C384,192,480,192,576,192C672,192,768,192,864,208C960,224,1056,256,1152,240C1248,224,1344,160,1392,128L1440,96V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z"
                    />
                </svg>
            </div>

            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/3 mt-28 md:mb-0">
                        <h2 className="text-4xl font-bold">
                            <span className="text-purple-600">Best</span>{' '}
                            <span className="text-black">Instructors</span>
                        </h2>
                        <p className="text-gray-600 mt-4">
                            At The Academy, We Strive To Bring Together The Best Professors For The Best Courses
                        </p>
                        <button className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition duration-300">
                            All Instructors
                        </button>
                    </div>

                    <div className="w-full md:w-2/3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {instructors.map((instructor, index) => (
                                <div
                                    key={index}
                                    className="bg-white shadow-lg rounded-lg overflow-hidden text-center p-6 transition-transform duration-300 hover:shadow-xl hover:scale-105"
                                >
                                    <img
                                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                                        src={instructor.image}
                                        alt={instructor.name}
                                    />
                                    <h3 className="text-lg font-semibold text-gray-800">{instructor.name}</h3>
                                    <p className="text-gray-500">{instructor.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Instructor