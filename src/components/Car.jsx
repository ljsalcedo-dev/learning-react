import { useState } from "react";

export default function Car() {
  const [car, setCar] = useState({
    year: 2025,
    make: "Porsche",
    model: "911 GT3 RS",
    img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Porsche/911/10998/Porsche-911-GT3-RS/1717681506245/front-left-side-47.jpg",
  });

  const handleCarChange = (event) => {
    setCar(c => ({...c, [event.target.name]: event.target.value}));
  }

  const handleImageChange = (event) => {};

  return (
    <>
      <div className="car-container">
        <p>
          {car.year} {car.make} {car.model}
        </p>
        <img src={car.img} alt="Car" />

        <div className="input-fields">
          {/* Year */}
          <label htmlFor="year">
            Year&nbsp;
            <input
              type="number"
              name="year"
              id="year"
              value={car.year}
              onChange={handleCarChange}
            />
          </label>

          {/* Make */}
          <label htmlFor="make">
            Make&nbsp;
            <input
              type="text"
              name="make"
              id="make"
              value={car.make}
              onChange={handleCarChange}
            />
          </label>

          {/* Model */}
          <label htmlFor="model">
            Model&nbsp;
            <input
              type="text"
              name="model"
              id="model"
              value={car.model}
              onChange={handleCarChange}
            />
          </label>
        </div>
      </div>
    </>
  );
}
