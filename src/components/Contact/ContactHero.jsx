import React from "react";
import cornerImg from "../../assets/home/VectorImg.png";
import partnerImg from "../../assets/home/partner.png";

function ContactHero() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 lg:px-10 py-5 pt-28">
      <div className="w-full flex justify-center items-start flex-col lg:flex-row gap-5 md:gap-10 relative">
        <div className="w-fit hidden lg:block absolute -top-10 -right-8">
          <img
            style={{ maxWidth: "94px" }}
            src={cornerImg}
            alt="Corner Image"
            className="mt-5"
          />
        </div>
        <div className="flex justify-center items-center flex-col gap-5">
          <h1 className="text-[24px] sm:text-[36px] lg:text-[48px] text-white font-semibold">
            Contact Us
          </h1>
          <div className="flex justify-between items-center flex-col customWidth:flex-col lg:flex-row gap-8">
            <img
              src={partnerImg}
              alt="contact us hero image"
              className="rounded-tl-3xl rounded-br-3xl"
            />
            <div className="flex justify-center items-start flex-col gap-4">
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ducimus eius maiores perspiciatis modi nulla? Laborum libero ad
                ullam. Atque doloribus nihil voluptate tempore tenetur, odit
                sunt exercitationem expedita nisi minus.
              </p>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ducimus eius maiores perspiciatis modi nulla? Laborum libero ad
                ullam. Atque doloribus nihil voluptate tempore tenetur, odit
                sunt exercitationem expedita nisi minus.
              </p>
              <h2 className="text-[24px] lg:text-[32px] text-white font-semibold">
                Any project on your mind? Let us know
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactHero;
