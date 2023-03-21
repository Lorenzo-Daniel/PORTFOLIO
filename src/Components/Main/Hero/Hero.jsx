import React from "react";
import dani from "../../../assets/images/da1-2.jpg";

const Hero = () => {
  return (
    <section className="  d-xl-none mt-3 ">
      <div>
        <img
          src={dani}
          className="img-fluid w-100 "
          alt="portada"
          style={{
            maxHeight: 400,
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
      <h1 className="mt-4 text-center">Aboue Me</h1>
      <p className="text-center">
        I am a person with a high degree of responsibility, commitment, interest
        and enthusiasm to develop in the IT world.
      </p>
    </section>
  );
};

export default Hero;
