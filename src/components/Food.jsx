import { useState } from "react";

export default function Food() {
  const [foodList, setFoodList] = useState(["Apple", "Banana"]);
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput((i) => event.target.value);
  };

  const handleAddFood = () => {
    setFoodList((f) => [...foodList, input]);
    setInput("");
  };

  const handleRemoveFood = (index) => {
    const newFoodList = foodList.filter((_, i) => i !== index);
    setFoodList((f) => newFoodList);
  };

  const foodItems = foodList.map((food, index) => {
    return (
      <li key={index} onClick={() => handleRemoveFood(index)}>
        {food}
      </li>
    );
  });

  return (
    <>
      <ul>{foodItems}</ul>
      <label htmlFor="input">
        <input
          type="text"
          name="input"
          id="input"
          placeholder="Enter food..."
          value={input}
          onChange={handleInputChange}
        />
        &nbsp;
        <button onClick={handleAddFood}>Add</button>
      </label>
    </>
  );
}
