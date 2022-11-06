import React from "react";
import bannerImgPerson from "../../../../assets/images/about_us/person.jpg";
import bannerImgParts from "../../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero my-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
          <img
            src={bannerImgPerson}
            alt=""
            className="w-4/5 h-full rounded-lg"
          />
          <img
            src={bannerImgParts}
            alt=""
            className="absolute w-3/5 right-5 top-1/2 rounded-lg border-4 border-white"
          />
        </div>
        <div className="w-1/2">
          <h2 className="text-2xl font-bold text-orange-600">About Us</h2>
          <h1 className="text-5xl font-bold my-4">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-error rounded-none my-6">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
