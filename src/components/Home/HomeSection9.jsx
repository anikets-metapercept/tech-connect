import { useEffect, useState } from "react";

function HomeSection9() {
  const baseUrl = import.meta.env.VITE_STRAPI_BASE_URL;
  const [eventGallery, setEventGallery] = useState([]);

  const getImages = async () => {
    try {
      const res = await fetch(
        `${baseUrl}/event-galleries?populate=event_image`
      );
      const data = await res.json();
      setEventGallery(data.data);
    } catch (error) {
      console.log("Error: ", error.message);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto px-4 lg:px-10 my-5">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
        {eventGallery &&
          eventGallery.map((image) => (
            <img
              className="object-cover rounded-lg w-full h-full"
              src={`http://localhost:1337${image.event_image?.url}`}
              alt=""
            />
          ))}
      </div>
    </div>
  );
}

export default HomeSection9;
