import { Link } from "react-router-dom";
import partnerImg from "../../assets/home/partner.png";
import cornerImg from "../../assets/home/VectorImg.png";
import { FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { IoCheckmark } from "react-icons/io5";

function HomeSection12() {
  const baseUrl = import.meta.env.VITE_STRAPI_BASE_URL;
  const [membershipTypes, setMembershipTypes] = useState([]);

  const getMembershipData = async () => {
    try {
      const res = await fetch(`${baseUrl}/memberships`);
      const data = await res.json();
      setMembershipTypes(data.data);
    } catch (error) {
      console.log("Error: ", error.message);
    }
  };

  useEffect(() => {
    getMembershipData();
  }, []);


  return (
    <div
      style={{
        background: `
      linear-gradient(#0F3460,#FF5050CC)
      `,
      }}
    >
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-10">
        <div className="w-full flex justify-center items-center flex-col customWidth:flex-col lg:flex-col gap-5 md:gap-10 py-5 lg:py-10 relative">
          <div className="w-fit hidden lg:block absolute top-0 -right-8">
            <img
              style={{ maxWidth: "94px" }}
              src={cornerImg}
              alt="Corner Image"
              className=""
            />
          </div>
          <h3 className="text-[24px] lg:text-[48px] text-white font-semibold">
            Membership Benefits
          </h3>
          <div className="w-full flex justify-center items-center flex-col lg:flex-row gap-10 lg:mt-8">
            <img
              src={partnerImg}
              alt="partner image"
              className="rounded-tl-3xl rounded-br-3xl lg:max-w-[480px]"
            />
            <p className="w-full lg:w-1/2 text-[16px] sm:text-[18px] text-white text-justify leading-[150%]">
              Becoming a TechConnect member unlocks a world of opportunities to
              engage, learn, and grow in the ever-evolving tech landscape.
              Whether you're a thought leader or an industry professional, our
              membership provides you with a platform to connect, collaborate,
              and amplify your voice.
            </p>
          </div>
          <div className="w-full flex justify-center items-center flex-col gap-10 lg:mt-8">
            <h3 className="text-[24px] lg:text-[32px] text-white font-semibold">
              Types of Memberships
            </h3>
            <div className="w-full flex flex-col lg:flex-row justify-center items-stretch gap-10 lg:px-10 pt-5">
              {membershipTypes &&
                membershipTypes.map((type, index) => (
                  <div key={index} className="flex-1 relative bg-white rounded-lg shadow-md p-2 lg:p-6 w-full max-w-[540px]">
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#FFAC01] text-white text-[16px] sm:text-[18px] font-semibold px-10 py-2 rounded-md shadow">
                      {type.membership_type}
                    </div>
                    <BlocksRenderer
                      content={type.membership_description}
                      blocks={{
                        list: ({ children, format }) =>
                          format === "unordered" ? (
                            <ul className="mt-6 space-y-3">{children}</ul>
                          ) : (
                            <ol className="mt-6 space-y-3">{children}</ol>
                          ),
                        "list-item": ({ children }) => (
                          <li className="flex items-start justify-start gap-1 shrink-0">
                            <IoCheckmark className="text-[#FFAC01] font-bold size-4 lg:size-6 mt-1" />
                            <span className="text-[16px] lg:text-[18px] font-medium">
                              {children}
                            </span>
                          </li>
                        ),
                      }}
                    />
                  </div>
                ))}
            </div>
            <Link className="group flex justify-center items-center text-[18px] lg:text-[24px] font-semibold bg-gradient-to-r gap-4 from-[#FFAC01] to-[#5ECB38] hover:bg-[#5ECB38] hover:bg-none px-5 py-3 rounded-2xl">
              <span>Become a Member</span>
              <FaArrowRight className="size-5 -rotate-[30deg] hover:rotate-0 group-hover:rotate-0 transition-transform duration-300 lg:mt-1.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection12;
