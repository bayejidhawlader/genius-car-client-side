import React, { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [isAsc, setIsAsc] = useState(true);
  const [search, setSerach] = useState("");
  const searchRef = useRef();
  useEffect(() => {
    fetch(
      `https://genius-car-server-rho-rust.vercel.app/services?search=${search}&order=${
        isAsc ? "asc" : "desc"
      }`
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [isAsc, search]);

  const handleSearch = () => {
    setSerach(searchRef.current.value);
  };
  return (
    <div>
      <div className="text-center my-20">
        <p className="text-2xl font-bold success">Services</p>
        <h2 className="text-5xl font-bold my-4">Our Service Area</h2>
        <p className="w-96 mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <input
          ref={searchRef}
          className="input input-bordered input-md w-full max-w-xs"
          type="text"
        />{" "}
        <button onClick={handleSearch}>Search</button>
        <button
          className="bt border-gray-800 p-3 btn-ghost"
          onClick={() => setIsAsc(!isAsc)}
        >
          {isAsc ? "desc" : "asc"}
        </button>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
