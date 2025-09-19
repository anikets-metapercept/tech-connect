import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoLocation, IoCalendar } from "react-icons/io5";
import dummyData from "../../json_data/data.js";
import { FaArrowRight } from "react-icons/fa6";

function HomeSection7() {
  const categories = Object.keys(dummyData);
  const [activeCategory, setActiveCategory] = useState(categories[0]); // default - webinars
  const [visible, setVisible] = useState(6);

  const currentData = dummyData[activeCategory] || [];

  return (
    <div className="bg-white text-black">
      <section className="max-w-screen-2xl mx-auto px-4 py-10">
        <h3 className="text-[24px] lg:text-[36px] text-[#273142] font-bold text-center mb-8">
          Discover Events
        </h3>
        <div className="flex flex-col md:flex-row gap-6">
          <aside className="w-full h-fit md:w-64 bg-[#000B21] text-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-500 pb-2">
              Categories
            </h3>
            <ul className="space-y-4">
              {categories.map((item) => (
                <li
                  key={item}
                  onClick={() => {
                    setActiveCategory(item);
                    setVisible(6); // reset visible count on category change
                  }}
                  className={`flex justify-between items-center cursor-pointer ${
                    activeCategory === item
                      ? "text-textHover font-semibold"
                      : "hover:text-textHover"
                  }`}
                >
                  <span>{item}</span>
                  <MdOutlineKeyboardArrowRight className="size-5" />
                </li>
              ))}
            </ul>
          </aside>

          {/* Cards Section */}
          <div className="flex-1">
            {currentData.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentData.slice(0, visible).map((event) => (
                    <div
                      key={event.id}
                      className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-semibold text-lg">{event.title}</h4>
                        <div className="flex justify-between items-center mt-3 text-sm text-black">
                          <div className="flex gap-1 justify-center items-center">
                            <IoCalendar className="size-4" />{" "}
                            <span>{event.date}</span>
                          </div>
                          <div className="flex gap-1 justify-center items-center">
                            <IoLocation className="size-4" />{" "}
                            <span>{event.location}</span>
                          </div>
                        </div>
                        <a
                          href="#"
                          className="text-textHover text-sm font-medium mt-2 inline-block"
                        >
                          <span className="flex justify-center items-center gap-1">
                            More Info <FaArrowRight />
                          </span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Load More */}
                {visible < currentData.length && (
                  <div className="text-center mt-8">
                    <button
                      onClick={() => setVisible((prev) => prev + 6)}
                      className="px-6 py-2 bg-gradient-to-r from-[#FFAC01] to-[#5ECB38] text-white font-semibold rounded-lg shadow-md"
                    >
                      Load More
                    </button>
                  </div>
                )}
              </>
            ) : (
              <p className="text-center text-black mt-10">No events found.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeSection7;
