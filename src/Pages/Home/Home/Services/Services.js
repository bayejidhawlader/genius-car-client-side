import React, { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json");
  }, []);
  return (
    <div>
      <div className="text-center">
        <p className="text-2xl font-bold text-orange-600">Services</p>
        <h2 className="text-5xl font-bold my-4">Our Service Area</h2>
        <p className="w-96 mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
    </div>
  );
};

export default Services;
