import { useState } from "react";

export default function CarArray() {
  const [cars, setCars] = useState([]);

  const [year, setYear] = useState(new Date().getFullYear());
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");

  const handleYearChange = (event) => {
    setYear((y) => event.target.value);
  };

  const handleMakeChange = (event) => {
    setMake((m) => event.target.value);
  };

  const handleModelChange = (event) => {
    setModel((m) => event.target.value);
  };

  const handleAddCar = () => {
    const newCar = {
      year: year,
      make: make,
      model: model,
    };
    setCars((c) => [...c, newCar]);
    setYear((y) => new Date().getFullYear());
    setMake((m) => "");
    setModel((m) => "");
  };

  const handleRemoveCar = (index) => {
    const newCarList = cars.filter((_, i) => i != index);

    setCars((c) => newCarList);
  };

  const carList = cars.map((car, index) => {
    return (
      <li key={index} onClick={() => handleRemoveCar(index)}>
        {car.year} {car.make} {car.model}
      </li>
    );
  });

  return (
    <>
      <div className="carlist-container">
        <h2>List of Cars</h2>
        <ul>{carList}</ul>
        <input
          type="number"
          name="year"
          id="year"
          value={year}
          onChange={handleYearChange}
        />
        <input
          type="text"
          name="make"
          id="make"
          placeholder="Enter make"
          value={make}
          onChange={handleMakeChange}
        />
        <input
          type="text"
          name="model"
          id="model"
          value={model}
          placeholder="Enter model"
          onChange={handleModelChange}
        />
        <br />
        <button onClick={handleAddCar}>Add</button>
      </div>
    </>
  );
}
