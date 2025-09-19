import newsLetter from "../../assets/home/newsletter.png";
import cornerImg from "../../assets/home/corner-img.png";

function HomeSection11() {
  return (
    <div className="bg-[#051639]">
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-10">
        <div className="flex justify-center flex-col items-center py-5 lg:py-10 relative">
          <div className="w-fit hidden lg:block absolute top-2 left-0">
            <img
              style={{ maxWidth: "94px" }}
              src={cornerImg}
              alt="Corner Image"
              className="mt-5"
            />
          </div>
          <h3 className="text-[24px] lg:text-[48px] text-white font-semibold mb-4">
            Techconnect Newsletter
          </h3>
          <div className="w-full flex justify-center items-center lg:justify-start lg:items-start flex-col lg:flex-row gap-5 md:gap-10 py-4 lg:py-10">
            <div className="lg:w-1/2">
              <img
                src={newsLetter}
                alt="newsletter image"
                className="lg:max-w-[480px] rounded-tl-3xl rounded-br-3xl"
              />
            </div>
            <div className="flex justify-center items-center lg:items-start flex-col gap-2 lg:mt-8">
              <h4 className="text-[16px] sm:text-[18px] lg:text-[22px] text-white text-justify">
                Subscribe with us for latest news, articles, events.
              </h4>
              <p className="text-[16px] lg:text-[18px] text-white">
                Join our community today!
              </p>
              <form
                action=""
                method="POST"
                className="w-full flex justify-center items-start flex-col gap-3 my-4"
              >
                <div className="w-full flex flex-col gap-1">
                  <label className="text-white font-medium" htmlFor="name">
                    Name
                  </label>
                  <input className="lg:w-[380px] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-textHover" type="text" name="name" id="name" />
                </div>
                <div className="w-full flex flex-col gap-1">
                  <label className="text-white font-medium" htmlFor="email">
                    Email
                  </label>
                  <input className="lg:w-[380px] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-textHover" type="email" name="email" id="email" />
                </div>
                <button className="w-full lg:w-[380px] mt-4 text-[16px] lg:text-[18px] font-semibold bg-gradient-to-r gap-4 from-[#FFAC01] to-[#5ECB38] hover:bg-[#5ECB38] hover:bg-none px-4 py-2 rounded-lg">
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection11;
